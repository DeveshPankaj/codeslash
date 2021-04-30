const path = require('path');


const env = {};
env.production = true;
env.winLoadURL = (!env.production)?"http://127.0.0.1:4200":`${path.join(__dirname, '..', 'dist', 'untitled', 'index.html')}`;

if(!env.production){
    console.warn(env);
}

module.exports = {
    settings:env
};








