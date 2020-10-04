import React, {useState, useContext} from'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import {ChatContext} from '../../ChatContext'
import Notification from '../Notifications/Notification'

import onlineIcon from '../../icon/onlineIcon.png'



const AppNavbar = () => {
    const {name} = useContext(ChatContext)



    const[isOpen,setIsOpen] = useState(false)


    const toggle = () => setIsOpen(!isOpen);



    return (
            <div>
                <Navbar color="dark" dark expand="sm" > 
                    <Container>
                        <NavbarBrand href="/"><img className="w-50" src="https://res.cloudinary.com/dr42i3vg0/image/upload/v1601322404/zlacklogo.fw_omtsps.png" alt="logo" /></NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="#"><Notification /></NavLink>
                                </NavItem>
                                <NavItem className="mt-1">
                                    <NavLink href="#"><img src={onlineIcon} alt="online" className="mr-1" /><i className="fa fa-user px-1" aria-hidden="true"></i>{name}</NavLink>
                                </NavItem>
                                <NavItem className="mt-1">
                                    <NavLink href="/">sign out</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
    )
}


export default AppNavbar;