import Header from "../Components/Navbar";
import { useState } from "react";
import VisitUs from "../Components/VisitUs";
import './AboutUsCommon.css';

export default function VisitUsPage() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="visit-us-page">
        {/*<div className="header">
          <h1>Celebration Calendar</h1>
        </div>*/}
        <VisitUs />
      </div>
    </>
  );
}

