import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Join from '../Join/Join'
import {Link} from 'react-router-dom'
const RegisterModal = () => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>Register</Button>
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
            <Form>
                <FormGroup row>
                    <Label for="name" sm={2}>Username</Label>
                    <Col sm={10}>
                    <Input type="text" value="name" placeholder="Username" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="room" sm={2}>Email</Label>
                    <Col sm={10}>
                    <Input type="text" value="email" placeholder="Room" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="room" sm={2}>Password</Label>
                    <Col sm={10}>
                    <Input type="text" value="password" placeholder="password" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="room" sm={2}>Address</Label>
                    <Col sm={10}>
                    <Input type="text" value="address" placeholder="Address" />
                    </Col>
                </FormGroup>
                <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }} className="text-center">
                            <Button color="primary">Register</Button>
                        </Col>
                        <Col sm={{ size: 10, offset: 2 }} className="pt-2 text-center">
                        <small>Have an account?<Link to={Join}>Login</Link></small>
                        </Col>
                </FormGroup>
            </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default RegisterModal;