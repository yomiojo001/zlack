import React from 'react'
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import ReactEmoji from 'react-emoji'
import moment from 'moment'

const Message = ({message:{user,text,time}, name}) => {
    
    let isSentByCurrentUser = false

    const trimmedName = name.trim().toLowerCase()

    // condiotional to checks message sender before rendering message
    if(user === trimmedName){
        isSentByCurrentUser = true;
    }
    return(
        isSentByCurrentUser
        ? (
            <div className="p-3 my-2 rounded d-flex justify-content-end">
                <Toast>
                    <ToastHeader>
                    {trimmedName} <span className="m-1">{moment(time).format('h:mm a')}</span>
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
                        {user}<span className="m-1">{moment(time).format('h:mm a')}</span>
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