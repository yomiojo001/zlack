const users = [];

// funtion to add a user with username and room name
const addUser = ({id, name, room}) => {

    name = name.trim().toLowerCase()
    room = room.trim().toLowerCase()

    const existingUser = users.find((user) => {user.room === room && user.name === name})

    if(existingUser){
        return {error: 'Username is taken'}
    }

    const user = {id, name, room}

    users.push(user)

    return {user}
}

// funtion to remove a user
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

// function to get a single user
const getUser = (id) => users.find((user) => user.id === id)

// function to get all users in a room
const getUsersInRoom = (room) => users.filter((user) => user.room === room)


module.exports = { addUser, removeUser, getUser, getUsersInRoom}