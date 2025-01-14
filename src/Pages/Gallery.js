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

import comp1 from '../Assets/gallery/comp/comp1.jpg';
import comp2 from '../Assets/gallery/comp/comp2.jpg';
import comp3 from '../Assets/gallery/comp/comp3.jpg';
import comp4 from '../Assets/gallery/comp/comp4.jpg';
import comp5 from '../Assets/gallery/comp/comp5.jpg';
import comp6 from '../Assets/gallery/comp/comp6.jpg';
import comp7 from '../Assets/gallery/comp/comp7.jpg';
import comp8 from '../Assets/gallery/comp/comp8.jpg';
import comp9 from '../Assets/gallery/comp/comp9.jpg';
import comp10 from '../Assets/gallery/comp/comp10.jpg';
import comp11 from '../Assets/gallery/comp/comp11.jpg';
import comp12 from '../Assets/gallery/comp/comp12.jpg';
import comp13 from '../Assets/gallery/comp/comp13.jpg';
import comp14 from '../Assets/gallery/comp/comp14.jpg';
import comp15 from '../Assets/gallery/comp/comp15.jpg';
import comp16 from '../Assets/gallery/comp/comp16.jpg';
import comp17 from '../Assets/gallery/comp/comp17.jpg';
import comp18 from '../Assets/gallery/comp/comp18.jpg';
import comp19 from '../Assets/gallery/comp/comp19.jpg';
import comp20 from '../Assets/gallery/comp/comp20.jpg';

function Gallery() {
 const[Sidebar,SetSidebar]=useState(true) 

  const events = [
    {
      name: 'Competition on 22.09.24 on Moral storytelling and Drawing',
      images: [comp1, comp2, comp3, comp4, comp5, comp6, comp7, comp8, comp9,
        comp10, comp11, comp12, comp13, comp14, comp15, comp16, comp17, comp18,
        comp19, comp20]
    },
    {
      name: 'Tithi Puja Celebration of Holy Mother Sri Sarada Devi',
      images: [
        tpc1,
        tpc2,
        tpc3,
        tpc4,
        tpc5,
        tpc6,
      ]
    },
    {
      name: '189th Tithi Puja of Sri Ramakrishna',
      images: [
        tp1,
        tp2,
        tp3,
        tp4,
        tp5,
        tp6,
      ]
    },
    {
      name: 'Guru Purnima 2024',
      images: [
        gp1,
        gp2,
        gp3,
        gp4,
        gp6,
        gp7,
      ]
    },
    {
      name: 'National Youth Day 2023',
      images: [
        nyd1,
        nyd2,
        nyd3,
        nyd4,
        nyd5,
        nyd6,
      ]
    },
    {
      name: 'Youth Activities (Aug 23 To Jan 24)',
      images: [
        ya1,
        ya2,
        ya3,
        ya4,
        ya5,
        ya6,
        ya7,
        ya8,
        ya9,
        ya10,
        ya11,
        ya12,
      ]
    },
    {
      name: 'Durga Puja Celebrations 2024',
      images: [
        dp1,
        dp2,
        dp3,
        dp4,
        dp5,
        dp6,
        dp7,
        dp8,
        dp9,
      ]
    }
  ];

  return (<>
    <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />


    {events.map((event, idx) =>
      <div className={`center ${idx % 2 != 0 ? 'gallery-hl' : ''}`}>
        <div className="gallery-header">
          <h1>{event.name}</h1>
        </div>
        <div className='gallery'>
          {event.images.map(image => 
            <img src={image} />
          )}
        </div>
      </div>
    )}
  </>);
}

export default Gallery;
