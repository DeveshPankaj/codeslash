import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {ElectronService} from 'ngx-electron';
import {DataService} from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Var
  globalData;
  @Input()running: boolean; // is the any program is running

  isSettingsOpen: boolean;
  isFullScreen = true;

  tooltip = {
    openConsole: {msg: 'Open/Close Console', disabled: false},
    runBTN: {msg: 'run', disabled: false},
    closeBTN: {msg: 'close', disabled: false},
    minimizeBTN: {msg: 'minimize', disabled: false},
    maximizeBTN: {msg: 'maximize', disabled: false}
  };


  // Events
  @Output() openSideConsole = new EventEmitter<boolean>();

  @Output() openFolder = new EventEmitter<boolean>();
  @Output() openFile = new EventEmitter<boolean>();
  @Output() closeLeft = new EventEmitter<boolean>();
  @Output() openLeft = new EventEmitter<boolean>();
  @Output() runStop = new EventEmitter<boolean>();
  @Output() newFile = new EventEmitter<boolean>();
  @Input() isConsoleOpen;

  @Input()
  set _isSettingsOpen(state: boolean) {
    console.log(state);
    this.isSettingsOpen = state;
  }

  // Functions
  closeWindow() {
    this._electronService.remote.getCurrentWindow().close();
  }

  maximizeWindow() {
    this._electronService.remote.getCurrentWindow().maximize();
  }

  minimizeWindow() {
    this._electronService.remote.getCurrentWindow().minimize();
  }

  constructor(
    private _data: DataService,
    private _electronService: ElectronService) {
  }


  runProgram() {
    // this.running = true;
    this.runStop.emit(true);
  }

  stopProgram() {
    // this.running = false;
    this.runStop.emit(false);
  }

  openFolderDialog() {
    this.openFolder.emit(true);
  }


  ngOnInit() {
    this._data.currentMessage.subscribe(d => this.globalData = d);
  }


  _openFile() {
    const file = this._electronService.ipcRenderer.sendSync('openFile', {});
    console.log(file);
    this.openFile.emit(file);
  }

}
