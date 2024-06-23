import React from "react";
import "../Styles/Inspiration.css";
import placeholder from "../Assets/placeholder.jpg";
import insp1 from '../Assets/inspiration/Sri_Ramakrishna.jpg';
import insp2 from '../Assets/inspiration/Sri-Sarada-Devi.jpg';
import insp3 from '../Assets/inspiration/Swami_Vivekananda_Jaipur.jpg';

export default function Inspiration() {
  const list = [insp1, insp2, insp3];

  return (
    <div id="inspiration">
      <div className="header">
        <h1>Our Inspiration</h1>
      </div>
      <div className="contents">
        {list.map((item) => (
          <img src={item} />
        ))}
      </div>
    </div>
  );
}
