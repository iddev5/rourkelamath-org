import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import './AboutUsCommon.css';
import img1 from "../Assets/appeal/1.jpg";
import img2 from "../Assets/appeal/2.jpg";
import img3 from "../Assets/appeal/3.jpg";
import img4 from "../Assets/appeal/4.jpg";
import img5 from "../Assets/appeal/5.jpg";
import img6 from "../Assets/appeal/6.jpg";
import img7 from "../Assets/appeal/7.jpg";
import img8 from "../Assets/appeal/8.jpg";
import img9 from "../Assets/appeal/8.jpg";
import img10 from "../Assets/appeal/10.jpg";
import img11 from "../Assets/appeal/11.jpg";
import img12 from "../Assets/appeal/12.jpg";
import img13 from "../Assets/appeal/13.jpg";
import img14 from "../Assets/appeal/14.jpg";
import img15 from "../Assets/appeal/15.jpg";
import img16 from "../Assets/appeal/16.jpg";
import img17 from "../Assets/appeal/17.jpg";
import img18 from "../Assets/appeal/18.jpg";
import img19 from "../Assets/appeal/19.jpg";
import img20 from "../Assets/appeal/20.jpg";
import img21 from "../Assets/appeal/21.jpg";
import img22 from "../Assets/appeal/22.jpg";

export default function RMR() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="center">
        <div className="content">
          <p><h1>Photos revealing the dilapidated condition of Shri Ramakrishna Sangha rest-while a private center in the year 2019 under Odisha Bhava Prachar Parishad</h1></p>
          <div className="gallery">
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
            <img src={img5} />
            <img src={img6} />
            <img src={img7} />
            <img src={img8} />
            <img src={img9} />
            <img src={img10} />
            <img src={img11} />
            <img src={img12} />
            <img src={img13} />
            <img src={img14} />
            <img src={img15} />
            <img src={img16} />
            <img src={img17} />
            <img src={img18} />
            <img src={img19} />
            <img src={img20} />
            <img src={img21} />
            <img src={img22} />
          </div>
        </div>
      </div>
    </>
  );
}

