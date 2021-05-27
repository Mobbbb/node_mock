"use strict"

var express             = require('express');
var app                 = express();
var bodyParse           = require('body-parser');
var cookieParser        = require('cookie-parser');
var request             = require('./request');

app.use(cookieParser());
app.use(bodyParse.urlencoded({ extended: false }));
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

request(app);

app.listen(3000, function () {
    console.log('   ');console.log('   ');
    console.log('   App listening at:');
	console.log('   - Network: http://127.0.0.1:3000');
    console.log('   ');console.log('   ');
});
