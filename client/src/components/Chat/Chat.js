import React, {useState, useEffect } from 'react';
import queryString from 'query-string'
import io from 'socket.io-client'
import { Row, Col, Container } from 'reactstrap';
import AppNavbar from '../AppNavbar/AppNavbar'
import AppSidebar from '../AppSidebar/AppSidebar'
import MessageInput from '../MessageInput/MessageInput'
import Messages from '../Messages/Messages'

let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [users, setUsers] = useState([])
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const ENDPOINT = 'localhost:4000'

    useEffect(() => {
        const {name, room} = queryString.parse(location.search)

        socket = io(ENDPOINT)

        setName(name);
        setRoom(room)

        socket.emit('join', {name, room},(error) => {
            if(error){
                alert(error)
            }
        })
        
        return () => {
            socket.emit('disconnect');

            socket.off()
        }
    },[ENDPOINT,location.search])

    // 
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })

        socket.on('roomData', ({users}) => {
            setUsers(users)
        })
    console.log(users);
        
    },[messages,users])

    // function for sending messages
    const sendMessage = (e) => {
        e.preventDefault()

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    
    

    return(
        <div>
            <AppNavbar room={room} name={name} />
            <div className="container-fluid">
            <Row>
                <Col md="3" className=" h-100 bg-success">
                    <AppSidebar messages={messages} name={name} />
                </Col>
                <Col md="9">
                    <Messages messages={messages} name={name} />
                    <MessageInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
                </Col>
            </Row>
            </div>
        </div>
    )
}

export default Chat;