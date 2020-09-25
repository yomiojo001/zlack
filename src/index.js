const path = require('path')
const express = require('express');
const socketio = require('socket.io')
const app = express()
const http = require('http')

const port = process.env.PORT || 4000
const route = require("../routes/index");
app.use(route)

const server = http.createServer(app);
const io = socketio(server)



io.on('connection', (socket) => {
    if('connection'){
    return console.log('New client Connected')} 

    socket.emit("userID", socket.id)
    
    socket.emit('message', 'Welcome!')

    socket.on('sending', (body) => {
        io.emit('message',body)
    })

    socket.on("disconnect", () => {
        console.log('Client disconnected');
    })
})




server.listen(port, () => {
    console.log(`server listens on port ${port}`);
})