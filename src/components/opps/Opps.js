import React, { useEffect, useState } from "react";
import "./opps.css";
import Papa from "papaparse";
import Heart from "./assets/3.4 white 1.png";
import Fingerprint from "./assets/4.4 white 1.png";
import Classroom from "./assets/4.6_1 white.png";
import Skillup from "./assets/8.6 white.png";
import Onthemap from "./assets/8.9 white.png";

const Opps = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const sheetUrl =
      "https://docs.google.com/spreadsheets/d/1F1RQOMYBWk1Wj_evdchuSi8FDnVjs9DA2q1ytAj7v7E/gviz/tq?tqx=out:csv&sheet=iGV%20Opportuinities";

    fetch(sheetUrl)
      .then((response) => response.text())
      .then((csvData) => {
        Papa.parse(csvData, {
          complete: (result) => {
            setData(result.data.filter((row) => row.Statues === "Open")); 
          },
          header: true,
        });
      })
      .catch((error) => console.error("Error fetching the sheet:", error));
  }, []);

  const opportunityImages = {
    "Hearltbeat": Heart,
    "Fingerprint": Fingerprint,
    "Global Classroom": Classroom,
    "Skill Up!": Skillup,
    "On the Map": Onthemap,
  };

  return (
    <div>
      <section className="opportunities" id="opportunities">
        <h2>Opportunities</h2>
        <div className="opportunity-cards">
          {data.map((opportunity, index) => (
            <div className="opportunity-card" key={index}>
              <img
                src={opportunityImages[opportunity.PROJECT]}
                alt={opportunity.PROJECT}
                className="opportunity-image"
              />
              <h3>{opportunity.PROJECT}</h3>
              <p><strong>Start Date:</strong> {opportunity["Start date"]}</p>
              <p><strong>End Date:</strong> {opportunity["End date"]}</p>
              <p><strong>Accomodation:</strong> {opportunity["Accomodation"]}</p>

              <p><strong>Fee:</strong> {opportunity["Fee (€)"]}</p>

              <p><strong>Slots:</strong> {opportunity["#SLOTS"]}</p>
              <a
                href={`https://aiesec.org/opportunity/global-volunteer/${opportunity["ID"]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="opportunity-link"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Opps;
