import React, {useContext} from 'react'
import {Form} from 'reactstrap';
import {ChatContext} from '../../ChatContext'

import './MessageInput.css'


const MessageInput = ({ sendMessage}) => {
    const { message, setMessage } = useContext(ChatContext)



    return(
        
        <div className="d-flex align-items-end flex-column fixed-bottom">
        <Form onSubmit={sendMessage} className="mr-4">
            <div className="input-group mb-3">
                <input type="text" className="form-control" value={message} placeholder="Type message here..." onChange={(e) => setMessage(e.target.value)} />
                <div className="input-group-append">
                    <button className="btn btn-primary" onClick={sendMessage} type="button">Send</button>
                </div>
            </div>
        </Form> 
        </div>
    )
}


export default MessageInput