import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import './AboutUsCommon.css';
import gst from "../Assets/GSTN NUMBER-AA210921023098K_RC30092021.pdf";

export default function Gst() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="center">
        <div className="header">
          <h1>GST</h1>
        </div>
        <iframe class="pdf" src={gst} />
        <a className="document-download" href={gst} download="GSTN NUMBER-AA210921023098K_RC30092021.pdf">Download</a>
      </div>
    </>
  );
}

