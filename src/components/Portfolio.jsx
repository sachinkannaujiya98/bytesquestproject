import React from "react";
import portfolio from "../api/portfolio";

const Portfolio = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex row-cols-md-3 g-4 p-4">
          {portfolio.map((info) => (
            <ul style={{ listStyle: "none" }}>
              <li key={info.id}>
                <div className="col ">
                  <div className="card ">
                    <img
                      src={info.imgsrc}
                      style={{ maxHeight: "30rem" }}
                      className="card-img-top img-fluid shadow p-3 mb-2 bg-body rounded"
                      alt={info.imgsrc}
                    />
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

export default Portfolio;
