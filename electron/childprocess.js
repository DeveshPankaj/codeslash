// const Runner = require('./childprocess');
const {EventEmitter} = require('events');
const {spawn} = require('child_process');
const path = require('path');
const fs = require('fs');
var kill  = require('tree-kill');
const runnerSettings = require('./runner_settings');

// let p = new Runner('/home/devesh/Desktop/hello.cpp');
//
// console.log(p);


function parseCommand(file_path) {
    return new Promise((resolve, reject) => {
        let obj = {};
        let parse = path.parse(file_path);
        obj.__input_file = runnerSettings.inputFile;
        obj.__output_file = runnerSettings.outputFile;
        obj.__error_log = runnerSettings.errorLog;
        obj.__compiler = runnerSettings.languages[parse.ext].compiler;
        obj.__filename = parse.name;
        obj.__ext = parse.ext;
        obj.__filename_with_ext = parse.base;
        obj.__filedir = parse.dir;
        obj.__file_path_with_ext = path.join(parse.dir, parse.base);
        resolve(obj);
    });
}


function buildCompileCommand(regx, paths) {
    return new Promise((resolve, reject) => {

        regx.replace(/\{([A-Za-z_]+)\}/g, (x) => {
            let s = x.substring(1, x.length - 1);
            if (paths[s] === undefined) {
                reject(`unrecognizable token ${s}`);
            } else {
                regx = regx.replace(`{${s}}`, paths[s]);
                // console.log(regx);
            }
        });
        regx = regx.split(' ');
        let cmd = {cmd: regx[0], argv: regx.slice(1, regx.length)};
        resolve(cmd);
    });
}


function io(obj) {
    if (obj.inputFile) {
        obj.inputFile = fs.openSync(obj.inputFile, 'r');
    } else {
        obj.inputFile = 'pipe';
    }
    if (obj.outputFile) {
        obj.outputFile = fs.openSync(obj.outputFile, 'a');
    } else {
        obj.outputFile = 'pipe';
    }
    if (obj.errorLog) {
        obj.errorLog = fs.openSync(obj.errorLog, 'a');
    } else {
        obj.errorLog = 'inherit';
    }
    obj.stdio = [obj.inputFile, obj.outputFile, obj.errorLog];
    return obj;
}


class Runner extends EventEmitter {
    constructor(file_path) {
        super();
        parseCommand(file_path).then((paths) => {
            this.paths = paths;
            this.language = runnerSettings.languages[paths.__ext];
            buildCompileCommand(this.language.compile || "", paths).then(cmd => {
                this.compile_command = cmd;
                buildCompileCommand(this.language.run, paths).then(cmd => {
                    this.run_command = cmd;
                    buildCompileCommand(runnerSettings.cwd || "/", paths).then(cwd => {
                        this.cwd = cwd.cmd;
                        this.io = io({
                            inputFile: runnerSettings.inputFile,
                            outputFile: runnerSettings.outputFile,
                            errorLog: runnerSettings.errorLog
                        });


                        this.emit('ready', {});
                    });

                });
            });
        });


    }

    compile() {
        if (this.language.type === runnerSettings.types.interpreted) {
            this.emit('warning', `{${this.paths.__ext}}<-- is a ${runnerSettings.types.interpreted} language ^_^`);
            this.emit('compilation-end', 0);
        }
        else if (this.language.type === runnerSettings.types.compile) {
            this.inst = spawn(this.compile_command.cmd, this.compile_command.argv);
            this.emit('compiling', this.inst);
            this.inst.on('close', code => {
                this.emit('compilation-end', code);
            });
            this.inst.stderr.on('data', err=>{
                this.emit('compile-error', err);
            });
        } else {
            // unsupported file type
            // defined in runner_settings.json
            this.emit('type-error', `{${this.language.type}}<-- type file are not supported yet O_O`);
        }
    }

    run() {
        this.inst = spawn(this.run_command.cmd, this.run_command.argv, {cwd:this.cwd, stdio: this.io.stdio});
        this.emit('running', this.inst);
        // console.log(this.paths.__input_file);
        // console.log(this.paths.__output_file);
        // console.log(this.paths.__error_log);
        // console.log({cwd:this.cwd, stdio:this.io.stdio});
        if(this.paths.__input_file === undefined){
            this.emit('no-input-stream', this);
        }
        if(this.paths.__output_file === undefined){
            this.inst.stdio[1].on('data', data=>{
                this.emit('process-data', data);
            });
        }
        if(this.paths.__error_log === 'inherit'){
            this.inst.stderr.on('data', data=>{
                this.emit('process-error', data);
            });
        }
        this.inst.on('close', code => {
            this.emit('process-close', code);
        });
    }

    write(data){
        if(this.paths.__input_file === undefined){
            this.inst.stdio[0].write(data);
        }else {
            this.emit('warning', 'input is piped to some file O_O');
        }
    }

    kill(){
      this.inst.stdio[0].pause();
      this.inst.kill();
    }
}

// let o = new Runner('/home/devesh/Desktop/hello.cpp');
// // let o = new Runner('/home/devesh/Desktop/Angular-Electron/electron/testing.py');
// o.on('ready', data => {
//     // console.log(o);
//     o.compile();
// });
//
// o.on('compiling', inst => {
//     console.log('compiling');
//     inst.stderr.on('data', data => {
//         console.log('error', data);
//     });
// });
// o.on('compilation-end', code => {
//     console.log('compilation-end', code);
//     if(code === 0){
//          o.run();
//     }
// });
//
// o.on('running', inst => {
//     console.log('running');
//     o.write('3\n10\n3\n5\n11\n');
// });
//
// o.on('warning', w => {
//     console.error(w);
// });
//
// o.on('type-error', e => {
//     console.error(e);
// });
//
// o.on('process-data', data=>{
//     console.log(`process-data:\n ${data}`);
// });
//
// o.on('process-close', code => {
//     console.log(`process-close,${code}`);
// });
//
// o.on('process-error', data=>{
//     console.log('process-error', data);
// });

module.exports = Runner;
