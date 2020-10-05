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
    const {name, setName, room, setRoom, users, setUsers, message, setMessage, messages, setMessages} = useContext(ChatContext)
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


        socket.on("roomUsers", ({ users }) => {
            setUsers(users);

          });
          console.log(users);
          
        
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