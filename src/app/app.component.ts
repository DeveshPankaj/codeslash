import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  HostListener,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';
import {ElectronService} from 'ngx-electron';
import {TreeComponent} from './tree/tree.component';
import {DataService} from './data.service';
import {EventEmitter} from '@angular/core';


const path = require('path');


class File {
  name: string;
  path: string;
  running: boolean;
  onTop: boolean;

  constructor(name: string, pth: string) {
    this.name = name;
    this.path = pth;
    this.running = false;
    this.onTop = false;
  }
}

const files: File[] = [{name: 'Untitled', path: '/home', running: false, onTop: true}];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  sideConsoleState = false;
  running = false;
  consoleData = 'output:\n';

  openSideConsole() {
    this.sideConsoleState = !this.sideConsoleState;
  }


  @ViewChild('personEdit') editPersonTemplate;

  title = 'untitled';
  dynamicSettings: any;
  isSettingsOpen = false;
  isConsoleOpen = true;
  fullSettings = false;
  showTree = true;
  tabs: File[] = [
    // new File('CAPTBIRD.cpp', '/home/devesh/Desktop/CodeChef')
  ];
  dir;
  globalData;

  @ViewChild('settings', {read: ViewContainerRef}) container;
  treeRef: ComponentFactory<TreeComponent>;
  tree;
  root = '/';
  selectedTab: number = 0;

  constructor(private _data: DataService, private resolver: ComponentFactoryResolver, private deviceService: DeviceDetectorService, private _electronService: ElectronService) {
    this.dynamicSettings = this._electronService.ipcRenderer.sendSync('getSettings', {});
    this.tabs = this.dynamicSettings.openTabs;
    if (this.tabs.length === 0) {
      this.tabs.push(new File('untitled', undefined));
    }
    this.root = this.dynamicSettings.openFolder;
    // console.log(this.dynamicSettings);
    this._electronService.ipcRenderer.on('ping', (event, data) => {
      console.log('ping', data);
    });
  }

  ngOnInit() {
    this._data.currentMessage.subscribe(d => this.globalData = d);
    this.treeRef = this.resolver.resolveComponentFactory(TreeComponent);
    this._electronService.ipcRenderer.on('openConsole', (event, data) => {
      this.sideConsoleState = true;
      console.log('openConsole');
    });

    this._electronService.ipcRenderer.on('programClosed', (event, file) => {
      console.log('programClosed', file);
      this.running = false;
      this.isOpen(file).then((index: number) => {
        if (index !== -1) {
          this.tabs[index].running = false;
        }
      });
    });
  }

  newFile() {
    this.tabs.push(new File('untitled', undefined));
    this.selectedTab = this.tabs.length - 1;
  }

  openFolder() {
    // this.isSettingsOpen = !this.isSettingsOpen;
    this.isSettingsOpen = true;
    const dir = this._electronService.ipcRenderer.sendSync('openFolder', {});
    if (dir) {
      this.root = dir;
    }
    // console.log(dir);
  }

  openFile(f: any) {

    f = {name: f.item, path: f.dir};

    console.log('open file', f);
    this.isOpen(f).then((index: number) => {
      if (index === -1) {
        this.tabs.push(new File(f.name, f.path));
        this._electronService.ipcRenderer.send('save-open-tabs', this.tabs);
        this.selectedTab = this.tabs.length - 1;
      } else {
        this.selectedTab = index;
      }
    });

  }

  isOpen(file) {
    return new Promise((resolve, reject) => {
      let found = false;
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i].name === file.name && this.tabs[i].path === file.path) {
          resolve(i);
          found = true;
          break;
        }
        if (i === this.tabs.length - 1) {
          if (found === false) {
            resolve(-1);
          }
        }
      }
    });
  }

  // openFileCommand(f) {
  //   f = {name: f.item, path: f.dir, size: 0};
  //   console.log('from app', f);
  // }

  removeTab(index: number) {
    // console.log('closing', this.tabs[index]);
    this.tabs.splice(index, 1);
    this._electronService.ipcRenderer.send('save-open-tabs', this.tabs);
    if (this.tabs.length === 0) {
      this.tabs.push(new File('untitled', undefined));
    }
  }


  /// console
  width = 400;
  x = 100;
  oldX = 0;
  grabber = false;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.grabber) {
      return;
    }
    this.resizer(event.clientX - this.oldX);
    this.oldX = event.clientX;
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.grabber = false;
  }

  resizer(offsetX: number) {
    this.width -= offsetX;
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.grabber = true;
    this.oldX = event.clientX;
  }

  currentTab(index) {
    this.selectedTab = index;
  }

  runStopProgram(rs) {
    console.log('run/stop', rs);
    const fp = {
      name: this.tabs[this.selectedTab].name,
      path: this.tabs[this.selectedTab].path
    };
    if (fp.path) {
      if (rs === true) {
        this.tabs[this.selectedTab].running = true;
        this.running = true;
        this._electronService.ipcRenderer.send('runProgram', fp);
      } else {
        this.tabs[this.selectedTab].running = false;
        this.running = false;
        this._electronService.ipcRenderer.send('stopProgram', fp);
      }
    } else {
      alert('save the file first');
    }
  }


}
