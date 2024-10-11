import React from "react";
import VisitUs from "./VisitUs";
import "../Styles/Footer.css";
const Footer = () => {
  return (
    <footer>
      <div>
        <VisitUs />
      </div>

      <div id="right-info">
        <h1>Ramakrishna Mission, Rourkela</h1>
        <div className="containers">
          <div className="icon">
            <i
              className="fa-regular fa-clock"
              style={{ color: "#470D21" }}
            ></i>
          </div>
          <div className="info">
            <p>Temple Timings:</p>
            <div id="timing-set">
              <div className="timing">05.00 AM to 12:30 PM</div>
              <div className="timing">04:30 PM to 08:30 PM</div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
