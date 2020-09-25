import React, {useState, useContext} from 'react';
import {ChatContext} from './ChatContext'
import socketIOClient from "socket.io-client";


const ENDPOINT = "http://127.0.0.1:4000";

 const AddChat = () => {
    const [message, setMessage] = useState('')
    const [chats, setChats] = useContext(ChatContext)

    const updateMessage = (e) => {
        setMessage(e.target.value)
    }



    const sendChat =(e) => {
        e.preventDefault()
        setMessage('')
        setChats(prevMovies => [...prevMovies, {message:message}])
        
    }
    

    return(
            <form onSubmit={sendChat}>
                <input type="text" name="message" value={message} onChange={updateMessage} />
                    <button>Submit</button>
            </form>
        
    )
}

export default AddChat