import React, {useState, createContext} from 'react'

export const ChatContext = createContext();



export const ChatProvider = (props) => {
    const [chats, setChats] = useState([])
    
    return(
        <ChatContext.Provider value={[chats, setChats]}>
            {props.children}
        </ChatContext.Provider>

    )
}