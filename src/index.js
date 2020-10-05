const path = require('path')
const express = require('express');
const socketio = require('socket.io')
const app = express()
const http = require('http')

const { addUser, removeUser, getUser, getUsersInRoom} = require('./users')

const port = process.env.PORT || 4000
const router = require("./router");
app.use(router)

const server = http.createServer(app);
const io = socketio(server)



io.on('connection', (socket) => {

    socket.on('join', ({name, room}, callback) => {
        const { error, user } = addUser({id:socket.id, name, room})

        if(error) return callback(error)

        socket.emit('message', {user: 'admin', text: `${user.name}, welcome to the room ${user.room}`})
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name}, has joined`, time: new Date().getTime() })

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

        socket.join(user.room);


        callback()
    })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id)

        io.to(user.room).emit('message', {user: user.name, text: message, time: new Date().getTime() })
        
        
        callback()
    })

    socket.on("disconnect", () => {
        const user = removeUser(socket.id)
        if(user){
            io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left!!!`, time: new Date().getTime() })
            io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
        }
    })
})




server.listen(port, () => {
    console.log(`server listens on port ${port}`);
})