import React from 'react';
import {
    Container, Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';
import './Outline.css'



const Outline = ({}) => {
    
    

    return(
        <div className="outline">
            <div className="outline-cards m-auto">
            <CardDeck>
                <Card>
                    <i class="fa fa-comments outline-icons pb-2" aria-hidden="true"></i>
                </Card>
                <Card>
                    <i class="fa fa-users outline-users pt-4" aria-hidden="true"></i>
                </Card>
                <Card>
                    <i className="fa fa-lock outline-icons p-2" aria-hidden="true"></i>
                </Card>
            </CardDeck>
            </div>
            <div className="w-75 m-auto">
            <p className="outline-text display-4 p-5 mb-n5 font-weight-bold text-center">Use it on your phone, tablet &amp; desktop<br /><span className="display-4">and it's free</span></p>
            </div>
        </div>
    )
}

export default Outline;