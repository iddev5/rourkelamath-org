import React from "react";
import "../Styles/Announcements.css";
import placeholder from "../Assets/placeholder.jpg";
import img1 from '../Assets/inspiration/Swami_Vivekananda_Jaipur.jpg';
import dd1 from '../Assets/disciples/DirectDisciples1(brahmananda).png';
import dd2 from '../Assets/disciples/DirectDisciples2(shivananda).png';
import dd3 from '../Assets/disciples/DirectDisciples3(akhandananda).png';
import dd4 from '../Assets/disciples/DirectDisciples4(vijnanananda).png';
import dd5 from '../Assets/disciples/DirectDisciples5(premananda).png';
import dd6 from '../Assets/disciples/DirectDisciples6(saradananda).png';
import dd7 from '../Assets/disciples/DirectDisciples7(ramakrishnananda).png';
import dd8 from '../Assets/disciples/DirectDisciples8(turiyananda).png';
import dd9 from '../Assets/disciples/DirectDisciples9(abhedananda).png';
import dd10 from '../Assets/disciples/DirectDisciples10(adbhutananda).png';
import dd11 from '../Assets/disciples/DirectDisciples11(niranjananda).png';
import dd12 from '../Assets/disciples/DirectDisciples12(trigunantitananda).png';
import dd13 from '../Assets/disciples/DirectDisciples13(advaitananda).png';
import dd14 from '../Assets/disciples/DirectDisciples14(subhodananda).png';
import dd15 from '../Assets/disciples/DirectDisciples15(yogananda).png';

export default function Disciples() {
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
          <div class="box">
            <img src={dd1} />
            <p><i>RAKHAL</i> - Swami Bramhananda</p>
          </div>
          <div class="box">
            <img src={dd2} />
            <p><i>TARAK</i> - Swami Shivananda</p>
          </div>
          <div class="box">
            <img src={dd3} />
            <p><i>GANGADHAR</i> - Swami Akhandananda</p>
          </div>
          <div class="box">
            <img src={dd4} />
            <p><i>HARI PRASANA</i> - Swami Vijnanananda</p>
          </div>
          <div class="box">
            <img src={dd5} />
            <p><i>BABURAM</i> - Swami Premananda</p>
          </div>
          <div class="box">
            <img src={dd6} />
            <p><i>SARAT</i> - Swami Saradananda</p>
          </div>
          <div class="box">
            <img src={dd7} />
            <p><i>SASHI</i> - Swami Ramakrishnananda</p>
          </div>
          <div class="box">
            <img src={dd8} />
            <p><i>HARI</i> - Swami Turiyananda</p>
          </div>
          <div class="box">
            <img src={dd9} />
            <p><i>KALI</i> - Swami Abhedananda</p>
          </div>
          <div class="box">
            <img src={dd10} />
            <p><i>LATU</i> - Swami Adbhutananda</p>
          </div>
          <div class="box">
            <img src={dd11} />
            <p><i></i> Swami Niranjananda</p>
          </div>
          <div class="box">
            <img src={dd12} />
            <p><i></i> Swami Trigunantitanand</p>
          </div>
          <div class="box">
            <img src={dd13} />
            <p><i>GOPAL</i> - Swami Advaitananda</p>
          </div>
          <div class="box">
            <img src={dd14} />
            <p><i></i> Swami Subhodananda</p>
          </div>
          <div class="box">
            <img src={dd15} />
            <p><i></i> Swami Yogananda</p>
          </div>
      </div>
    </div>
  );
}
