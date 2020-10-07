import React, { useEffect, useContext } from 'react';
import queryString from 'query-string'
import io from 'socket.io-client'
import { Row, Col } from 'reactstrap';
import AppNavbar from '../AppNavbar/AppNavbar'
import AppSidebar from '../AppSidebar/AppSidebar'
import MessageInput from '../MessageInput/MessageInput'
import Messages from '../Messages/Messages'
import {ChatContext} from '../../ChatContext'

import './chat.css'

let socket;

const Chat = ({location}) => {
    // gets data from context
    const {name, setName, room, setRoom, users, setUsers, message, setMessage, messages, setMessages} = useContext(ChatContext)
    
    // declares base url
    const ENDPOINT = 'https://zlack-chat.herokuapp.com'

    
    useEffect(() => {
        // fetches data from the url using query string
        const {name, room} = queryString.parse(location.search)

        socket = io(ENDPOINT)

        setName(name);
        setRoom(room)

        // sends message to server that a user has joined
        socket.emit('join', {name, room},(error) => {
            if(error){
                alert(error)
            }
        })
        
        // disconnects socket when a user sign out
        return () => {
            socket.emit('disconnect');

            socket.off()
        }
    },[ENDPOINT,location.search])

    
    useEffect(() => {
        // gets users message and add it to the messages array
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })

        // gets all users in a room
        socket.on("roomUsers", ({ users }) => {
            setUsers(users);
          });
          
        
    },[messages])

   


    

    // function for sending messages
    const sendMessage = (e) => {
        e.preventDefault()

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    
    

    return(
        <div>
            <div className="chat-section">
            <AppNavbar />
            <Row className="m-0">
                <Col md="3" className="chat-section bg-secondary">
                    <AppSidebar />
                </Col>
                <Col md="9" sm="12" xs="12" className="chat-section">
                        <Messages />
                        <MessageInput sendMessage={sendMessage} />
                </Col>
            </Row>
            </div>
        </div>
    )
}

export default Chat;