import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import './AboutUsCommon.css';
import gst from "../Assets/Celebration Calendar 2024-25 - English.pdf";

export default function Calendar() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="center">
        <div className="header">
          <h1>Celebration Calendar</h1>
        </div>
        <iframe class="pdf" src={gst} />
        <a className="document-download" href={gst} download="Celebration Calendar 2024-25 - English.pdf">Download</a>
      </div>
    </>
  );
}

