import React, { useContext } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from '../Message/Message'
import {ChatContext} from '../../ChatContext'


const Messages = () => {
    // gets data from context
    const {name, messages} = useContext(ChatContext)


    return(
        <ScrollToBottom className="mb-5">
            {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
        </ScrollToBottom>
    )
}


export default Messages