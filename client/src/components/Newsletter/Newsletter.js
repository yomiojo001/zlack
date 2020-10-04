import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input, Row, Col } from 'reactstrap';
import './Newsletter.css'


const Newsletter = () => {
    
    

    return(
        <div className="container-fluid bg-newsletter p-4 text-center text-white">
            <h1 className="pt-5">Newsletter <span className="font-weight-lighter">Signup</span></h1>
            <p>Subscribe to our news letter to receive our latest updates</p>
            <Row className="pb-5 pt-2">
              <Col sm="12" md={{ size: 6, offset: 3 }}>
              <InputGroup className="newsletter-button pb-4">
                <Input placeholder="Enter type email here..." />
                <InputGroupAddon addonType="append">
                  <Button color="primary">Subscribe</Button>
                </InputGroupAddon>
              </InputGroup>
              </Col>
            </Row>
        </div>
    )
}

export default Newsletter;