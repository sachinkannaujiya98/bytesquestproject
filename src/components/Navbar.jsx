import React from "react";
import "./Navbar.css";
import MailIcon from "@mui/icons-material/Mail";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
const Navbar = () => {
  return (
    <>
      <div className="nav-info w-100">
        <ul>
          <li>
            <MailIcon fontSize="small" />
            bytequest@gmail.com
          </li>
          <li>
            <PhoneEnabledIcon fontSize="small" />
            7054954453
          </li>
        </ul>
      </div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-2 bg-body rounded">
          <div className="container-fluid ">
            <a className="navbar-brand logo" href="#">
              <img
                src="https://www.bytequests.com/static/media/logo_bytequests.458064c1.svg"
                width="200"
                height="50"
                alt=""
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse  mr-4" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Product
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Portfolio
                  </a>
                </li>
                <button className="btn button-color px-4">Contact us</button>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
