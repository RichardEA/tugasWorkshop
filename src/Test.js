import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useNavigate } from "react-router";

function BasicExample() {

  const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/SignIn');
    }

    const navigateToHome = () => {
      navigate('/Home');
  }

    const navigateToCart = () => {
    navigate('/Cart');
  }

  return (

    
    <div>
      <Navbar expand="lg" variant='light' bg='primary' style={{ height: '50px' }}>
        <Container>
          <Navbar.Brand href="#home">Workshop Marketplace</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={navigateToHome}>Home</Nav.Link>
              <Nav.Link onClick={navigateToCart}>Cart</Nav.Link>
              <Nav.Link onClick={navigateToLogin}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
    
  );
}

export default BasicExample;