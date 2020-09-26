import React from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';



const MessageInput = ({message, setMessage, sendMessage}) => {


    return(
        <Form onSubmit={sendMessage} inline>
            <FormGroup>
                <Input type="text" value={message} placeholder="Type message here..." onChange={(e) => setMessage(e.target.value)} />
            </FormGroup>
            <Button>Send</Button>
        </Form> 
    )
}


export default MessageInput