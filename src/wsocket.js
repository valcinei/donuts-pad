const helper = require('./helper');
const Pad = require('./Models/Pad')
module.exports = (socket) => {
    socket.on('update', (data) => {
        data.path = helper.urlToDotPath(data.path);
        const pad = new Pad();
        pad.save(data);
        socket.broadcast.emit('update', data)
    })
    console.log('a user connected');
}