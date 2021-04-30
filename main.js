const {app, BrowserWindow, ipcMain: ipc, dialog, Menu, shell} = require('electron');
const fs = require('fs');
const path = require('path');
const runner = require('./electron/childprocess');
const keyboard = require('./electron/keyboardshortcut');

const {getDir} = require('./electron/treeDriver');
const {settings} = require('./electron/settings');
const dynamicSettings = `${__dirname}/electron/saved-settings.json`;

const url = require('url');


let win;

ipc.on('getSettings', (event, data) => {
  fs.readFile(dynamicSettings, (err, data) => {
    if (err) throw err;
    let set = JSON.parse(data);
    event.returnValue = set;
    console.log(set);
  });
});

ipc.on('save-open-tabs', (event, tabs) => {
  let t = [];
  for(let i=0; i<tabs.length; i++){
    if(tabs[i].path){
      t.push({name: tabs[i].name, path: tabs[i].path});
    }
  }

  fs.readFile(dynamicSettings, (err, data) => {
    if (err) throw err;
    let set = JSON.parse(data);
    set.openTabs = t;

    fs.writeFile(dynamicSettings, JSON.stringify(set, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });

  });
  // console.log('updating open tabs', tabs);
});


ipc.on('ping', (event, data) => {
  console.log(data);
});

ipc.on('getDir', (event, dir) => {
  console.log(dir);
  getDir(dir).then(ls => {
    event.returnValue = ls.children;
  })
  // event.returnValue = data;
});


ipc.on('openFolder', (event, data) => {
  console.log('openFolder');
  let dir = dialog.showOpenDialog(win, {
    properties: ['openDirectory']
  });
  if(dir){
    event.returnValue = dir[0];
    fs.readFile(dynamicSettings, (err, data) => {
      if (err) throw err;
      let set = JSON.parse(data);
      set.openFolder = dir[0];
      fs.writeFile(dynamicSettings, JSON.stringify(set, null, 2), (err) => {
        if (err) throw err;
        console.log('Data written to file');
      });
    });
  }else{
    event.returnValue = undefined;
  }

  console.log(dir);
});


ipc.on('saveNewFile', (event, data)=>{
  console.log(data);
  dialog.showSaveDialog((fileName) => {
      if (fileName === undefined){
          console.log("You didn't save the file");
          return;
      }

      // fileName is a string that contains the path and filename created in the save file dialog.
      fs.writeFile(fileName, data.data, (err) => {
          if(err){
              console.log("An error ocurred creating the file "+ err.message)
          }
          console.log("The file has been succesfully saved");
      });
      let fp = path.parse(fileName);
      event.returnValue = {name: fp.base, path: fp.dir};
  });

});

ipc.on('openFile', (event, data) => {
  console.log('openFile');
  let f = dialog.showOpenDialog(win, {
    properties: ['openFile']
  });
  if (f) {
    let file = path.parse(f[0]);
    console.log(file);
    event.returnValue = {item: file.base, dir: file.dir};
  } else {
    event.returnValue = undefined;
  }

  console.log(f);

});


ipc.on('getFile', (event, file) => {
  if (file === null) {
    event.returnValue = {error: 'null path'};
  } else {


    fs.readFile(path.join(file.path, file.name), 'UTF-8', (error, data) => {
      if (error) {
        event.returnValue = {error: error}
      } else {
        event.returnValue = {data};
      }
    });
  }

});


let id = 0;
const runningProcesses = {};

ipc.on('runProgram', (event, file) => {
  let fp = path.join(file.path, file.name);
  // id++; // not implementing for multiple process

  console.log('running', fp, `id: ${id}`);
  let p = new runner(fp);
  runningProcesses[id] = p;
  p.isConsoleOpen = false;
  p.running = false;
  p.on('ready', data => {
    // console.log(o);
    p.compile();
  });
  p.on('warning', war => {
    console.log(war);
  });

  p.on('compiling', inst => {
    console.log('compiling');
    inst.stderr.on('data', data => {
      console.log('compile error');
      win.webContents.send('consoleError', data, true);
      win.webContents.send('programClosed', file);
    });
  });

  p.on('compilation-end', code => {
    console.log('compilation-end', code);
    if (code === 0) {
      p.run();
    }
  });

  p.on('running', inst => {
    console.log('running');
    p.running = true;
    win.webContents.send('consoleData', '', true);
    win.webContents.send('getDataFeed', {});
  });
  p.on('process-data', data => {
    if (p.isConsoleOpen === false) {
      p.isConsoleOpen = true;
      win.webContents.send('openConsole', true);
      win.webContents.send('consoleData', data);
    }
    else {
      win.webContents.send('consoleData', data);
    }

    // console.log(`process-data:\n${data}`);
  });
  p.on('process-close', code => {
    p.running = false;
    console.log(`process-close,${code}`);
    win.webContents.send('programClosed', file);
    delete runningProcesses[id];
  });

  p.on('process-error', data => {
    p.running = false;
    console.log('process-error', data);
    delete runningProcesses[id];
  });

});
ipc.on('stopProgram', (event, file) => {
  console.log('closing', path.join(file.path, file.name));
  runningProcesses[id].kill();
  delete runningProcesses[id];
});


ipc.on('run', (event, file) => {
  win.webContents.send('console-data', 'data');
});

ipc.on('saveFile', (event, file) => {
  console.log(file);
  fs.writeFile(path.join(file.path, file.name), file.data || '', (err) => {
    if (err) throw err;
    console.log(__filename, 'file saved', err);
  });
});

ipc.on('sendDataToProcess', (event, data) => {
  console.log('sendDataToProcess', data);
  if (runningProcesses[id] !== undefined) {
    if (runningProcesses[id].running === true) {
      runningProcesses[id].write(data + '\n');
    } else {
      win.webContents.send('consoleError', '`can not write after process is closed`');
    }
  } else {
    win.webContents.send('consoleError', 'first run a program', true);
  }
  // runningProcesses[id].write(data);
});


function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1100,
    height: 800,
    frame: false,
    nodeIntegration: true
  });

  if(settings.production){
    win.loadURL(
        url.format({
        pathname: settings.winLoadURL,
        protocol: 'file:',
        slashes: true
      })
    );
  }else{
    win.loadURL(settings.winLoadURL);
  }

  


  if(!settings.production){
  	win.webContents.openDevTools();
  }
  

  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  });
  keyboard.initListeners(win);
}

// Create window on electron intialization
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
});

