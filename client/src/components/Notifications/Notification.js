import React, {useState, useContext} from 'react'
import { Toast, ToastHeader, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import {ChatContext} from '../../ChatContext'

const Notification = () => {
    // gets data from context
    const { message:{user}, name, messages } = useContext(ChatContext)
    
    
    let isSentByCurrentUser = false

    const trimmedName = name.trim().toLowerCase()

    if(user === trimmedName){
        isSentByCurrentUser = true;
    }

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    
    return(
        isSentByCurrentUser
        ? 
        null
        : (
            <div>
            <Button color="danger" onClick={toggle}><i className="fa fa-bell" aria-hidden="true"></i>{messages.length}</Button>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Notifications</ModalHeader>
              <ModalBody>
                <Toast>
                    <ToastHeader>
                        {user}sent a message
                    </ToastHeader>
                </Toast>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={toggle}>close</Button>
              </ModalFooter>
            </Modal>
          </div>
        )
    )
}


export default Notification