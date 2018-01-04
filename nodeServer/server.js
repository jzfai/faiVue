/**
 * Created by fai on 2018/1/3.
 */
const http=require('http');
const data=require('./data');
const express=require('express');

var app=express();
//此处解决作用域的问题
app.use("*", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    if (req.method === 'OPTIONS') {
        res.send(200)
    } else {
        next()
    }
});

http.createServer(app).listen(8082);

//app.use(express.static());

app.get('/slide',data.slide);
app.get('/boardList',data.boardList);
