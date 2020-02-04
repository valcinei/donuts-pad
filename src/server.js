#!/usr/bin/env node

const express = require('express');
const app = express();
const socket = require('socket.io');
const path = require('path');
const wsocket = require('./wsocket');
const router = require('./router');

app.use(express.static(path.resolve() + '/node_modules/socket.io-client/dist'));
app.use(express.static(path.resolve() + '/node_modules/bootstrap/dist'));

app.use(express.static(path.resolve(__dirname) + '/public'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(router);
let port = 3131;
if(process.argv[2]==="--port" && !!process.argv[3]){
port = process.argv[3]
}

const server = app.listen(port,(a)=>{
    console.log(`🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩 Donuts works in port ${port} :) 🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩`)
});
const io = socket(server);

io.on('connection', wsocket);