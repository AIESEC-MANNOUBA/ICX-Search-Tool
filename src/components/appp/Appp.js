import React from "react";
import "./appp.css";
import { FaCheckCircle, FaUserCheck, FaHandshake, FaClipboardCheck, FaRocket } from "react-icons/fa";
import Tun from "./assets/Image.png";

const processIGV = [
  { icon: <FaClipboardCheck />, text: "Apply" },
  { icon: <FaUserCheck />, text: "Interview" },
  { icon: <FaHandshake />, text: "Get Accepted" },
  { icon: <FaCheckCircle />, text: "Get Approved" },
  { icon: <FaRocket />, text: "Realization" }
];

const processIGT = [
  { icon: <FaClipboardCheck />, text: "Apply" },
  { icon: <FaUserCheck />, text: "Interview with Host" },
  { icon: <FaHandshake />, text: "Interview with Partner" },
  { icon: <FaCheckCircle />, text: "Get Accepted" },
  { icon: <FaRocket />, text: "Realization" }
];

const ProcessCard = ({ title, steps }) => {
  return (
    <div className="process-card">
      <h3>{title}</h3>
      <ul>
        {steps.map((step, index) => (
          <li key={index}>
            <span className="icon">{step.icon}</span>
            {step.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Appp = () => {
  return (
    <div className="process-container" id="application-process">
      <h2 className="title">🚀 Application Process</h2>

      <div className="content">
        <div className="process-steps">
          <ProcessCard title="🌍 Incoming Global Volunteer (IGV)" steps={processIGV} />
          <ProcessCard title="💼 Incoming Global Talent (IGT)" steps={processIGT} />
        </div>

        {/* Responsive image */}
        <img src={Tun} alt="Tunisia" className="process-image" />
      </div>
    </div>
  );
};

export default Appp;
