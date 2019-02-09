import {Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input} from '@angular/core';
import {ElectronService} from 'ngx-electron';

const path = require('path');

// import {KeyboardShortcutsService} from 'ng-keyboard-shortcuts';

// import {CodemirrorService} from '@nomadreservations/ngx-codemirror';

// import {stringify} from 'querystring';

// const defaults = {
//     markdown:
//         '# Heading\n\nSome **bold** and _italic_ text\nBy [Scott Cooper](https://github.com/scttcper)',
//     'text/typescript':
//         `const component = {
//   name: "@ctrl/ngx-codemirror",
//   author: "Scott Cooper",
//   repo: "https://github.com/typectrl/ngx-codemirror"
// };
// const hello: string = 'world';`,
//     python: '\n\nprint(something)\n\n',
//     htmlembedded: '<html></html>'
// };

const modeMap = {
  '.js': 'text/typescript',
  '.ts': 'text/typescript',
  '.html': 'htmlembedded',
  '.py': 'python',
  '.c': 'clike',
  '.cpp': 'clike',
  '.md': 'markdown'
};


class File {
  name: string;
  path: string;
  size: number;
  data: string;

  constructor(name: string, path: string, size: number) {
    this.name = name;
    this.path = path;
    this.size = size;
  }
}


@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  readOnly = false;
  fontSize = 20;
  mode = 'text/typescript';
  data = '\n\n\n\n\n\n\n\n\n\n';

  options: any = {
    lineNumbers: true,
    lineWrapping: true,
    styleActiveLine: true,
    autoFocus: true,
    mode: this.mode,
    smartIndent: true,
    firstLineNumber: 1,
    theme: 'mdn-like'
    // theme: 'darcula'
  };


  @ViewChild('ref') ref: any;
  @Input() file: File;

  @Input()
  set _file(file) {
    this.file = file;
    this.mode = modeMap[path.parse(file.name).ext];
  }

  changeMode() {
    this.options = {...this.options, mode: this.mode};
  }

  handleChange($event) {
    this.file.data = $event;
    // console.log($event);
    // console.log('ngModelChange', $event);
  }

  focusChange($event) {
    // console.log($event ? 'focus In' : 'focus Out');
  }

  scroll($event) {
    // console.log('scrol', $event);
  }

  cursorActivity($event) {
    // console.log($event);
  }


  constructor(private _electronService: ElectronService) {
  }


  ngOnInit() {
    console.log('code init', this.file);
    this.mode = modeMap[path.parse(this.file.name).ext];
    if (this.file.path) {
      const data = this._electronService.ipcRenderer.sendSync('getFile', this.file);
      if (!data.error) {
        this.file.data = data.data;
      }
    } else {
      this.file.data = '\n\n\n\n\n\n\n\n\n';
    }


    // this._electronService.ipcRenderer.on('save', (event, signal) => {
    // console.log('save', signal);
    // this._electronService.ipcRenderer.send('saveFile', this.file.data, this.file);
    // });
  }

}
