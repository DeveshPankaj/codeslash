import {CollectionViewer, SelectionChange} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Injectable, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {BehaviorSubject, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ElectronService} from 'ngx-electron';
import {reject} from 'q';

const path = require('path');

interface Node {
  dir: string;
  name: string;
  type: string;
}

/** Flat node with expandable and level information */
export class DynamicFlatNode {
  constructor(public item: string,
              public dir: string,
              public level = 1,
              public expandable = false,
              public isLoading = false) {
  }
}

/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
export class DynamicDatabase {

  dataMap = new Map<string, string[]>([
    ['Fruits', ['Apple', 'Orange', 'Banana']],
    ['Vegetables', ['Tomato', 'Potato', 'Onion']],
    ['Apple', ['Fuji', 'Macintosh']],
    ['Onion', ['Yellow', 'White', 'Purple']]
  ]);
  root: string;
  rootLevelNodes: string[] = ['Fruits', 'Vegetables'];
  ipc: ElectronService;

  /** Initial data from database */
  initialData(root): DynamicFlatNode[] {
    this.root = root;
    console.log(root);
    const ls: Node[] = this.ipc.ipcRenderer.sendSync('getDir', this.root);
    // return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
    return ls.map((node: Node) => new DynamicFlatNode(node.name, this.root, 0, node.type === 'folder'));
  }

  getChildren(node: DynamicFlatNode): Node[] | undefined {
    const ls: Node[] = this.ipc.ipcRenderer.sendSync('getDir', path.join(node.dir, node.item));
    // console.log(ls);
    return ls;
    // return this.dataMap.get(ls);
  }

  isExpandable(node: Node): boolean {
    return node.type === 'folder';
    // return this.dataMap.has(node);
  }

  setIPC(ipc: ElectronService) {
    this.ipc = ipc;
  }
}

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
@Injectable()
export class DynamicDataSource {

  dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);
  delay = 0;

  get data(): DynamicFlatNode[] {
    return this.dataChange.value;
  }

  set data(value: DynamicFlatNode[]) {
    this.treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(private treeControl: FlatTreeControl<DynamicFlatNode>,
              private database: DynamicDatabase,
              private _electronService: ElectronService) {
    this.database.setIPC(this._electronService);
  }

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this.treeControl.expansionModel.onChange.subscribe(change => {
      if ((change as SelectionChange<DynamicFlatNode>).added ||
        (change as SelectionChange<DynamicFlatNode>).removed) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }

  /** Handle expand/collapse behaviors */
  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
    }
  }

  /**
   * Toggle the node, remove from display list
   */
  toggleNode(node: DynamicFlatNode, expand: boolean) {
    const children = this.database.getChildren(node);
    const index = this.data.indexOf(node);
    if (!children || index < 0) { // If no children, or cannot find the node, no op
      return;
    }

    node.isLoading = true;

    setTimeout(() => {
      if (expand) {
        const nodes = children.map((name) => {
          return new DynamicFlatNode(name.name, path.join(node.dir, node.item), node.level + 1, this.database.isExpandable(name));
        });
        this.data.splice(index + 1, 0, ...nodes);
      } else {
        let count = 0;
        for (let i = index + 1; i < this.data.length
        && this.data[i].level > node.level; i++, count++) {
        }
        this.data.splice(index + 1, count);
      }

      // notify the change
      this.dataChange.next(this.data);
      node.isLoading = false;
    }, this.delay);
  }
}

/**
 * @title Tree with dynamic data
 */
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  providers: [DynamicDatabase]
})
export class TreeComponent implements OnInit {
  // root = '/home/devesh/Desktop/untitled';
  database: DynamicDatabase;
  isOpen = false;

  // _root = '/home/devesh/Desktop/untitled';
  _root = '/';
  @Input()
  set root(dir) {
    this._root = dir;
    if (!this.isOpen) {
      this.dataSource.data = this.database.initialData(this._root);
    }
    console.log(dir);
  }

  @Output() openFile = new EventEmitter<any>();


  treeControl: FlatTreeControl<DynamicFlatNode>;
  dataSource: DynamicDataSource;

  constructor(database: DynamicDatabase, private _electronService: ElectronService) {
    this.database = database;
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl, database, this._electronService);

    // this.dataSource.data = database.initialData(this.root);

    try {
      this._electronService.ipcRenderer.send('ping', 'ping');
    } catch (e) {
      console.warn('ElectronService can not work in browser');
    }
  }

  ngOnInit() {
  }

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;
}
