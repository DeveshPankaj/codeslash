import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {DataService} from '../data.service';
import {ElectronService} from 'ngx-electron';


class File {
  name: string;
  path: string;
  size: number;

  constructor(name: string, path: string, size: number) {
    this.name = name;
    this.path = path;
    this.size = size;
  }
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  globalData;
  @Output() closeTab = new EventEmitter<number>();
  @Output() currentTab = new EventEmitter<number>();
  @Input() tabs: File[];

  @Input()
  set changeSelectedTab(selected) {
    this.selected.setValue(selected);
  }

  selected = new FormControl(0);
  selectedTabIndex = 0;

  constructor(private _data: DataService, private _electronService: ElectronService) {
  }

  ngOnInit() {
    this._data.currentMessage.subscribe(d => this.globalData = d);
    this._electronService.ipcRenderer.on('save', (event, data) => {
      if (this.tabs[this.selectedTabIndex].path) {
        this._electronService.ipcRenderer.send('saveFile', this.tabs[this.selectedTabIndex]);
      } else {
        const file = this._electronService.ipcRenderer.sendSync('saveNewFile', this.tabs[this.selectedTabIndex]);
        this.tabs[this.selectedTabIndex].path = file.path;
        this.tabs[this.selectedTabIndex].name = file.name;
        this._electronService.ipcRenderer.send('save-open-tabs', this.tabs);
      }
    });
  }

  _changeSelectedTab(index) {
    this.selected.setValue(index);
    this.currentTab.emit(index);
    this.selectedTabIndex = index;
    console.log('selected tab', index);
  }

  // addTab(selectAfterAdding: boolean) {
  //   this.tabs.push(new File('New', '/home', 0));
  //
  //   if (selectAfterAdding) {
  //     this.selected.setValue(this.tabs.length - 1);
  //   }
  // }

  // removeTab(index: number) {
  //   this.tabs.splice(index, 1);
  // }

}
