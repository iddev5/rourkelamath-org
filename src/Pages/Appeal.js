import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import './AboutUsCommon.css';

export default function RMR() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="center">
        <div className="content">
          <p><h1>Photos revealing the dilapidated condition of Shri Ramakrishna Sangha rest-while a private center in the year 2019 under Odisha Bhava Prachar Parishad</h1></p>
          <div className="gallery">
            {/*<img src={} />*/}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

