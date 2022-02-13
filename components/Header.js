import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import Image from "next/image"

const Header = () => {
  return (
    <>
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">
                <Image
                    src="/logo.jpg"
                    width={70}
                    height={40}
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Accueil</Nav.Link>
                    <Nav.Link href="/galerie">Galerie</Nav.Link>
                    <Nav.Link href="/tarifs">Tarifs</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
  )
}

export default Header