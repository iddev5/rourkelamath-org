import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import './AboutUsCommon.css';
import image1 from '../Assets/Free-tuition center/ftc1.png';
import image2 from '../Assets/Free-tuition center/ftc2.png';
import image3 from '../Assets/Free-tuition center/ftc3.png';
import image4 from '../Assets/Free-tuition center/ftc4.png';
import image5 from '../Assets/Free-tuition center/ftc5.png';
import image6 from '../Assets/Free-tuition center/ftc6.png';

function FreeTuition() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="center">
        <div className="header">
          <h1>Free Tuition Center</h1>
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

export default FreeTuition;
