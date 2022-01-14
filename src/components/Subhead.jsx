import React from "react";
import "./subhead.css";

const Subhead = () => {
  return (
    <>
      <div className="w-100 sub_bg">
        <div className="row ">
          <div className="col-md-6 text-white text-start px-3 py-3">
            <h2>Let's Discuss</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="col-md-6  mb-2 search">
            <input type="text"></input>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subhead;
