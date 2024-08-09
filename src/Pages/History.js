import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import './AboutUsCommon.css';

function History() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="center">
        <div className="content">
        <p><h1>Rourkela Ramakrishna Mission</h1></p>

        <p>The Ramakrishna Mission, Rourkela, located in the heart of the tribal-dominated Sundargarh district in Odisha. Founded by dedicated devotees of Sri Ramakrishna in 1978, the Temple was inaugurated by the revered Srimat Swami Vireswaranandaji Maharaj 10th President of Ramakrishna order in the year 1980 and has since been blessed by many senior monks of the holy order.</p>
        <p>In 2019, Belur Math took charge of the Centre to strengthen the Ramakrishna movement in western Odisha, an area with no other Centre of Belurmath.</p>
        <p>Our mission faces significant challenges. Despite Rourkela being a cosmopolitan town, the teachings of Sri Ramakrishna have not yet deeply permeated the local community. Additionally, the number of devotees in the area remains small, and local funds are scarce. For nearly four decades, the Centre did not receive the necessary infrastructure to operate effectively, leaving the Temple in a dilapidated state.</p>
        <p>To address these issues, we urgently need to construct essential facilities, including Monks’ Quarters, an Office, a Book Sale Counter, an Art Gallery, and a smart classroom for value education. Our future plans include setting up a School of E-learning for Tribal and Unemployed Youth.</p>
        <p>The Temple itself requires significant repairs to meet the standards of our other Temples in India need huge fund.</p>
        <p>We earnestly appeal to the kind-hearted devotees of Thakur Sri Ramakrishna across India, including the family members and successors of the devotees associated with this Centre, to donate generously to construct the infrastructure of this centre which is located at the outskirts of the city Rourkela named as Hamirpur.</p>
        <p>Your support is crucial in renovating and rejuvenating the Ramakrishna Mission, Rourkela, transforming it into a hub for spiritual and welfare work in Odisha.In these economically challenging times, only through collective effort can we accomplish this mission.</p>
        <p>Let us come together and contribute towards this noble cause. I pray to The Holy Trio to shower abundant blessings upon you all for your generosity and support.</p>
        </div>
      </div>
    </>
  );
}

export default History;
