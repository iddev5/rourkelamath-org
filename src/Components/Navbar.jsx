import React, { useState, useRef } from "react";
import "../Styles/Nav.css";
import img from "../Assets/emblem.png";




const Nav = ({Sidebar,SetSidebar}) => {
  const scrollbtn = useRef(null);

  window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollbtn.current.style.display = "block";
    } else {
      scrollbtn.current.style.display = "none";
    }
  }


  function scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  return <div>
    <div className={`nav  ${Sidebar?'':'extended-nav'}`}>
      <div className="contact">
        <div className="left">
          <div className="left1">
            <span>
              <i className="fa-regular fa-envelope"></i>
            </span>
            mail@chennaimath.org
          </div>
          <div className="left2">
            <span>
              <i className="fa-solid fa-phone"></i>
            </span>
            +91-44-24621110
          </div>
        </div>
        <div className="s-icons">
          <a href="#a">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="#a">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#a">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#a">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#a">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#a">
            <i className="fa-brands fa-telegram"></i>
          </a>
        </div>
      </div>
      <div className="hb">
        <div className="logo">
          <img src={img} alt="" />
          <div className="emblem-tag">
          <h1>Ramakrishna Mission, Rourkela</h1>
          <p>(A branch centre of Ramakrishna Mission, P.O.: Belur Math, Dist: Howrah - 711202, West Bengal )</p>
          <h2>Vill: Hamirpur,PO: Rourkela -769003,Dist: Sundargarh,Odisha, India</h2>
          <p>Mob: 8986893181 E-mail: rkmrourkela@gmail.com  & rourkela@rkmm.org</p>
          </div>
          {<div className="menu-icon">
          <i class="fa-solid fa-bars" onClick={()=>SetSidebar(prev => prev === false ? true :false )} ></i>
          </div>}
        </div>
          <ul className={`navigation-bar ${Sidebar ? '': 'resp-navigation-bar'}`}>
            <li><a href="/">Home</a></li>
            <li>
              <a>About us</a>
              <div class="nav-dropdown">
                <ul>
                  <li><a>
                    Our Inspiration
                    <div class="nav-dropside">
                      <ul>
                        <li><a href="/sri-ramakrishna">Sri Ramakrishna</a></li>
                        <li><a href="/sri-sarada-devi">Sri Sarada Devi</a></li>
                        <li><a href="/swami-vivekananda">Swami Vivekananda</a></li>
                      </ul>
                    </div>
                  </a></li>
                  <li><a href="/our-motto">Our Motto</a></li>
                  <li><a href="/history">History of Rourkela Mission</a></li>
                  <li><a href="/emblem">Our Emblem</a></li>
                </ul>
              </div>  
            </li>
          </ul>
          {/*
      //   <div id="links" className={`navigation-buttons ${Sidebar?"":"extended-sidebar"}`}>
      //     <li><a id="home" href="/"> Home</a></li>
      //     <li>
      //       <a href="/">About us</a>
      //       <div class="nav-dropdown">
      //         <ul>
      //           <li><a>Our Inspiration</a></li>
      //           <li><a href="/our-motto">Our Motto</a></li>
      //           <li><a href="/history">History of Rourkela Mission</a></li>
      //           <li><a href="/emblem">Our Emblem</a></li>
      //         </ul>
      //       </div>  
      //     </li>
      //     <li><a href="#home">Activities</a></li>
      //     <li><a href="#home">Publications</a></li>
      //     <li><a href="#home">Media</a></li>
      //     <li><a href="#home">Become a monk</a></li>
      //     <li><a href="#home">Donate</a></li>
      //     <li><a href="#home">Sale of Immovable Properties</a></li>
      //     <li><a href="#home">More</a></li>
      // </div>*/}
        </div>
    </div>
    
    <button onClick={scrollTop} ref={scrollbtn} className="goto-top">
      Go to Top
    </button >
  </div>
};

export default Nav;
