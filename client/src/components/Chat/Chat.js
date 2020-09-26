import React, {useState, useEffect } from 'react';
import queryString from 'query-string'
import io from 'socket.io-client'
import { Row, Col, Container } from 'reactstrap';
import AppNavbar from '../AppNavbar/AppNavbar'
import AppSidebar from '../AppSidebar/AppSidebar'
import MessageInput from '../MessageInput/MessageInput'

let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const ENDPOINT = 'localhost:4000'

    useEffect(() => {
        const {name, room} = queryString.parse(location.search)

        socket = io(ENDPOINT)

        setName(name);
        setRoom(room)

        socket.emit('join', {name, room},() => {

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
    },[messages])

    // function for sending messages
    const sendMessage = (e) => {
        e.preventDefault()

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(message,messages);
    

    return(
        <div>
            <AppNavbar room={room} name={name} />
            <div class="container-fluid">
            <Row>
                <Col md="3" className=" h-100 bg-success">
                    <AppSidebar name={name} />
                </Col>
                <Col md="9">
                    <MessageInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
                </Col>
            </Row>
            </div>
        </div>
    )
}

export default Chat;