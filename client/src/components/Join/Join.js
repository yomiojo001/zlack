import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';


const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return(
        // <div  className="joinOuterContainer">
        //     <div classNamejoinInnerConainer>
        //         <h1 className="heading">Join</h1>
        //         <div><input placeholder="" className="" type="text" onChange={} /></div>
        //         <div><input placeholder="" className="" type="text" onChange={} /></div>
        //         <Link>
        //             <button className="button" type="submit">Sign In</button>
        //         </Link>
        //     </div>
            <Form>
                <h1>Join</h1>
                <FormGroup row>
                    <Label for="name" sm={2}>Email</Label>
                    <Col sm={10}>
                    <Input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="room" sm={2}>Password</Label>
                    <Col sm={10}>
                    <Input type="text" placeholder="Room" onChange={(e) => setRoom(e.target.value)} />
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`} >
                        <Col sm={{ size: 10, offset: 2 }}>
                        <Button>Submit</Button>
                    </Col>
                    </Link>
                </FormGroup>
            </Form>
    )
}

export default Join;