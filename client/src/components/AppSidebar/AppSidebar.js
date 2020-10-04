import React,{useContext} from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Sidebar from '../Sidebar/Sidebar'
import {ChatContext} from '../../ChatContext'

const AppSidebar = () => {
    const {name, messages} = useContext(ChatContext)



    return(
        <ScrollToBottom>
            <h5 className="text-center mt-2">Users log</h5>
            {messages.map((message, i) => <div key={i}><Sidebar message={message} name={name} /></div>)}
        </ScrollToBottom>
    )
}


export default AppSidebar