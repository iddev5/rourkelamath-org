import React from "react";
import "../Styles/Welcome.css";

const Welcome = () => {
  return (
    <div id="welcome">
      <div className="w1">
        <h1>Ramakrishna Mission, Rourkela </h1>
        <div>
          <h2>A branch centre of Ramakrishna Mission</h2>
        </div>
      </div>
        <div className="w2">
            <div id="signtitle">
              <h1>Vision of this Center</h1>
            </div>
            <div id="sign">
              <h2>
              It will be a great centre of tolerance and universal acceptance, of grand harmony of all religions, creeds and faiths, sending forth the shining message of goodwill, peace and harmony taking the whole universe to liberation.
              The vision and mission of Ramakrishna Math and Ramakrishna Mission is best described in the words of its great founder Swami Vivekananda —
              “My ideal indeed can be put into few words and that is: to preach unto mankind their divinity and how to make it manifest in every movement in life”.
              तन्नो हंस: प्रचोदयात् (Tanno hamsah prachodayat), meaning, “May the Paramatman, Supreme Self [symbolized by] the Swan (hamsa), awaken our [higher] understanding.”
              </h2>
            </div>
            <div id="quotetitle">
              <h1>Motto of the organisation</h1>
            </div>
            <div id="quote">
                <h2>
                  <span>“</span>
                  Romain Rolland described Sri Ramakrishna’s life as the fulfillment of the spiritual aspirations 
                  of three hundred million Hindus for the last two thousand years. Max Müller designated him as “a real mahatma,”
                  or truly a great master. “No one,” said Mahatma Gandhi, “can read the story of his life without being convinced 
                  that God alone is real and all else is an illusion.”
                </h2>
          </div>
      </div>
    </div>
  );
};

export default Welcome;
