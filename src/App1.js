import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css';


  
  

export default function NavScrollExample() {
  
  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        
        <Navbar.Brand href="#">
          <img
            src="https://assets.ajio.com/static/img/Ajio-Logo.svg"
            width="300"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="MEN"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Western Wear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Footwear
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Clothing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Winter Wear
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="WOMEN"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Ethnic Wear </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Jewellery
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accessories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Fusion Wear
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="INDIE"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Western Wear
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Regional specialities</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.4">
                Footwear
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="HOME AND KITCHEN"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Bed Line</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cushions & Pillows
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Rugs,Carpet,Mats</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Dining
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/login">sign in/join AJIO</Nav.Link>
        </Nav.Item>
       
        <Nav.Item>

          <Nav.Link eventKey="link-1">Customer care</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Button variant="outline-dark">Vist AJIOLUXE</Button>
        </Nav.Item>
        <Nav.Item>
        </Nav.Item>
      </Nav>
      </Container>
    </Navbar>
    <br/> 

   </div>
   
   

  );
}
  