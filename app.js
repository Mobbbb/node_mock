
"use strict"

var express             = require('express');
var app                 = express();
var bodyParse           = require('body-parser');
var cookieParser        = require('cookie-parser');

// 项目接口配置地址
var MYPROJECT_API       = require('./controller/myProject');

// 项目接口重写返回逻辑
var MP_CONTROLLER       = require('./controller/myProject/rewrite');

var API_ARR             = [...MYPROJECT_API.api];

app.use(cookieParser());
app.use(bodyParse.urlencoded({extended:false}));
app.use(express.static('public'));

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, authKey, sessionid');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

// 默认返回接口路径的json文件
API_ARR.forEach(item => {
    if (!item.rewrite) {
        app.get(item.url, function (req, res) {
            var result = {};
            result = require('./mapper' + item.url + '.json');
            res.end(JSON.stringify(result));
        });
    }
});

// 自定义接口返回逻辑
MP_CONTROLLER(app, MYPROJECT_API);

var server = app.listen(3000, function () {
    console.log('   ');console.log('   ');
    console.log('   App listening at:');
	console.log('   - Network: http://127.0.0.1:3000');
    console.log('   ');console.log('   ');
}) ;
