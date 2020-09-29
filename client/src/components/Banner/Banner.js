import React from 'react';
import {Link} from 'react-router-dom'

import { Jumbotron, Button } from 'reactstrap';

import '../Banner/Banner.css'


const Banner = ({}) => {
    
    

    return(
        <div>
            <Jumbotron className="text-center text-white" >
                <a href="/">
                    <img src="https://res.cloudinary.com/dr42i3vg0/image/upload/v1601322404/zlacklogo.fw_omtsps.png" alt="logo" className="mt-n2 mb-4" />
                </a>
                <h1 className="display-3 mt-4">Welcome to Zlack Chat!</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <p className="my-2">It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead mt-5">
                <Link to="/join"><Button className="mr-3" color="danger">Login</Button></Link><Link to=""><Button color="danger">Register</Button></Link>
                </p>
            </Jumbotron>
        </div>
    )
}

export default Banner;