import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import './AboutUsCommon.css';
import reg_certificate from "../Assets/reg-certificate.pdf";

export default function RegCertificate() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="center">
        <div className="header">
          <h1>Registration Certificate</h1>
        </div>
        <iframe class="pdf" src={reg_certificate} />
        <a className="document-download" href={reg_certificate} download="rmr-registration-certificate.pdf">Download</a>
      </div>
    </>
  );
}

