import React, {useState, useContext} from 'react';
import {ChatContext} from './ChatContext'

const ChatStore = () => {
    const [chats, setChats] = useContext(ChatContext)
    return(
        <div>
            {chats.map(chat => (
                <div message={chat.message} key={chat.id}></div>
            ))}
        </div>
    )
}

export default ChatStore;