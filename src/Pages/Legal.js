import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import './AboutUsCommon.css';
import legal from "../Assets/LEGAL STATUS AND MANAGEMENT POLICY.docx.pdf"

export default function Legal() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="center">
        <div className="header">
          <h1>Legal Status and Management Policy</h1>
        </div>
        <div className="content">
          <h1>Legal Status:</h1>
          <p><strong>Name: Ramakrishna Mission Rourkela, a Branch of Ramakrishna Mission,Belurmath, Howrah, W.B.711202</strong></p>
          <ol>
            <li><p><strong>Registration</strong>: Registered under Act XXI of 1860 on May 4th, 1909, with Registration No. 1917/3 for 1909-10. Revised according to West Bengal Act XXVI of 1961.</p></li>
            <li><p><strong>Head Office</strong>: Ramakrishna Math & Ramakrishna Mission Belur Math, Howrah-711202, West Bengal, India.</p></li>
            <li><p><strong>Nature</strong>: Ramakrishna Mission is a non-political religious and philanthropic organization.</p></li>
          </ol>    
          <h1>Management Policy:</h1>
          <ol>
            <li><p>
                <strong>Vision and Mission:</strong>
                <ul>
                  <li>Mission to serve humanity, inspired by the teachings of Sri Ramakrishna and Swami Vivekananda.</li>
                  <li>Specific focus on serving the poor, tribal people, and the underprivileged in Odisha.</li>
                </ul>
                </p>            
            </li>
            <li><p>In order to fulfill the vision of Sri Ramakrishna Deb, Swami Vivekananda, his foremost disciple established Ramakrishna Mission with a mission to serve Shiva (God) in the living beings (Jiva) who constitute the suffering, the poor, the neglected, and the distressed. Ramakrishna Mission Rourkela, a branch center of Ramakrishna Mission, Belur Math, Howrah, West Bengal, came into existence in 1951 with a keen vision to serve the poor Tribal people of the state of Odisha, and the country as well.</p></li>
            <li><p>
              <strong>Objectives:</strong>
              <ul>
                <li>Conducting research in arts, humanities, sciences, and technologies.</li>
                <li>Medical research and training.</li>
                <li>Educational outreach and training of teachers.</li>
                <li>Establishment and maintenance of various educational, medical, cultural, and social welfare institutions.</li>
                <li>Development and welfare activities for underprivileged and tribal communities.</li>
                <li>Publication and dissemination of knowledge through journals and books.</li>
              </ul>
            </p>
            </li>
            <li><p><strong>Achievements:</strong>
              <div>A.Significant contributions in education and welfare activities for tribal communities in Odisha.</div>
              <div>B.Promotion of human excellence through value education, motivational camps, and orientation programs.</div>
              <div>C.Support from Ramakrishna Math & Mission's extensive network and resources.</div>
            </p></li>

            <li><p><strong>Management Structure:</strong>
              <ul>
                <li><strong>Managing Committee:</strong> Headed by the Secretary, authorized to exercise financial and executive powers on behalf of Ramakrishna Mission Rourkela approved and authorized by the Governing Body of Ramakrishna Mission, Headquarters at Belurmath.</li>
                <li><strong>Committees:</strong> Managing committee oversees legal matters and governance under the guidance of the Headquarters at Belur Math.</li>
                <li><strong>Board Composition:</strong> 18 members serving a term of 2 years, with renewal procedures defined in the charter approved by Belur Math.</li>
              </ul></p>
            </li>

            <li><p><strong>Compliance and Dispute Resolution:</strong>
              <ul>
                <li>Adherence to CSR policies of donor agencies and government regulations.</li>
                <li>Dispute resolution managed by the Managing Committee in consultation with the Governing Body at Belur Math.</li>
              </ul></p>
            </li>

            <li><p><strong>Expertise and Resources:</strong>
              <ul>
                <li>Technical personnel including doctors, engineers, and advocates are associated with Ramakrishna Mission Rourkela.</li>
                <li>Experienced management personnel oversee day-to-day activities and growth plans.</li>
              </ul></p>
            </li>



          </ol>

          <h1>Conclusion:</h1>
          <p>More than religious in nature, the Ramakrishna Math and Mission are guided by the doctrine of Universality of Truth, Acceptance of all religions as means to the same goal who is called differently by different religions and faith. Ramakrishna Math & Mission has taught the world both tolerance and universal acceptance.</p>
          <p>Ramakrishna Mission Rourkela, as a branch of Ramakrishna Mission headquartered in Belur Math, operates under a well-defined legal framework and management policy. It focuses on holistic development through education, healthcare, and welfare activities, particularly targeting underprivileged and tribal communities in Odisha. The organization adheres to the principles of non-discrimination and universal acceptance, reflecting the ethos of Ramakrishna Math & Mission.</p>

          <a className="document-download" href={legal} download="LEGAL STATUS AND MANAGEMENT POLICY.pdf">Download</a>
        </div>
      </div>
    </>
  );
}

