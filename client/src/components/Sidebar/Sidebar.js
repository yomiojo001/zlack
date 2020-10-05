import React from 'react'
import { Toast, ToastHeader } from 'reactstrap';

const Sidebar = ({name}) => {
    
    return(
            <div className="p-3 my-2 rounded">
                <Toast>
                    <ToastHeader>
                        {name}
                    </ToastHeader>
                </Toast>
            </div>
        
    )
}


export default Sidebar