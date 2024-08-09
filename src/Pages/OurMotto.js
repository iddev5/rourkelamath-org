import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import './AboutUsCommon.css';

function OurMotto() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="center">
        <div className="content">
          <p><h1>Motto of the Organization</h1></p>
          <p>The ideology of the Ramakrishna Math and Ramakrishna Mission, inspired by the teachings of Sri Ramakrishna and Swami Vivekananda, emphasizes the following core tenets:</p>
          <ul>
            <li><p><strong>God Realization</strong>: The ultimate goal of human life is to realize God.</p></li>
            <li><p><strong>Divinity is Within</strong>: Every soul has the potential for divinity.</p></li>
            <li><p><strong>Synthesis of Yogas</strong>: Integration of Bhakti (devotion to cosmic reality), Jnana (Wisdom of divinity), Karma (action) selfless work.</p></li>
            <li><p><strong>Inner Morality</strong>: Morality is based on inner purity and self actualization.</p></li>
            <li><p><strong>Religious Harmony</strong>: Promotes harmony among all religions and faith Sri Ramakrishna as Avatar: Acknowledges Sri Ramakrishna as a divine incarnation.</p></li>
            <li><p><strong>Philosophy of Work</strong>: Views work as worship and serving humanity as serving God which has been professed by Swami Vivekananda as practical Vedanta.</p></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default OurMotto;
