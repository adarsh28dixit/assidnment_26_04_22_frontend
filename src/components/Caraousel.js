import React from "react";
import "./carousel.css";

function Caraousel() {
  return (
    <>
      <div className="container">
        <h4> Advance your career with new skill</h4>
        <div className="carousel">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block "
                  src="./images/Rectangle 22.png"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block "
                  src="./images/Rectangle 22.png"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block "
                  src="./images/Rectangle 22.png"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div className="right">
            <h5>
            UI/UX Designing Course
            </h5>
            <p>Lorem ipsum is the dummy text used tokdkdi kdolll kolk yundjkdi idkdldie dkdldiek idiekm in the nrooot .</p>
        </div>
        </div>
        
      </div>
    </>
  );
}

export default Caraousel;
