import React, {useState, useContext} from 'react';
import Chat from './Chat';
import {ChatContext} from './ChatContext'

const ChatStore = () => {
    const [chats, setChats] = useContext(ChatContext)
    return(
        <div>
            {chats.map(chat => (
                <Chat message={chat.message} key={chat.id} />
            ))}
        </div>
    )
}

export default ChatStore;