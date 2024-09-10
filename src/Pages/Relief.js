import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import './AboutUsCommon.css';
import img1 from "../Assets/relief/1.jpeg";
import img2 from "../Assets/relief/2.jpeg";
import img3 from "../Assets/relief/3.jpeg";
import img4 from "../Assets/relief/4.jpeg";
import img5 from "../Assets/relief/5.jpeg";

function Relief() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="center">
        <div className="header">
          <h1>Distance Relief</h1>
        </div>
        <div className="gallery">
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
          <img src={img4} />
          <img src={img5} />
        </div>
      </div>
    </>
  );
}

export default Relief;
