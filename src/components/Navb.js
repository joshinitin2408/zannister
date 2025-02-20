import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assests/img/Zannister-logo.jpeg"

const Navb = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className='fw-bold'>
                <Navbar.Brand as={Link} to="/" className='text-secondary'>
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Zannister Software Solutions
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-uppercase">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/methods">Methods</Nav.Link>
                        <Nav.Link as={Link} to="/clients">Clients</Nav.Link>
                        <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
                        <NavDropdown title="SERVICES" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/responsive-website" className='fw-bold text-secondary'>Responsive Website</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/cloud-computing" className='fw-bold text-secondary'>Cloud Computing</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ai-bot-development" className='fw-bold text-secondary'>AI Bot Development</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/custom-application-development" className='fw-bold text-secondary'>Custom Application Development</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/mobile-app-development" className='fw-bold text-secondary'>Mobile App Development</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/system-integration" className='fw-bold text-secondary'>System Integration</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/data-migration" className='fw-bold text-secondary'>Data Migration</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/data-warehouse" className='fw-bold text-secondary'>Data Warehouse</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navb
