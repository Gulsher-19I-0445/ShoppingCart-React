import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export default function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <>
        <Navbar.Brand
          style={{ marginright: "20px", marginLeft: "20px" }}
          href="#home"
        >
          <img className="logo" src="basket.svg" alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              style={{ marginright: "20px", marginLeft: "20px" }}
              href="#home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              style={{ marginright: "20px", marginLeft: "20px" }}
              href="#link"
            >
              Link
            </Nav.Link>
            <NavDropdown
              style={{ marginright: "20px", marginLeft: "20px" }}
              title="Categories"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>men's clothing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pants</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              style={{
                marginright: "20px",
                marginLeft: "20px",
                position: "absolute",
                right: "20px",
              }}
            >
              <img className="logo" src="cart.svg" alt="logo"></img>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </>
    </Navbar>
  );
}
