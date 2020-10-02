import React from 'react';
import {Link} from 'react-router-dom'
import Outline from '../Outline/Outline'

import { Jumbotron, Button } from 'reactstrap';

import './Banner.css'


const Banner = ({}) => {
    
    

    return(
        <div className="pb-5 mb-5">
            <Jumbotron className="text-center text-white" >
                <a href="/">
                    <img src="https://res.cloudinary.com/dr42i3vg0/image/upload/v1601284267/zlacklogo.fw_1_zpug4e.png" alt="logo" className="mt-n2 mb-4 logo" />
                </a>
                <h1 className="display-3 mt-1">Welcome to Zlack Chat!</h1>
                <p className="lead">Zlack chat is a social media platform developed with ReactJS, Socket.io &amp; NodeJs.</p>
                <p className="my-2">Zlack chat is a new app that limit every user within a chat room based on the invite of a user in that room.</p>
                <p className="lead mt-4">
                <Link to="/join"><Button className="mr-3" color="danger">Login</Button></Link><Link to=""><Button color="danger">Register</Button></Link>
                </p>
            </Jumbotron>
            
            <Outline />
        </div>
    )
}

export default Banner;