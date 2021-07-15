import React from "react";
import { withRouter } from "react-router-dom";
import { NavItem } from "reactstrap";
import Navbar from 'react-bootstrap/Navbar'
import '../core/styles/Card.css';
import { isAuthenticated } from "../core/apiCore";

const Navigation2 = ({ history }) => {  
    return (
      <div>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
          <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />
          <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
          <Navbar inverse collapseOnSelect expand="lg" bg="light" variant="light" id="navbar">
            <div className="container-fluid">
            {isAuthenticated() && (
                <>
                
                <div className="container barra_name">
                <NavItem className="nav-link" />
                  <Navbar.Text>
                    Hola, <a href="#login">Alexander García. </a> <i class="fas fa-shopping-cart"></i>
                  </Navbar.Text>
                  </div>
                </>
              )}
            </div>
          </Navbar>
      </div>
    )}


    export default withRouter(Navigation2);