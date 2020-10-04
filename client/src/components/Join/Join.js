import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { Container, Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import RegisterModal from '../RegisterModal/RegisterModal'

const Join = () => {

    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

    return(

        <Container>
            <Button color="danger" onClick={toggle}>LogIn</Button>
            <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                toggle={toggle}>
                <ModalHeader toggle={toggle}>Login</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label for="name" sm={2}>Username</Label>
                            <Col sm={10}>
                            <Input type="text" value={name} placeholder="Username" onChange={(e) => setName(e.target.value)} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="room" sm={2}>Room</Label>
                            <Col sm={10}>
                            <Input type="text" value={room} placeholder="Room" onChange={(e) => setRoom(e.target.value)} />
                            </Col>
                        </FormGroup>
                        <FormGroup check row className="pr-5">
                            <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`} >
                                <Col sm={{ size: 10, offset: 2 }} className="text-center">
                                <Button color="primary">Sign In</Button>
                            </Col>
                            </Link>
                            <Col sm={{ size: 10, offset: 2 }} className="pt-3 text-center">
                            <small>Don't have an account?<RegisterModal /></small>
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>

            </Modal>
        </Container>
    )
}

export default Join;