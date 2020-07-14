const path = require('path');
const Mock = require('./mock');

module.exports = {
    lintOnSave: false, // 去掉默认selint  xuyang
    devServer : {
        // open: true,
        // host: "localhost",
        // port: 8080,
        // proxy:{ // 设置代理
        //     '/api':{
        //         target:'http://127.0.0.1:5000',
        //         changeOrigin:true,
        //         // ws: true,
        //         pathRewrite:{
        //             '^/api':'/api'
        //         }
        //     }
        // },
        before(app){ // 路由请求拦截
            Mock(app)
        }
    },
    publicPath:'./',
    outputDir:'dist',
    assetsDir:'static'
};