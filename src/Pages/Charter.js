import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import './AboutUsCommon.css';
import charter from "../Assets/CHARTER OF MC_2023-2025_Rourkela.pdf";

export default function Charter() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="center">
        <div className="header">
          <h1>Charter of MC</h1>
        </div>
        <iframe class="pdf" src={charter} />
        <a className="document-download" href={charter} download="CHARTER OF MC_2023-2025_Rourkela.pdf">Download</a>
      </div>
      <Footer />
    </>
  );
}

