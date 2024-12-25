import React from "react";
import "../Styles/Announcements.css";
import placeholder from "../Assets/placeholder.jpg";
import dd0 from '../Assets/disciples/DirectDisciples0(vivekananda).png';
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
            <img src={dd0} />
            <p><i></i> SWAMI VIVEKANANDA</p> <p>(1863-1902)</p>
          </div>
          <div class="box">
            <img src={dd1} />
           <p>SWAMI BRAHMANANDA</p> <p>(1863-1922)</p>
          </div>
          <div class="box">
            <img src={dd2} />
           <p>SWAMI SHIVANANDA</p> <p>(1854-1934)</p>
          </div>
          <div class="box">
            <img src={dd3} />
           <p>SWAMI AKHANDANANDA</p> <p>(1864-1937)</p>
          </div>
          <div class="box">
            <img src={dd4} />
           <p>SWAMI VIJNANANANDA</p> <p>(1868-1938)</p>
          </div>
          <div class="box">
            <img src={dd5} />
            <p>SWAMI PREMANANDA </p><p>(1861-1918)</p>
          </div>
          <div class="box">
            <img src={dd6} />
           <p>SWAMI SARADANANDA</p> <p>(1865-1927)</p>
          </div>
          <div class="box">
            <img src={dd7} />
            <p>SWAMI RAMAKRISHNANANDA</p><p>(1863-1911)</p>
          </div>
          <div class="box">
            <img src={dd8} />
           <p>SWAMI TURIYANANDA</p> <p>(1863-1922)</p>
          </div>
          <div class="box">
            <img src={dd9} />
            <p>SWAMI ABHEDANANDA</p><p>(1866-1939)</p>
          </div>
          <div class="box">
            <img src={dd10} />
            <p>SWAMI ADBHUTANANDA</p><p>(- -1920)</p>
          </div>
          <div class="box">
            <img src={dd11} />
            <p><i></i> SWAMI NIRANJANANANDA</p><p>(1862-1904)</p>
          </div>
          <div class="box">
            <img src={dd12} />
            <p><i></i>SWAMI TRIGUNATITANANDA</p><p>(1865-1915)</p>
          </div>
          <div class="box">
            <img src={dd13} />
          <p>SWAMI ADVAITANANDA</p>  <p>(1828-1909)</p>
          </div>
          <div class="box">
            <img src={dd14} />
            <p><i></i> SWAMI SUBODHANANDA</p><p>(1867-1932)</p>
          </div>
          <div class="box">
            <img src={dd15} />
            <p><i></i> SWAMI YOGANANDA</p>  <p>(1861-1899)</p>
          </div>
      </div>
    </div>
  );
}
