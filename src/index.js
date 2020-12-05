// 导入依赖模块对象
import * as angular from 'angular';
import * as angularRoute from 'angular-route';
import * as angularSanitize from 'angular-sanitize';
import * as oclazyload from 'oclazyload';
//
// export function a() {
//     console.log(1,angular.version)
// }
const App = angular
    .module("app",['ngRoute','ngSanitize','oc.lazyLoad'])
    // .factory("layuis",function () {
    //     const lu = {
    //         layer:{},
    //         aLayer:function () {
    //             return new Promise(function (resolve) {
    //                 layui.use(["layer"], function () {
    //                     resolve(layui.layer)
    //                 });
    //             })
    //         }};
    //     layui.use(["layer"], function () {
    //         lu.layer = layui.layer;
    //     });
    //     return lu;
    // })
    .factory('httpInterceptor',function ($q) {
        return {
            // 请求的拦截
            request: function (config) {
                config.headers = config.headers || {};
                // let token = JSON.parse(window.localStorage.getItem("token")) || "";
                // config.headers.Authorization = 'Bearer ' + token.access_token;
                return config;
            },
            // 拦截响应
            response: function(response) {
                // console.log("响应");
                // console.log(response);
                return response;
            },
            // 拦截请求错误
            responseError:function(errorReason){
                // console.log('请求错误');
                // console.log(errorReason);
                return $q.reject(errorReason);
            },
            // 拦截响应错误
            requestError:function(errorReason){
                // console.log('拦截响应错误');
                return $q.reject(errorReason);
            }
        };
    })
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('httpInterceptor');
    })
    .run(function () {
        // 默认创建基础滚动条
        console.log('run ok')
        // $(".ScrollBox").mCustomScrollbar({
        //     theme: "minimal-dark",
        //     mouseWheel:{scrollAmount:200},
        //     callbacks:{
        //         onUpdate:function(){
        //             // 数据更新后，将滚动条滚动至 top
        //             $(this).mCustomScrollbar("scrollTo","top");
        //         }
        //     }
        // });
        // // layui 组件初始化
        // try {
        //     if (layer){
        //
        //     }
        // }catch (e) {
        //     layui.use(['layer'],function (layer) {
        //         console.info('layer init');
        //     });
        // }
    });