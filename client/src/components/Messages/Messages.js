import React, { useContext } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from '../Message/Message'
import {ChatContext} from '../../ChatContext'


const Messages = () => {
    const {name, messages} = useContext(ChatContext)


    return(
        <ScrollToBottom>
            {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
        </ScrollToBottom>
    )
}


export default Messages