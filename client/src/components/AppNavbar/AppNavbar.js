import React, {useState} from'react'
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
import onlineIcon from '../../icon/onlineIcon.png'


const AppNavbar = ({name,room}) => {

    const[isOpen,setIsOpen] = useState(false)


    const toggle = () => setIsOpen(!isOpen);



    return (
        <div>
                <Navbar color="dark" dark expand="sm" > 
                    <Container>
                        <NavbarBrand href="/">Logo</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                    <NavLink href="#"><img src={onlineIcon} alt="online" className="mr-1" />{name}</NavLink>
                                </NavItem>
                                <NavItem>
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