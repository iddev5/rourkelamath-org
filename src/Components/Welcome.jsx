import React from "react";
import "../Styles/Welcome.css";

const Welcome = () => {
  return (
    <div id="welcome">
      <div className="w1">
        <h1>Ramakrishna Mission, Rourkela </h1>
        <div>
          <h2>( A branch centre of Ramakrishna Mission )</h2>
        </div>
      </div>
        <div className="w2">
          <div>
            <h1>Motto of the organisation</h1>
          </div>
          <div id="quote">
            <div>
              <h2>
                <span>“</span>
                Romain Rolland described Sri Ramakrishna’s life as the fulfillment of the spiritual aspirations 
                of three hundred million Hindus for the last two thousand years. Max Müller designated him as “a real mahatma,”
                or truly a great master. “No one,” said Mahatma Gandhi, “can read the story of his life without being convinced 
                that God alone is real and all else is an illusion.”<span> „</span>
              </h2>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
