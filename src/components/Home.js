import React from "react";
import "./Home.css";
import Filter from "./Filter";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="container">
        <div className="main">
          <div className="left-navbar">
            <b>Filter</b>
            <Filter/>
          </div>
          <div className="right-home">
            <div className="card" style={{ width: "15rem" }}>
              <img
                className="card-img-top"
                src="./images/Rectangle 22.png"
                alt=""
              />
              <div className="card-body">
                UI/UX Designing Course<br/>
                Rs.699
                
              </div>
            </div>

            <div className="card" style={{ width: "15rem" }}>
              <img
                className="card-img-top"
                src="./images/Rectangle 22.png"
                alt=""
              />
              <div className="card-body">
              UI/UX Designing Course<br/>
                Rs.699
              </div>
            </div>

            <div className="card" style={{ width: "15rem" }}>
              <img
                className="card-img-top"
                src="./images/Rectangle 22.png"
                alt=""
              />
              <div className="card-body">
              UI/UX Designing Course<br/>
                Rs.699
              </div>
            </div>

            <div className="card" style={{ width: "15rem" }}>
              <img
                className="card-img-top"
                src="./images/Rectangle 22.png"
                alt=""
              />
              <div className="card-body">
              UI/UX Designing Course<br/>
                Rs.699
              </div>
            </div>

            <div className="card" style={{ width: "15rem" }}>
              <img
                className="card-img-top"
                src="./images/Rectangle 22.png"
                alt=""
              />
              <div className="card-body">
              UI/UX Designing Course<br/>
                Rs.699
              </div>
            </div>

            <div className="card" style={{ width: "15rem" }}>
              <img
                className="card-img-top"
                src="./images/Rectangle 22.png"
                alt=""
              />
              <div className="card-body">
              UI/UX Designing Course<br/>
                Rs.699
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
}

export default Home;
