import React from "react";

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            Logo
          </a>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/programme">
                  Programme
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/community">
                  Community
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
        
          </div>
        </div>
      </nav>
    
     );
};
 
export default Navbar;