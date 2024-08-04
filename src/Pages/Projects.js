import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import './AboutUsCommon.css';

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
        <div className="gallery">
          <img />
        </div>
      </div>
    </>
  );
}

export default Projects;
