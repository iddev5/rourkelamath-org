import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import './AboutUsCommon.css';
import image1 from '../Assets/computer/1.jpg';
import image2 from '../Assets/computer/2.jpg';
import image3 from '../Assets/computer/3.jpg';
import image4 from '../Assets/computer/4.jpg';
import image5 from '../Assets/computer/5.jpg';
import image6 from '../Assets/computer/6.jpg';

function Computer() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="center">
        <div className="header">
          <h1>Computer Basic Training</h1>
        </div>
        <div className="gallery">
          <img src={image1} />
          <img src={image2} />
          <img src={image3} />
          <img src={image4} />
          <img src={image5} />
          <img src={image6} />
        </div>
      </div>
    </>
  );
}

export default Computer;
