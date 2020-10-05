import React, {useState, createContext} from 'react'

export const ChatContext = createContext();



export const ChatProvider = (props) => {
    // Use State to keep the values
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [message, setMessage] = useState('')
    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState([])

    // Make the context object:
    const chatObjectContext = {
        name, 
        setName,
        room, 
        setRoom,
        users, 
        setUsers,
        message,
        setMessage,
        messages, 
        setMessages
    } 
    

    // pass the value in provider and return
    return(
        <ChatContext.Provider value={chatObjectContext}>
            {props.children}
        </ChatContext.Provider>
    )
}