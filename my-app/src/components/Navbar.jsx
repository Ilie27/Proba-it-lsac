import React from "react";

function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
  <a className="navbar-brand" href="#"><img src="memeit.png" alt = "logo"/></a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <a className="nav-link" href="#Login">Logare</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#SignUp">Creeare cont</a>
      </li>
    </ul>
  </div>
  </nav>
  );
}

export default Navbar;
