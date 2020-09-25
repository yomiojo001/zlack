import React,{useContext} from 'react';
import './App.css';
import {ChatContext} from './ChatContext'


const Nav = () => {
    const [chats, setChats] = useContext(ChatContext)
    return(
        <div className="nav">
            <div className="nav-items">
                <h3>Climax Cinema</h3>
    <p>List of Movies:{chats.length}</p>
            </div>
        </div>
    )


}

export default Nav;