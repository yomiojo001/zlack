import React from 'react'
import {Form} from 'reactstrap';


const MessageInput = ({message, setMessage, sendMessage}) => {


    return(
        <Form onSubmit={sendMessage}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" value={message} placeholder="Type message here..." onChange={(e) => setMessage(e.target.value)} />
                <div className="input-group-append">
                    <button className="btn btn-primary" onClick={sendMessage} type="button">Send</button>
                </div>
            </div>
        </Form> 
    )
}


export default MessageInput