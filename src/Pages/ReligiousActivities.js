import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import './AboutUsCommon.css';

export default function ReligiousActivities() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="center">
        <div className="header">
          <h1>Spiritual Activities</h1>
        </div>
        <div className="content">
          <p><strong>Background</strong>: The center, initially established in 1978 by a group of devoted individuals as a Private Centre, attained the esteemed status of a Branch Centre of the Ramakrishna Mission in 2019. Since then, it has been steadfastly committed to spiritual and welfare activities in line with the ethos of the Ramakrishna Mission.</p>

          <p><h1>Religious Activities:</h1></p>
          <ol>
            <li><p><strong>Daily Worship and Chanting</strong>: The core of our spiritual endeavors includes daily worship and chanting sessions, fostering a sense of devotion and reverence among attendees.</p></li>
            <li><p><strong>Evening Aratrikam and Bhajan</strong>: Evening rituals such as Aratrikam and soulful Bhajans provide spiritual solace and communal harmony, enriching the spiritual tapestry of our center.</p></li>
            <li><p><strong>Fortnightly Ram Nam Sankirtanam</strong>: The chanting of the divine name of Ram, undertaken fortnightly, serves as a collective invocation of divine blessings, fostering unity and devotion.</p></li>
            <li><p><strong>Weekly Religious Classes</strong>: Regular religious classes, both conducted within the center and beyond its premises, aim to impart spiritual knowledge and wisdom to seekers. This year witnessed the successful conduct of 49 classes, with a total attendance of 1465 devout participants.</p></li>
          </ol>


          <p><h1>Celebrations:</h1></p>
          <p>The center pulsated with joyous celebrations on various auspicious occasions, including the Tithi Pujas of Sri Ramakrishna, Holy Mother, and Swamiji, as well as festivities marking Gurupurnima, Janmashtami, Durga Ashtami, Ram Navami, Nava Ratri, Dwipavali, Christmas, and the birthdays of spiritual luminaries. These events garnered the presence of 940 devoted souls, fostering a sense of spiritual camaraderie and celebration.</p>

          <p><h1>Welfare Work:</h1></p>
          <ol>
            <li><p><strong>Free Coaching Centre with Smart Classrooms</strong>: In line with our commitment to educational empowerment, a state-of-the-art smart classroom equipped with modern amenities such as air conditioning, a giant LED monitor, free Wi-Fi, and computers was established. This facility serves as a beacon of educational enlightenment, facilitating online classes and access to study materials. Presently, 30 students benefit from this initiative, utilizing it for online education and as a free reading room.</p></li>
            <li><p><strong>Project Jnana-Yatra</strong>: This transformative project endeavors to bridge the educational gap by engaging with rural students through an interactive audio-visual unit. The project orchestrates motivational camps, orientation programs, and academic guidance sessions, empowering 433 students across 29 visits conducted during the year.</p></li>
            <li><p><strong>Welfare Initiatives</strong>: The spirit of service finds expression in our efforts to provide clothing and financial assistance to the underprivileged, embodying the ideals of compassion and solidarity.</p></li>
          </ol>
          
          <p>As we reflect on the manifold activities and endeavors undertaken in FY 2023-24, we reaffirm our commitment to the principles of service, spirituality, and social upliftment, guided by the noble ideals of the Ramakrishna Mission.</p>
        </div>
      </div>
    </>
  );
}

