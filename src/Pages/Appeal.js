import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import './AboutUsCommon.css';
import img1 from "../Assets/appeal/0001.jpg";
import img2 from "../Assets/appeal/0002.jpg";
import img3 from "../Assets/appeal/0003.jpg";
import img4 from "../Assets/appeal/0004.jpg";
import img5 from "../Assets/appeal/0005.jpg";
import img6 from "../Assets/appeal/0006.jpg";
import img7 from "../Assets/appeal/0007.jpg";
import img8 from "../Assets/appeal/0008.jpg";
import img9 from "../Assets/appeal/0008.jpg";
import img10 from "../Assets/appeal/0010.jpg";
import img11 from "../Assets/appeal/0011.jpg";
import img12 from "../Assets/appeal/0012.jpg";
import img13 from "../Assets/appeal/0013.jpg";
import img14 from "../Assets/appeal/0014.jpg";
import img15 from "../Assets/appeal/0015.jpg";
import img16 from "../Assets/appeal/0016.jpg";
import img17 from "../Assets/appeal/0017.jpg";
import img18 from "../Assets/appeal/0018.jpg";
import img19 from "../Assets/appeal/0019.jpg";
import img20 from "../Assets/appeal/0020.jpg";
import img21 from "../Assets/appeal/0021.jpg";
import img22 from "../Assets/appeal/0022.jpg";
import img23 from "../Assets/appeal/0023.jpg";
import img24 from "../Assets/appeal/0024.jpg";
import img25 from "../Assets/appeal/0025.jpg";
import img26 from "../Assets/appeal/0026.jpg";
import img27 from "../Assets/appeal/0027.jpg";
import img28 from "../Assets/appeal/0028.jpg";

export default function RMR() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="content">
      <div className="center">
        <p><h1>AN APPEAL</h1></p>

        <p>Rourkela Ramakrishna Mission</p>

          <p>hope this message finds you in good health and high spirits.</p>
          <p>I am writing to bring to your attention the urgent needs of the Ramakrishna Mission, Rourkela, located in the heart of the tribal-dominated Sundargarh district in Odisha. Founded by dedicated devotees of Sri Ramakrishna in 1978, the Temple was inaugurated by the revered Srimat Swami Vireswaranandaji Maharaj 10th President of Ramakrishna order in the year1980 and has since been blessed by many senior monks.</p>
          <p>In 2019, Belur Math took charge of the Centre to strengthen the Ramakrishna movement in western Odisha, an area with no other Centre.</p>
          <p>Our mission faces significant challenges. Despite Rourkela being a cosmopolitan town, the teachings of Sri Ramakrishna have not yet deeply permeated the local community. Additionally, the number of devotees in the area remains small, and local funds are scarce. For nearly four decades, the Centre did not receive the necessary infrastructure to operate effectively, leaving the Temple in a dilapidated state.</p>
          <p>To address these issues, we urgently need to construct essential facilities, including Monks’ Quarters, an Office, a Book Sale Counter, an Art Gallery, and a smart classroom for value education. Our future plans include setting up a School of E-learning for Tribal and Unemployed Youth.</p>
          <p>The Temple itself requires significant repairs to meet the standards of our other Temples in India. The total cost for these renovations and constructions is estimated at around Rs 25 lacks.</p>
          <p>We earnestly appeal to the kind-hearted devotees of Thakur Sri Ramakrishna across India, including the families and successors of the Centre’s founding devotees, to donate generously to construc the infrastructure. Which may need about 5 crores.</p>
          <p>Your support is crucial in renovating and rejuvenating the Ramakrishna Mission, Rourkela, transforming it into a hub for spiritual and welfare work in Odisha.In these economically challenging times, only through collective effort can we accomplish this mission.</p>
          <p>Let us come together and contribute towards this noble cause. I pray to The Holy Trio to shower abundant blessings upon you all for your generosity and support.</p>
          <p>Yours in the service of the Holy Trio,<br />
          Swami Buddhadevananda<br />
          Secretary<br />
          Ramakrishna Mission, Rourkela</p>


          <p><h1>Photos revealing the dilapidated condition of Shri Ramakrishna Sangha rest-while a private center in the year 2019 under Odisha Bhava Prachar Parishad</h1></p>
          </div>
        </div>
        <div className="center">
          <div className="gallery-4">
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
            <img src={img5} />
            <img src={img6} />
            <img src={img7} />
            <img src={img8} />
            <img src={img9} />
            <img src={img10} />
            <img src={img11} />
            <img src={img12} />
            <img src={img13} />
            <img src={img14} />
            <img src={img15} />
            <img src={img16} />
            <img src={img17} />
            <img src={img18} />
            <img src={img19} />
            <img src={img20} />
            <img src={img21} />
            <img src={img22} />
            <img src={img23} />
            <img src={img24} />
            <img src={img25} />
            <img src={img26} />
            <img src={img27} />
            <img src={img28} />
        </div>
      </div>
    </>
  );
}

