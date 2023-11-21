import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const BarraNav = () => {
    return (
        <>


            <br />
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Servicios</Nav.Link>
                        <Nav.Link href="#features">Habilidades</Nav.Link>
                        <Nav.Link href="#pricing">portafolio</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>

    )
}
export default BarraNav;