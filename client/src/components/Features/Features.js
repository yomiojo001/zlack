import React from 'react';
import { Card, CardImg, CardText, CardDeck, CardBody } from 'reactstrap';
import './Features.css'



const Features = () => {
    
    

    return(
        <div className="features container-fluid py-5">
            <div className="w-75 m-auto">

            <h2 className="feature-header text-center">How it works</h2>
            <hr className="m-auto" />
            <CardDeck className="m-5">
                <Card className="text-center">
                    <CardImg top width="100%" src="https://res.cloudinary.com/dr42i3vg0/image/upload/v1601557824/newslltt_t3prvw.jpg" alt="Card image cap" />
                    <CardBody>
                    <CardText>Enter a username and room name to sign in.</CardText>
                    </CardBody>
                </Card>
                <Card className="text-center">
                    <CardImg top width="100%" src="https://res.cloudinary.com/dr42i3vg0/image/upload/v1601595814/room_re4wnk.jpg" alt="Card image cap" />
                    <CardBody>
                    <CardText> Input an exisiting room name to join an exisiting room.</CardText>
                    </CardBody>
                </Card>
                <Card className="text-center">
                    <CardImg top width="100%" src="https://res.cloudinary.com/dr42i3vg0/image/upload/v1601595809/group_texting_ipx8ie.jpg" alt="Card image cap" />
                    <CardBody>
                    <CardText>Connect with family and friends by proving room details</CardText>
                    </CardBody>
                </Card>
            </CardDeck>
            </div>
        </div>
    )
}

export default Features;