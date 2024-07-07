import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import './AboutUsCommon.css';
import pan_no from "../Assets/PAN NUMBER OF RAMAKRISHNA MISSION ROURKELA_.pdf";
import pan_rkm from "../Assets/PAN Number of RKM.pdf";

export default function PanRkm() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="center">
        <div className="header">
          <h1>Pan No. of RKM</h1>
        </div>
        <iframe class="pdf" src={pan_no} />
        <iframe class="pdf" src={pan_rkm} />
        <a className="document-download" href={pan_no} download="PAN NUMBER OF RAMAKRISHNA MISSION ROURKELA_.pdf">Download</a>
      </div>
      <Footer />
    </>
  );
}

