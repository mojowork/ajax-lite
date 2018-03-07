const path = require('path');

module.exports = {
    entry: './src/ajax.js',
    output: {
        filename: 'ajax.min.js',
        path: path.resolve(__dirname, 'dist')
    }
};