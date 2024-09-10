import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import './AboutUsCommon.css';
import img1 from "../Assets/value_edu/1.jpeg";
import img2 from "../Assets/value_edu/2.jpeg";
import img3 from "../Assets/value_edu/3.jpeg";
import img4 from "../Assets/value_edu/4.jpeg";

function Projects() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="center">
        <div className="header">
          <h1>Project Jnana Yatra</h1>
        </div>
        <div className="content">
          <p>JnanaYatra, a mobile educational cab to promote value education to schools and colleges and to organize orientation program of human excellence among youth.</p>
    		  <p>This transformative project endeavors to bridge the educational gap by engaging with rural students through an interactive audio-visual unit. The project orchestrates motivational camps, orientation programs, and academic guidance sessions, empowering 433 students across 29 visits conducted during the year.</p>
        </div>
        <div className="header">
          <h1>Value Education</h1>
        </div>
        <div className="gallery">
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
          <img src={img4} />
        </div>
      </div>
    </>
  );
}

export default Projects;
