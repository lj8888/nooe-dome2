const http = require('http');
const url = require('url');
const path = require('path');
const routes = require('./modules/routes.js');
http.createServer((req,res) =>{
    //判断登录或注册
    if(req.url === '/favicon.ico'){
        res.end();
        return;
    }
    
    var pathName = url.parse(req.url).pathname.substr(1);
    // console.log(pathName);
    try {
        routes[pathName](req,res);
    } catch (error) {
        routes['home'](req,res);
    }
<<<<<<< HEAD
=======
    
>>>>>>> mongodb

}).listen(3000);
console.log('服务器启动成功');