const path = require('path');

exports.getRootDirname = function() {
    return path.dirname(process.mainModule.filename);
}