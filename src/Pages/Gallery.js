import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import './AboutUsCommon.css';

import tpc1 from '../Assets/gallery/24tpc/24tpc1.png';
import tpc2 from '../Assets/gallery/24tpc/24tpc2.png';
import tpc3 from '../Assets/gallery/24tpc/24tpc3.png';
import tpc4 from '../Assets/gallery/24tpc/24tpc4.png';
import tpc5 from '../Assets/gallery/24tpc/24tpc5.png';
import tpc6 from '../Assets/gallery/24tpc/24tpc6.png';

import tp1 from '../Assets/gallery/189tp/189tp1.jpg';
import tp2 from '../Assets/gallery/189tp/189tp2.jpg';
import tp3 from '../Assets/gallery/189tp/189tp3.jpg';
import tp4 from '../Assets/gallery/189tp/189tp4.jpg';
import tp5 from '../Assets/gallery/189tp/189tp5.jpg';
import tp6 from '../Assets/gallery/189tp/189tp6.jpg';

import gp1 from '../Assets/gallery/gp24/1.jpg';
import gp2 from '../Assets/gallery/gp24/2.jpg';
import gp3 from '../Assets/gallery/gp24/3.jpg';
import gp4 from '../Assets/gallery/gp24/4.jpg';
import gp6 from '../Assets/gallery/gp24/6.jpg';
import gp7 from '../Assets/gallery/gp24/7.jpg';

import nyd1 from '../Assets/gallery/nyd23/23nyd1.jpg';
import nyd2 from '../Assets/gallery/nyd23/23nyd2.jpg';
import nyd3 from '../Assets/gallery/nyd23/23nyd3.jpg';
import nyd4 from '../Assets/gallery/nyd23/23nyd4.jpg';
import nyd5 from '../Assets/gallery/nyd23/23nyd5.jpg';
import nyd6 from '../Assets/gallery/nyd23/23nyd6.jpg';

import ya1 from '../Assets/gallery/ya23/23ya1.jpg';
import ya2 from '../Assets/gallery/ya23/23ya2.jpg';
import ya3 from '../Assets/gallery/ya23/23ya3.jpg';
import ya4 from '../Assets/gallery/ya23/23ya4.jpg';
import ya5 from '../Assets/gallery/ya23/23ya5.jpg';
import ya6 from '../Assets/gallery/ya23/23ya6.jpg';
import ya7 from '../Assets/gallery/ya23/23ya7.jpg';
import ya8 from '../Assets/gallery/ya23/23ya8.jpg';
import ya9 from '../Assets/gallery/ya23/23ya9.jpg';
import ya10 from '../Assets/gallery/ya23/23ya10.jpg';
import ya11 from '../Assets/gallery/ya23/23ya11.jpg';
import ya12 from '../Assets/gallery/ya23/23ya12.jpg';

import dp1 from '../Assets/gallery/dp24/24DP1.jpg';
import dp2 from '../Assets/gallery/dp24/24DP2.jpg';
import dp3 from '../Assets/gallery/dp24/24DP3.jpg';
import dp4 from '../Assets/gallery/dp24/24DP4.jpg';
import dp5 from '../Assets/gallery/dp24/24DP5.jpg';
import dp6 from '../Assets/gallery/dp24/24DP6.jpg';
import dp7 from '../Assets/gallery/dp24/24DP7.jpg';
import dp8 from '../Assets/gallery/dp24/24DP8.jpg';
import dp9 from '../Assets/gallery/dp24/24DP9.jpg';

function Gallery() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="center">
        <div className="gallery-header">
          <h1>Tithi Puja Celebration of Holy Mother Sri Sarada Devi</h1>
        </div>
        <div className="gallery">
          <img src={tpc1} />
          <img src={tpc2} />
          <img src={tpc3} />
          <img src={tpc4} />
          <img src={tpc5} />
          <img src={tpc6} />
        </div>

        <div className="gallery-hl center">
        <div className="gallery-header">
          <h1>189th Tithi Puja of Sri Ramakrishna</h1>
        </div>
        <div className="gallery">
          <img src={tp1} />
          <img src={tp2} />
          <img src={tp3} />
          <img src={tp4} />
          <img src={tp5} />
          <img src={tp6} />
        </div>
        </div>

        <div className="gallery-header">
          <h1>Guru Purnima 2024</h1>
        </div>
        <div className="gallery">
          <img src={gp1} />
          <img src={gp2} />
          <img src={gp3} />
          <img src={gp4} />
          <img src={gp6} />
          <img src={gp7} />
        </div>

        <div className="gallery-hl center">
        <div className="gallery-header">
          <h1>National Youth Day 2023</h1>
        </div>
        <div className="gallery">
          <img src={nyd1} />
          <img src={nyd2} />
          <img src={nyd3} />
          <img src={nyd4} />
          <img src={nyd5} />
          <img src={nyd6} />
        </div>
        </div>

        <div className="gallery-header">
          <h1>Youth Activities (Aug 23 To Jan 24)</h1>
        </div>
        <div className="gallery">
          <img src={ya1} />
          <img src={ya2} />
          <img src={ya3} />
          <img src={ya4} />
          <img src={ya5} />
          <img src={ya6} />
          <img src={ya7} />
          <img src={ya8} />
          <img src={ya9} />
          <img src={ya10} />
          <img src={ya11} />
          <img src={ya12} />
        </div>

        <div className="gallery-hl center">
        <div className="gallery-header">
          <h1>Durga Puja Celebrations 2024</h1>
        </div>
        <div className="gallery">
          <img src={dp1} />
          <img src={dp2} />
          <img src={dp3} />
          <img src={dp4} />
          <img src={dp5} />
          <img src={dp6} />
          <img src={dp7} />
          <img src={dp8} />
          <img src={dp9} />
        </div>
        </div>

      </div>
    </>
  );
}

export default Gallery;
