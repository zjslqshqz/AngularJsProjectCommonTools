const path = require('path');

module.exports = {
    mode: 'development', // 进入指定模式 development or production
    plugins: [],
    devtool: 'inline-source-map', // 生成 source-map 文件，方便错误提示
    devServer: {
        contentBase: './dist', // 通知 webpack-dev-server 站点根目录地址
    },
    entry: {
        index: './src/index.js'
    },
    output: {
        libraryTarget: 'umd',
        library: 'AngularJsProjectCommonTools',
        filename: 'AngularJsProjectCommonTools.js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: {
        angular: {
            commonjs: 'angular',
            commonjs2: 'angular',
            amd: 'angular',
            root: 'angular',
        },
    },
    module: {
    }
};