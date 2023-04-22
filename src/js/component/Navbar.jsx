import React from "react";

const Navbar = () => {
	return (
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary"  data-bs-theme="dark">
        <div className="container-fluid d-flex flex-grow-1">
          <a className="navbar-brand text-light" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-grow-1 text-right" id="navbarNavDropdown">
            <ul className="navbar-nav  ml-auto flex-nowrap">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Pricing</a>
              </li>
          
            </ul>
          </div>
        </div>
      </nav>



    )}

export default Navbar;