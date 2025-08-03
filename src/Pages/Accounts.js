import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import './AboutUsCommon.css';
import bs0 from '../Assets/Balance sheet/BALANCE SHEET 24-25 RKM ROURKELA.pdf';
import bs1 from '../Assets/Balance sheet/BALANCE SHEET 23-24 RKM ROURKELA.pdf';
import bs2 from '../Assets/Balance sheet/BALANCE SHEET 22-23 RKM ROURKELA.pdf';
import bs3 from '../Assets/Balance sheet/BALANCE SHEET 21-22 RKM ROURKELA.pdf';
import bs4 from '../Assets/Balance sheet/BALANCE SHEET 20-21 RKM ROURKELA.pdf';
import bs5 from '../Assets/Balance sheet/BALANCE SHEET 19-20 RKM ROURKELA.pdf';
import ie0 from '../Assets/Income & Expenditure/I&E 24-25 RKM ROURKELA.pdf';
import ie1 from '../Assets/Income & Expenditure/I&E 23-24 RKM ROURKELA.pdf';
import ie2 from '../Assets/Income & Expenditure/I&E 22-23 RKM ROURKELA.pdf';
import ie3 from '../Assets/Income & Expenditure/I&E 21-22 RKM ROURKELA.pdf';
import ie4 from '../Assets/Income & Expenditure/I&E 20-21 RKM ROURKELA.pdf';
import ie5 from '../Assets/Income & Expenditure/I&E 19-20 RKM ROURKELA.pdf';

export default function Accounts() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="center">
        <div className="header">
          <h1>Balance Sheet</h1>
        </div>
        <div className="gallery-2">
          
          <div className="center">
            <iframe class="pdf" src={bs0} />
            <a className="document-download" href={bs0} download="BALANCE SHEET 24-25 RKM ROURKELA.pdf">Download</a>
          </div>

          <div className="center">
            <iframe class="pdf" src={bs1} />
            <a className="document-download" href={bs1} download="BALANCE SHEET 23-24 RKM ROURKELA.pdf">Download</a>
          </div>

          <div className="center">
          <iframe class="pdf" src={bs2} />
          <a className="document-download" href={bs2} download="BALANCE SHEET 22-23 RKM ROURKELA.pdf">Download</a>
          </div>

          <div className="center">
          <iframe class="pdf" src={bs3} />
          <a className="document-download" href={bs3} download="BALANCE SHEET 21-22 RKM ROURKELA.pdf">Download</a>
          </div>

          <div className="center">
          <iframe class="pdf" src={bs4} />
          <a className="document-download" href={bs4} download="BALANCE SHEET 20-21 RKM ROURKELA.pdf">Download</a>
          </div>

          <div className="center">
          <iframe class="pdf" src={bs5} />
          <a className="document-download" href={bs5} download="BALANCE SHEET 19-20 RKM ROURKELA.pdf">Download</a>
          </div>

        </div>

        <div className="header">
          <h1>Income & Expenditure</h1>
        </div>
        <div className="gallery-2">
            <div className="center">
              <iframe class="pdf" src={ie0} />
              <a className="document-download" href={ie0} download="I&E 24-25 RKM ROURKELA.pdf">Download</a>
            </div>
            <div className="center">
              <iframe class="pdf" src={ie1} />
              <a className="document-download" href={ie1} download="I&E 23-24 RKM ROURKELA.pdf">Download</a>
            </div>
            <div className="center">
              <iframe class="pdf" src={ie2} />
              <a className="document-download" href={ie2} download="I&E 22-23 RKM ROURKELA.pdf">Download</a>
            </div>
            <div className="center">
              <iframe class="pdf" src={ie3} />
              <a className="document-download" href={ie3} download="I&E 21-22 RKM ROURKELA.pdf">Download</a>
            </div>
            <div className="center">
              <iframe class="pdf" src={ie4} />
              <a className="document-download" href={ie4} download="I&E 20-21 RKM ROURKELA.pdf">Download</a>
            </div>
            <div className="center">
              <iframe class="pdf" src={ie5} />
              <a className="document-download" href={ie5} download="I&E 19-20 RKM ROURKELA.pdf">Download</a>
            </div>
        </div>

      </div>
    </>
  );
}

