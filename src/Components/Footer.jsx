import React from "react";
import "../Styles/Footer.css";
const Footer = () => {
  return (
    <footer>
      <div id="left-info">
        <h1>Visit Us</h1>
        <div id="infoContainer">
          <div className="containers">
            <div className="icon">
              <i className="fa-solid fa-house" style={{ color: "#470D21" }}></i>
            </div>
            <div className="info">
              <p>
                Ramakrishna Mission, Vill: Hamirpur, PO:Rourkela-769003, Dist:
                Sundargarh, Odisha, India
              </p>
            </div>
          </div>
          <div className="containers">
            <div className="icon">
              <i
                className="fa-solid fa-envelope"
                style={{ color: "#470D21" }}
              ></i>
            </div>
            <div className="info">
              <p>rourkela@rkmm.org</p>
              <p>rkmrourkela@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div id="map-section">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.262408161198!2d84.8702478!3d22.2680476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201c110275c71f%3A0x3097c51f94a7b1c0!2sRAMAKRISHNA%20MISSION!5e0!3m2!1sen!2sin!4v1722782553073!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{"border":"0"}}
            allowFullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
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
              <p>Temple Timings 05.00 am to 12:30pm 04:30 pm to 08:30pm</p>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
