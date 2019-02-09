const electronLocalshortcut = require('electron-localshortcut');

function init(window) {
    electronLocalshortcut.register(window, 'Ctrl+P', () => {
        window.webContents.send('ping', {type:'ping'});
        // console.log('You pressed ctrl + p');
    });
    electronLocalshortcut.register(window, 'Ctrl+S', () => {
        window.webContents.send('save', {type:'save'});
        console.log('You pressed ctrl + s');
    });

    electronLocalshortcut.register(window, 'Ctrl+F11', () => {
        console.log('You pressed ctrl + F11');
        // win.webContents.send('ping', {type:'save file'});
    });

    electronLocalshortcut.register(window, 'Ctrl+-', () => {
        console.log('You pressed ctrl + -');
        window.webContents.send('zoomOut', {});
    });
    electronLocalshortcut.register(window, 'Ctrl+=', () => {
        console.log('You pressed ctrl + +');
        window.webContents.send('zoomIn', {});
    });
}

module.exports = {
    initListeners: init
};



