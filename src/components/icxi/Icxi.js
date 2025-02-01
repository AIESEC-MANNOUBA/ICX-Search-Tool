import React from "react";
import "./icxi.css";
import IGVF from "./assets/igvf.png";
import IGTF from "./assets/igtf.png";

const Icxi = () => {
  return (
    <div className="icxi-container"  id="about">
      <h2 className="icxi-title">ICX In Medina</h2>
      <div className="cards-container">
        <div className="cardi">
          <img src={IGVF} alt="IGVF" />
          <div className="cardi-title">IGV <br></br>(Incoming Global Volunteer)</div>
          <div className="cardi-text">
          Hosting global volunteers for social projects aligned with the UN’s Sustainable Development Goals(SDG).
          </div>
        </div>
        <div className="cardi">
          <img src={IGTF} alt="IGTF" />
          <div className="cardi-title">IGT <br></br> (Incoming Global Talent)</div>
          <div className="cardi-text">
          Bringing international talent for professional internships in fields like IT, marketing, or business.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icxi;
