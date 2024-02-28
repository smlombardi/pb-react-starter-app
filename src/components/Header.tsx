import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const scrollThreshold = 50; // Adjust this value to define the scroll position for animation

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", onScroll);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollThreshold]);
  return (
    <>
      <header
        className={`bg-brand-header fixed-top ${scrolled ? "scrolled" : ""}`}
      >
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
                      <NavDropdown
                        className="icon-dropdown"
                        title={
                          <i className="pbi-icon-outline pbi-settings"></i>
                        }
                        id="basic-nav-dropdown"
                      >
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
                      <Nav.Link eventKey={2} href="#memes">
                        Melanie Daniels
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
