import {Component, OnInit, HostListener, Input} from '@angular/core';
import {ElectronService} from 'ngx-electron';
import {EventEmitter} from 'events';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  isInputOpen = false;
  command = '';
  feedData = '';
  @Input() data: string;

  constructor(private _electronService: ElectronService) {
    this._electronService.ipcRenderer.on('console-data', (event, data) => {
      console.log('console data', data);
      this.data += data + '\n';
    });
  }

  ngOnInit() {
    this._electronService.ipcRenderer.on('consoleData', (event, data, flush) => {
      if (flush === true) {
        this.data = 'output:\n';
      }
      this.data += `${data}`;
      console.log('consoleData', `${data}`);
    });
    this._electronService.ipcRenderer.on('consoleError', (event, data, flush) => {
      if (flush) {
        this.data = data;
      } else {
        this.data += data;
      }
    });
    this._electronService.ipcRenderer.on('getDataFeed', (event, data) => {
      if (this.isInputOpen) {
        this._electronService.ipcRenderer.send('sendDataToProcess', this.feedData);
      }
    });
  }

  updateInput() {
    console.log(this.command);
    this.data += this.command + '\n';
    this._electronService.ipcRenderer.send('sendDataToProcess', this.command);
    this.command = '';
  }
}
