import React from 'react'
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import ReactEmoji from 'react-emoji'

const Message = ({message:{user,text}, name}) => {
    let isSentByCurrentUser = false

    const trimmedName = name.trim().toLowerCase()

    if(user === trimmedName){
        isSentByCurrentUser = true;
    }
    return(
        isSentByCurrentUser
        ? (
            <div className="p-3 my-2 rounded d-flex justify-content-end">
                <Toast>
                    <ToastHeader>
                        {trimmedName}
                    </ToastHeader>
                    <ToastBody className="bg-primary">
                        {ReactEmoji.emojify(text)}
                    </ToastBody>
                </Toast>
            </div>
        )
        : (
            <div className="p-3 my-2 rounded ">
                <Toast>
                    <ToastHeader>
                        {user}
                    </ToastHeader>
                    <ToastBody className="bg-warning">
                        {ReactEmoji.emojify(text)}
                    </ToastBody>
                </Toast>
            </div>
        )
    )
}


export default Message