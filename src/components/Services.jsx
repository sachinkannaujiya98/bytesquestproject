import React from "react";
import serviceapi from "../api/serviceapi";

const Services = () => {
  return (
    <>
      <div className="text-center ">
        <h2>Service</h2>
      </div>
      <div className="container-fluid">
        <div className="row d-flex row-cols-md-4 g-4 p-4">
          {serviceapi.map((services) => (
            <ul style={{ listStyle: "none" }}>
              <li key={services.id}>
                <div className="col ">
                  <div className="card ">
                    <img
                      src={services.imgsrc}
                      style={{ maxHeight: "10rem" }}
                      className="card-img-top img-fluid shadow p-3 mb-2 bg-body rounded"
                      alt={services.imgsrc}
                    />
                    <div className="card-body ">
                      <div className="text-center ">
                        <h3>{services.service}</h3>
                      </div>
                      <p className="card-text ">{services.decsription}</p>
                      <button className="btn w-100">Read more</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
