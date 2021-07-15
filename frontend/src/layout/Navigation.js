import React from "react";
import { Link, withRouter } from "react-router-dom";
import { NavItem } from "reactstrap";
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import { MDBCol } from "mdbreact";
import logo from '../images/slides/Logo.png';
import '../core/styles/Card.css';
import { DropdownSubmenu } from "react-bootstrap-submenu";
import { isAuthenticated, signout } from "../core/apiCore";

const Navigation = ({ history }) => {
  return (
    <div>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
      <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />
      <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />

      <Navbar inverse collapseOnSelect expand="lg" bg="light" variant="light" id="navbar">
        <div className="container barra_options">
          <Navbar.Brand href="/"><img className="d-block w-100" src={logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto mb-2">
              <Nav.Link href="/">Inicio</Nav.Link>
              <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item href="/foods">Alimentos & Bebidas</NavDropdown.Item>
                <NavDropdown.Divider />
                <DropdownSubmenu href="/fashions" title="Moda">
                  <NavDropdown.Item href="/fashionWomans">Ropa de Dama</NavDropdown.Item>
                  <NavDropdown.Item href="/fashionMens">Ropa de Caballero</NavDropdown.Item>
                </DropdownSubmenu>
                <NavDropdown.Item href="/fitness">Deportes y Fitness</NavDropdown.Item>
                <NavDropdown.Divider />
                <DropdownSubmenu href="/techs" title="Tecnología">
                  <NavDropdown.Item href="/laptops">Laptops y Computadoras</NavDropdown.Item>
                  <NavDropdown.Item href="/smartphones">Smartphones (Android-iOS)</NavDropdown.Item>
                  <NavDropdown.Item href="/electronics">Electrónica, Audio y Video</NavDropdown.Item>
                </DropdownSubmenu>
                <NavDropdown.Item href="/books">Libros, Revistas y Comics</NavDropdown.Item>
                <NavDropdown.Item href="/others">Otras Categorías</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>

        <MDBCol className="col-lg-6 col-sm-12 mb-2">
            <div className="input-group">
                <input className="form-control" type="search" placeholder="Buscar productos, alimentos y más..."></input>
                <div className="input-group-append">
                    <button className="btn btn-warning" type="button">
                        <i className="fa fa-search search-icon"></i>
                    </button>
                </div>
            </div>
        </MDBCol>

            <ul className="navbar-nav ml-auto mb-2">
              {!isAuthenticated() && (
                <>
                  <NavItem className="nav-link">
                    <Link className="nav-link" to="/signup">
                      Registrate
                  </Link>
                  </NavItem>
                  <NavItem className="nav-link">
                    <Link className="nav-link" to="/signin">
                      Iniciar sesión
                  </Link>
                  </NavItem>
                </>
              )}

              {isAuthenticated() && (
                <>
                
                <div className="container">
                <Nav className="mr-auto mb-2">
                <NavDropdown title="Vender" id="basic-nav-dropdown">
                <NavDropdown.Item href="/addcategory">Agregar Categoría</NavDropdown.Item>
                <NavDropdown.Divider />
                    <DropdownSubmenu title="Agregar Producto">
                    <NavDropdown.Item href="/addfood">Alimentos y Bebidas</NavDropdown.Item>
                    <NavDropdown.Divider />
                        <NavDropdown.Item href="/addfashionMen">Ropa de Caballero</NavDropdown.Item>
                        <NavDropdown.Item href="/addfashionWoman">Ropa de Dama</NavDropdown.Item>
                        <NavDropdown.Divider />
                      <NavDropdown.Item href="/addfit">Deportes y Fitness</NavDropdown.Item>
                       <NavDropdown.Divider />
                          <NavDropdown.Item href="/addlaptop">Laptops y Computadoras</NavDropdown.Item>
                          <NavDropdown.Item href="/addsmartphone">Smartphones (Android-iOS)</NavDropdown.Item>
                          <NavDropdown.Item href="/addelectronic">Electrónica, Audio y Video</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/addbook">Libros, Revistas y Comics</NavDropdown.Item>
                          <NavDropdown.Item href="/addother">Otras Categorías</NavDropdown.Item>
                          <NavDropdown.Divider />
                    </DropdownSubmenu>
                  <NavDropdown.Item href="/products">Gestiona tu Inventario</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
                </Nav>
                  <NavItem className="nav-link mb-2">
                    <Link
                      to="/"
                      onClick={() =>
                        signout(() => {
                          history.push("/");
                        })} className="nav-link">
                      Cerrar Sesión
                  </Link>
                  </NavItem>
                  </div>
                </>
              )}
            </ul>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  )
}

export default withRouter(Navigation);