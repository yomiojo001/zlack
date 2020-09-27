import React from 'react'
import { Toast, ToastHeader } from 'reactstrap';

const Sidebar = ({message:{user,text}, name}) => {
    let isSentByCurrentUser = false

    const trimmedName = name.trim().toLowerCase()

    if(user === trimmedName){
        isSentByCurrentUser = true;
    }
    return(
        isSentByCurrentUser
        ? 
        null
        : (
            <div className="p-3 my-2 rounded">
                <Toast>
                    <ToastHeader>
                        {user}
                    </ToastHeader>
                </Toast>
            </div>
        )
    )
}


export default Sidebar