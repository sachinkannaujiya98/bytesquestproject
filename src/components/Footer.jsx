import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row py-5">
          <div className="col-md-3 text-center ">
            <a className="navbar-brand logo" href="#" />
            <img
              src="https://www.bytequests.com/static/media/logo_bytequests.458064c1.svg"
              width="200"
              height="50"
              alt=""
            />
            <p className="cntact">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos, sint.
            </p>
          </div>
          <div className="col-md-3 text-center ">
            <h3>Links</h3>
            <ul>
              <li className="list">Our Clients</li>
              <li className="list">Privacy policy</li>
              <li className="list">Our Benifits</li>
            </ul>
          </div>
          <div className="col-md-3 text-center ">
            <h3>Information</h3>
            <ul>
              <li className="list">Our Clients</li>
              <li className="list">Privacy policy</li>
              <li className="list">Our Benifits</li>
            </ul>
          </div>
          <div className="col-md-3 text-center ">
            <h2 className="cntact">Contact US</h2>
            <p className="cntact">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <h6 className="text-center border-top p-4">
          @copyright 2022 bytequest
        </h6>
      </div>
    </>
  );
};

export default Footer;
