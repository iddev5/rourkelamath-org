import React from "react";
import "../Styles/Announcements.css";
import placeholder from "../Assets/placeholder.jpg";
import img1 from '../Assets/inspiration/Swami_Vivekananda_Jaipur.jpg';

export default function Disciples() {
  const list = Array(15).fill(placeholder);

  return (
    <div id="announcement">
      <div className="header">
        <h1>Pictures of direct disciples of Shri Ramakrishna</h1>
      </div>
      <div className="contents">
          <div class="box">
            <img src={img1} />
            <p><i></i> Swami Vivekananda</p>
          </div>
        {list.map((item) => (
          <div class="box">
            <img src={item} />
            <p>Title</p>
          </div>
        ))}
      </div>
    </div>
  );
}
