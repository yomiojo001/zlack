const path = require('path')
const express = require('express');
const socketio = require('socket.io')
const app = express()
const http = require('http')
const cors = require('cors')

const { addUser, removeUser, getUser, getUsersInRoom} = require('./users')

const port = process.env.PORT || 4000
const router = require("./router");

// Use Routes
app.use(router)

// Use CORS
app.use(cors())

const server = http.createServer(app);
const io = socketio(server)


io.on('connection', (socket) => {

    // User sign in with username and room name
    socket.on('join', ({name, room}, callback) => {
        const { error, user } = addUser({id:socket.id, name, room})

        if(error) return callback(error)

        socket.join(user.room);

        // sends welcome message to respective user
        socket.emit('message', {user: 'admin', text: `${user.name}, welcome to the room ${user.room}`})

        // notifies all other user in a room that a new user has joined
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name}, has joined`, time: new Date().getTime() })

        // sends room data to the respective room
        io.to(user.room).emit('roomUsers', { room: user.room, users: getUsersInRoom(user.room) });

        socket.join(user.room);


        callback()
    })

    // sends a messsage to users in a room
    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id)

        io.to(user.room).emit('message', {user: user.name, text: message, time: new Date().getTime() })
        
        
        callback()
    })

    // user logout
    socket.on("disconnect", () => {
        const user = removeUser(socket.id)
        if(user){
            io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left!!!`, time: new Date().getTime() })
            io.to(user.room).emit('roomUsers', { room: user.room, users: getUsersInRoom(user.room)});
        }
    })
})


// Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
// Set static folder
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// server listens on port
server.listen(port, () => {
    console.log(`server listens on port ${port}`);
})