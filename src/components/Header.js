import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="bg-brand-header fixed-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Navbar expand="lg">
                <Container fluid>
                  <Navbar.Brand as={Link} to="/">
                    React-Bootstrap
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link as={Link} to="item1">
                        Item 1
                      </Nav.Link>
                      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                          Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <Nav>
                      <Nav.Link href="#deets">More deets</Nav.Link>
                      <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
