import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import './AboutUsCommon.css';
import land from "../Assets/LAND RECORD.pdf";

export default function Land() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="center">
        <div className="header">
          <h1>Land Record</h1>
        </div>
        <iframe class="pdf" src={land} />
        <a className="document-download" href={land} download="LAND RECORD.pdf">Download</a>
      </div>
    </>
  );
}

