import React from "react";

function Navbar() {
  return (
  <div>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
  <a class="navbar-brand" href="#"><img src="memeit.png" alt = "logo"/></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item">
        <a class="nav-link" href="#Login">Logare</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#SignUp">Creeare cont</a>
      </li>
    </ul>
  </div>
  </nav></div>);
}

export default Navbar;
