import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import './AboutUsCommon.css';
import reg_certificate from "../Assets/reg-certificate.pdf";
import reg_certificate_2019 from "../Assets/Registration Certificate New 2019.pdf"
import reg_certificate_1860 from '../Assets/Mission Societies Registration 1860.pdf'
import mission_12 from '../Assets/Mission 12A.pdf'

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

        <iframe class="pdf" src={reg_certificate_2019} />
        <a className="document-download" href={reg_certificate_2019} download="Registration Certificate New 2019.pdf">Download</a>

        <iframe class="pdf" src={reg_certificate_1860} />
        <a className="document-download" href={reg_certificate_1860} download="Mission Societies Registration 1860.pdf">Download</a>

        <iframe class="pdf" src={mission_12} />
        <a className="document-download" href={mission_12} download="Mission 12A.pdf">Download</a>
      </div>
    </>
  );
}

