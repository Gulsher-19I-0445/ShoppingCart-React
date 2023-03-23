import { useEffect, useState } from "react";
import MyCards from "./card";
//import MyNavbar from "./navbar";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export default function Items() {
  const [products, setproducts] = useState([]);
  const [cat, setCat] = useState("all");
  const fetchAPI = () => {
    return fetch("https://fakestoreapi.com/products") //Fetch from store API
      .then((res) => res.json())
      .then((data) => setproducts(data));
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  console.log(products);
  return (
    <div>
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
                <NavDropdown.Item onClick={() => setCat("all")}>
                  ShowAll
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setCat("men's clothing")}>
                  men's clothing
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setCat("electronics")}>
                  electronics
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setCat("jewelery")}>
                  Jewelery
                </NavDropdown.Item>

                <NavDropdown.Item onClick={() => setCat("women's clothing")}>
                  Women's clothing
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
      <br></br>
      {products.length > 0 && (
        <div className="row">
          {products.map(
            (
              user //Send data as props to Card Components
            ) => (
              <div className="col-lg-3 mb-1 d-flex align-items-stretch">
                {cat === user.category || cat === "all" ? (
                  <MyCards
                    key={user.id}
                    title={user.title}
                    image={user.image}
                    description={user.description}
                  ></MyCards>
                ) : (
                  <></>
                )}
                {/* if({cat}===user.category ||{cat==="all"}){
            <MyCards
              key={user.id}
              title={user.title}
              image={user.image}
              description={user.description}
            ></MyCards>
            } */}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
