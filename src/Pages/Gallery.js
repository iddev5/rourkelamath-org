import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import './AboutUsCommon.css';
import image1 from '../Assets/gallery/1.jpg';
import image2 from '../Assets/gallery/2.jpg';
import image3 from '../Assets/gallery/3.jpg';
import image4 from '../Assets/gallery/4.jpg';
import image5 from '../Assets/gallery/5.jpg';
import image6 from '../Assets/gallery/6.jpg';
import image7 from '../Assets/gallery/7.jpg';
import image8 from '../Assets/gallery/8.jpg';
import image9 from '../Assets/gallery/9.jpg';
import image10 from '../Assets/gallery/10.jpg';
import image11 from '../Assets/gallery/11.jpg';
import image12 from '../Assets/gallery/12.jpg';
import image13 from '../Assets/gallery/13.jpg';
import image14 from '../Assets/gallery/14.jpg';
import image15 from '../Assets/gallery/15.jpg';
import image16 from '../Assets/gallery/16.jpg';
import image17 from '../Assets/gallery/17.jpg';
import image18 from '../Assets/gallery/18.jpg';
import image19 from '../Assets/gallery/19.jpg';
import image20 from '../Assets/gallery/20.jpg';
import image21 from '../Assets/gallery/21.jpg';
import image22 from '../Assets/gallery/22.jpg';
import image23 from '../Assets/gallery/23.jpg';
import image24 from '../Assets/gallery/24.jpg';
import image25 from '../Assets/gallery/25.jpg';
import image26 from '../Assets/gallery/26.jpg';
import image27 from '../Assets/gallery/27.jpg';
import image28 from '../Assets/gallery/28.jpg';
import image29 from '../Assets/gallery/29.jpg';
import image30 from '../Assets/gallery/30.jpg';
import image31 from '../Assets/gallery/31.jpg';
import image32 from '../Assets/gallery/32.jpg';
import image33 from '../Assets/gallery/33.jpg';
import image34 from '../Assets/gallery/34.jpg';
import image35 from '../Assets/gallery/35.jpg';
import image36 from '../Assets/gallery/36.jpg';
import image37 from '../Assets/gallery/37.jpg';
import image38 from '../Assets/gallery/38.jpg';
import image39 from '../Assets/gallery/39.jpg';
import image40 from '../Assets/gallery/40.jpg';
import image41 from '../Assets/gallery/41.jpg';

function Gallery() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="center">
        <div className="header">
          <h1>Gallery</h1>
        </div>
        <div className="gallery">
          <img src={image1} />
          <img src={image6} />
          <img src={image7} />
          <img src={image8} />
          <img src={image9} />
          <img src={image10} />
          <img src={image11} />
          <img src={image12} />
          <img src={image13} />
          <img src={image14} />
          <img src={image15} />
          <img src={image16} />
          <img src={image17} />
          <img src={image18} />
          <img src={image19} />
          <img src={image20} />
          <img src={image21} />
          <img src={image22} />
          <img src={image23} />
          <img src={image27} />
          <img src={image28} />
          <img src={image29} />
          <img src={image30} />
          <img src={image31} />
          <img src={image32} />
          <img src={image33} />
          <img src={image34} />
          <img src={image35} />
          <img src={image36} />
          <img src={image37} />
          <img src={image38} />
          <img src={image39} />
          <img src={image40} />
          <img src={image41} /> 
          <img src={image2} />
          <img src={image3} />
          <img src={image4} />
          <img src={image5} />
          <img src={image24} />
          <img src={image25} />
          <img src={image26} />
        </div>
      </div>
    </>
  );
}

export default Gallery;
