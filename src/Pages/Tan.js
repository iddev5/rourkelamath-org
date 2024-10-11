import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import './AboutUsCommon.css';
import tan from "../Assets/TAN.jpeg";

export default function Gst() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="center">
        <div className="header">
          <h1>TAN</h1>
        </div>

      <div id="tan-img">
            <img src={tan} />
        </div>
      </div>
    </>
  );
}

