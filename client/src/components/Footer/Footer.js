import React from 'react';
import { Row, Col, ListGroup, ListGroupItem, Button, Container } from 'reactstrap';
import './Footer.css'


const Footer = () => {
    
    

    return(
        <div>
            <div className="container">
            <Row className="px-3 py-5">
                <Col md="6" xs="12">
                    <Row>
                        <Col xs="7" sm="8">
                        <img className="footer-logo-img" src="https://res.cloudinary.com/dr42i3vg0/image/upload/v1601284267/zlacklogo.fw_1_zpug4e.png" alt="footer-logo" />
                        <p className="mt-4">Zlack chat is a controlled media platform developed with ReactJS, Socket.io &amp; NodeJs.</p>
                        <p><i className="fa fa-phone m-2" aria-hidden="true"></i>+234 808 123 4567</p>
                        <p><i className="fa fa-envelope m-2" aria-hidden="true"></i>info@zlack.chat</p>
                        </Col>
                        <Col xs="5" sm="4">
                            <ListGroup className="app-group">
                                <p className="font-weight-bold">Follow</p>
                                <hr />
                                <ListGroupItem className="app-group-list" tag="a" href="#" action><i className="fa fa-facebook m-2" aria-hidden="true"></i> Facebook</ListGroupItem>
                                <ListGroupItem className="app-group-list" tag="a" href="#" action><i className="fa fa-twitter m-2" aria-hidden="true"></i> Twitter</ListGroupItem>
                                <ListGroupItem className="app-group-list" tag="a" href="#" action><i className="fa fa-instagram m-2" aria-hidden="true"></i> Instagram</ListGroupItem>
                                <ListGroupItem className="app-group-list" tag="a" href="#" action><i className="fa fa-google-plus m-2" aria-hidden="true"></i> Google+</ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </Col> 
                <Col md="6" xs="12">
                    <Row>
                        <Col xs="6" sm="4">
                            <ListGroup className="app-group">
                                <p className="font-weight-bold">Navigate</p>
                                <hr />
                                <ListGroupItem className="app-group-list" tag="a" href="#" action>About Us</ListGroupItem>
                                <ListGroupItem className="app-group-list" tag="a" href="#" action>Contact Us</ListGroupItem>
                                <ListGroupItem className="app-group-list" tag="a" href="#" action>Terms &amp; Conditions</ListGroupItem>
                                <ListGroupItem className="app-group-list" tag="a" href="#" action>Sitemap</ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col xs="6" sm="4">
                            <ListGroup className="app-group">
                                <p className="font-weight-bold">Useful Links</p>
                                <hr />
                                <ListGroupItem className="app-group-list" tag="a" href="#" action>Leasing</ListGroupItem>
                                <ListGroupItem className="app-group-list" tag="a" href="#" action>Submit Route</ListGroupItem>
                                <ListGroupItem className="app-group-list" tag="a" href="#" action>Agents</ListGroupItem>
                                <ListGroupItem className="app-group-list" tag="a" href="#" action>Payment</ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col xs="6" sm="4">
                            <ListGroup className="app-group">
                                <p className="font-weight-bold">Download apps</p>
                                <hr />
                                <ListGroupItem className="apps-group-list" tag="a" href="#" action><Button className="btn btn-light"><i className="fa fa-android m-2" aria-hidden="true"></i> Android</Button></ListGroupItem>
                                <ListGroupItem className="apps-group-list" tag="a" href="#" action><Button className="btn btn-light"><i className="fa fa-apple m-2" aria-hidden="true"></i> Apple</Button></ListGroupItem>
                                <ListGroupItem className="apps-group-list" tag="a" href="#" action><Button className="btn btn-light"><i className="fa fa-windows m-2" aria-hidden="true"></i> Windows</Button></ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </div>
            <div className="footer pt-3 pb-3">
                <Container className="footer-container">
                    <small><span className="float-left">&copy; Zlack 2020. All rights reserved.</span><span className="float-right">Designed by YomsJs</span></small> 
                    
                </Container>
            </div>
        </div>
    )
}

export default Footer;