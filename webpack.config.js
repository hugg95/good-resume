// webpack config

var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: './public/javascripts/app.js',
    output: {
        path: './public/javascripts/dist',
        filename: '[name].js'
    }
};

