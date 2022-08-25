import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default function Header(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    {props.bolean ? <Nav.Link href="#pricing">Pricing</Nav.Link> : ""}
                </Nav>
            </Container>
        </Navbar>

    )
}
