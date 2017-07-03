/**
 * Created by liufeng on 2017/7/3.
 */
var webpack = require('webpack');
var path = require('path');                 //����node��path��
var HtmlwebpackPlugin = require('html-webpack-plugin');//�����Զ�����Html
var env = process.env.WEBPACK_ENV;
var outputFile;
var plugins = [
    new HtmlwebpackPlugin({
        title: 'React Biolerplate by Linghucong',
        template: path.resolve(__dirname, 'templates/index.ejs'),
        inject: 'body'
    })];
if(env==='build'){
    var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
    plugins.push(new UglifyJsPlugin({minimize:true}));
    outputFile='bundle.min.js';
}else{
    outputFile='bundle.js';
}
var config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:3000',
        './app/index.js' //����ļ�
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),  // ָ�������Ĵ���λ��Ϊ dist/bundle.js
        filename: outputFile
    },
    devtool: 'source-map',
    module: {
        loaders: [
            //CssԤ����
            {
                test:/\.less$/,
                loaders:['style','css','less'],
                include: path.resolve(__dirname, 'app')
            },
            //babel�﷨����
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    plugins: plugins
}
module.exports = config;