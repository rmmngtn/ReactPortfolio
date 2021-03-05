import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class NavBar extends Component {

constructor(props) { 
  super(props); 

  this.toggle = this.toggle.bind(this); 
  this.state = { 
    isOpen: false, 
  };
}

toggle() { 
  this.setState({
    isOpen: !this.state.isOpen,
  });
}
  render() { 
  return (
    <nav className="navbar navbar-expand navbar-default navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Remmington Pascone
    </Link>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/portfolio"
            className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>


  )
}
}

export default NavBar;