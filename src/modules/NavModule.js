import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavModule() {
    return (
        <Navbar variant='dark' expand='lg'>
            <Container style={{ minWidth: '90%' }}>
                <Link to='/'>
                    <Navbar.Brand>
                        Home
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className='ms-auto'>
                        <Link to='/publications'><Navbar.Brand>Publications</Navbar.Brand></Link>
                        <Link to='/contact'><Navbar.Brand>Contact</Navbar.Brand></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavModule