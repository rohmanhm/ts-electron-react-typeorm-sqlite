const { mkdir, test, touch } = require('shelljs');

exports.makeDirs = (fullPath, fileName) => {
  if (!test('-d', fullPath)) {
    mkdir('-p', fullPath);
  }
  if (fileName && !test('-f', `${fullPath}${fileName}`)) {
    touch(`${fullPath}${fileName}`);
  }
};
