import React from "react";
import "../Styles/Quote.css";
import placeholder from "../Assets/placeholder.jpg";

const Quote = () => {
  return (
    <div id="Quote-section">
      <h1>Quotes</h1>
      <div id="quote-div">
        <div className="left-quote-img">
          <img src={placeholder} alt="" />
        </div>
        <div className="right-quote-img">
          <img src={placeholder} alt="" />
        </div>
      </div>
      <button>
        <i className="fa-regular fa-lightbulb"></i>
        <p>More Quote</p>
      </button>
    </div>
  );
};

export default Quote;
