import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  console.log(changeColor);

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });
  return (
    <Navbar
      expand="lg"
      className={changeColor ? "color-active" : ""}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home" className="fs-3 fw-bold">
          Ngobar.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navLinks.map((item) => (
              <div key={item.id} className="nav-link">
                <NavLink
                  to={item.path}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  end
                >
                  {item.text}
                </NavLink>
              </div>
            ))}
          </Nav>
          <div>
            <button className="btn btn-outline-danger rounded-1">
              Join With Us
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
