import React from "react";
import { NavLink } from 'react-router-dom';



function Navigation() {

  return (

    <nav className="navbar navbar-expand-lg navbar-light ">
  <NavLink className="navbar-brand" to="/">Simpatico</NavLink>
  <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span><i className="fa fa-plus" aria-hidden="true"></i></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav ml-auto">
    <li className="nav-item">
            <NavLink className="navLink" to="/">HOME</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="navLink" to="/search">SEARCH</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="navLink" to="/favorites">FAVORITES</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="navLink" to="/contact">CONTACT</NavLink>
          </li>
    </ul>
  </div>
</nav>






  )

};


export default Navigation;
