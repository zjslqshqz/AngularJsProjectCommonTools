const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production', // 进入指定模式 development or production
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '开发模式',
            template: "assets/tpl.angular.html"
        })
    ],
    devtool: 'inline-source-map', // 生成 source-map 文件，方便错误提示
    devServer: {
        contentBase: './dist', // 通知 webpack-dev-server 站点根目录地址
    },
    entry: {
        AngularJsProjectCommonTools: {
            import: './src/index.js',
        }
    },
    output: {
        libraryTarget: 'umd',
        library: 'AngularJsProjectCommonTools',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: {
        // angular: {
        //     commonjs: 'angular',
        //     commonjs2: 'angular',
        //     amd: 'angular',
        //     root: 'angular',
        // },
    },
    module: {
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: { // 分组
                vendor: {
                    test: /[\\/]node_modules[\\/]/, // 正则路径
                    name(module, chunks, cacheGroupKey) {
                        // 获取模块名称
                        const moduleFileName = module.identifier().split('/').reduceRight(item => item).split('.')[0];
                        return `${moduleFileName}`;
                    },
                    chunks: 'all',
                },
            },
        }
    }
};