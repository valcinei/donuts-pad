const express = require('express');
const app = express();
const socket = require('socket.io');
const path = require('path');
const wsocket = require('./wsocket');
const router = require('./router');

app.use(express.static(path.resolve() + '/node_modules/socket.io-client/dist'));
app.use(express.static(path.resolve() + '/node_modules/bootstrap/dist'));
app.set('views', __dirname + '/views');
app.use(express.static('../public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(router);

const server = app.listen(3131);
const io = socket(server);

io.on('connection', wsocket);