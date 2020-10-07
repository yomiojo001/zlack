import React,{useContext} from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Sidebar from '../Sidebar/Sidebar'
import {ChatContext} from '../../ChatContext'



const AppSidebar = () => {
    // const {name, messages} = useContext(ChatContext)
    const {users} = useContext(ChatContext)



    return(
        <ScrollToBottom>
            <h5 className="text-center mt-2">Users in Room</h5>
            {users.map(({name}) => <div key={name}><Sidebar name={name} /></div>)}
        </ScrollToBottom>
    )
}


export default AppSidebar