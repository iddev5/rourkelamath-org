import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../Styles/Nav.css";
import img from "../Assets/emblem.png";




const Nav = ({ Sidebar, SetSidebar }) => {
  const scrollbtn = useRef(null);
  const location = useLocation();

  let all_navs = document.querySelectorAll(".nav-dropdown li, .navigation-bar li");

  useEffect(() => {
    window.onscroll = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollbtn.current.style.display = "block";
      } else {
        scrollbtn.current.style.display = "none";
      }
    }

    window.onclick = (ev) => {
      let cond = true
      for (let i of all_navs) {
        console.log(ev)
        if (i.contains(ev.target)) {
          cond = false;
          break;
        }
      }
      if (cond) closeAllNav();
    }
  }, []);

  function closeAllNav() {
    let lis = document.querySelectorAll(".nav-dropdown li, .navigation-bar li");
    lis.forEach(li => li.childElementCount > 1 && (li.lastChild.style.display = "none"));
  }

  useEffect(() => {
    let lis = document.querySelectorAll(".navigation-bar li");
    lis.forEach(li => li.addEventListener("click", () => {
      closeAllNav();

      li.lastChild.style.display = "block";
    }))

    lis = document.querySelectorAll(".nav-dropdown li")
    lis.forEach(li => li.addEventListener("click", () => {
      closeAllNav();
      const dropside = li.querySelector(".nav-dropside, .nav-dropside-left, .nav-dropside-left-2")
      if (dropside)
        dropside.style.display = "block";

      li.lastChild.style.display = "block";
    }))
  }, []);

  useEffect(() => {
    const list = document.querySelector(`.hb ul li a[href='${location.pathname}']`);
    list.parentNode.classList.add('navigation-active');
  }, [location.pathname]);

  function scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return <div>
    <div className={`nav  ${Sidebar ? '' : 'extended-nav'}`}>
      {/*<div className="contact">
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
      </div>*/}
      <div className="hb">
        <div className="logo">
          <img src={img} alt="" />
          <div className="emblem-tag">
            <h1>Ramakrishna Mission, Rourkela</h1>
            <p>(A branch centre of Ramakrishna Mission, P.O.: Belur Math, Dist: Howrah - 711202, West Bengal)</p>
          </div>
          {<div className="menu-icon">
            <i className="fa-solid fa-bars" onClick={() => SetSidebar(prev => prev === false ? true : false)} ></i>
          </div>}
        </div>
        <ul className={`navigation-bar ${Sidebar ? '' : 'resp-navigation-bar'}`}>
          <li><a href="/">Home</a></li>
          <li>
            <div className="nav-added">
              <a>About us</a>
              <i className="arrow-icon fa-solid fa-angle-down"></i>
            </div>
            <div class="nav-dropdown">
              <ul>
                <li><a href="/rmr">Ramakrishna Mission Rourkela</a></li>
                <li><div><a className="nav-added">
                  Our Inspiration
                  <i className="arrow-icon fa-solid fa-angle-right"></i>
                </a>
                  <div class="nav-dropside">
                    <ul>
                      <li><a href="/sri-ramakrishna">Sri Ramakrishna</a></li>
                      <li><a href="/sri-sarada-devi">Sri Sarada Devi</a></li>
                      <li><a href="/swami-vivekananda">Swami Vivekananda</a></li>
                    </ul>
                  </div>
                </div>
                </li>
                <li><a href="/our-motto">Our Motto</a></li>
                <li><a href="/history">History of Rourkela Mission</a></li>
                <li><a href="/emblem">Our Emblem</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a>Activities</a>
            <i className="arrow-icon fa-solid fa-angle-down"></i>
            <div class="nav-dropdown">
              <ul>
                <li><a href="/projects">Educational Projects</a></li>
                <li><a href="/computer">Computer Basic Training</a></li>
                <li><a href="/relief-work">Relief Work</a></li>
                <li><a href="/spiritual-activities">Spiritual Activities</a></li>
                <li><a href="/free-tuition">Free Tuition Center</a></li>
              </ul>
            </div>
          </li>
          <li><a href="/appeal">Appeal</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/monk">Become a monk</a></li>
          <li><a href="/donate">Donate</a></li>
          <li>
            <a>More</a>
            <i className="arrow-icon fa-solid fa-angle-down"></i>
            <div class="nav-dropdown">
              <ul>
                <li><a className="nav-added">
                  Legal Documents
                  <i className="arrow-icon fa-solid fa-angle-left"></i>
                  <div class="nav-dropside-left">
                    <ul>
                      <li><a href="/accounts">Accounts</a></li>
                      <li><a className="nav-added">
                        Registration
                        <i className="arrow-icon fa-solid fa-angle-left"></i>
                        <div class="nav-dropside-left-2">
                          <ul>
                            <li><a href="/reg-certificate">Registration Certificate</a></li>
                            <li><a href="/pan-no">Pan No.</a></li>
                            <li><a href="/gst">GST</a></li>
                            <li><a href="/charter-of-mc">Charter of MC</a></li>
                            <li><a href="/pan-rkm">Pan No of RKM</a></li>
                          </ul>
                        </div>
                      </a></li>
                      <li><a href="/land-record">Land Record</a></li>
                      <li><a href="/tan">TAN</a></li>
                    </ul>
                  </div>
                </a></li>
                <li><a href="/legal">Legal Status and Management Policy</a></li>
                <li><a href="/calendar">Calendar</a></li>
                <li><a href="/visit-us">Visit Us</a></li>
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
      <div className="fa-solid fa-arrow-up"></div>
      <p>Top</p>
    </button >
  </div>
};

export default Nav;
