const fs = require('fs');
const path = require('path');

const show_hidden = false;
const filter = {'.cpp': true, '.js': true, '.ts': true, '.py': true, '.html': true, '.css': true, '.md': true};


function getDir(dir) {
  let obj = {
    dir,
    children: []
  };

  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files=[]) => {

      if(err) throw err

      let i = files.length;
      files.forEach(file => {
        if (file[0] !== '.' || show_hidden) {
          var filePath = path.join(dir, file);
          var stat = fs.statSync(filePath);
          if (!stat.isDirectory()) {
            if (filter[path.parse(filePath).ext] === true) {
              obj.children.push({
                name: file,
                type: stat.isDirectory() ? "folder" : "file",
                size: stat.size
              });
            }

          } else {
            obj.children.push({
              name: file,
              type: stat.isDirectory() ? "folder" : "file",
              size: stat.size
            });
          }
        }
        i--;
        if (i === 0) {
          resolve(obj);
        }

      });
    })
  });

}

// getDir('/home').then(ls => {
//   console.log(ls);
// });


module.exports = {getDir};
