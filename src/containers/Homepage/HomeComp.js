import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../component/Navbar/Navbar";
import About from "../../layouts/HomepageUI/About/About";
import Contact from "../../layouts/HomepageUI/Contacts/Contact";
import Github from "../../layouts/HomepageUI/Github/Github";
import Portfolio from "../../layouts/HomepageUI/Portfolio/Portfolio";
import Resume from "../../layouts/HomepageUI/Resume/Resume";
import Services from "../../layouts/HomepageUI/Services/Services";
import Showcase from "../../layouts/HomepageUI/Showcase/Showcase";
import Testimonial from "../../layouts/HomepageUI/Testimonial/Testimonial";
import { AnimatePresence } from "framer-motion";
import "./style.css";
import { Switch, Link } from "react-router-dom";
import { useLocation } from "react-use";
import Footer from "../../component/Footer/Footer";
import Socials from "../../utils/Socials/Socials";
import Theme from "../../utils/Theme/Theme";
import Email from "../../utils/Email/Email";
import Scroll from "../../utils/Scroll/Scroll";

function HomeComp() {
  const location = useLocation();

  const header = {
    titleOne: "Hi, my name is",
    titleTwo: "Brian Maurice Oluoch.",
    titleThree: "I build things for the web.",
    infOne: "I'm a developer based in Nairobi, Kenya specialized in",
    infTwo: "building (and occasionally designing) exceptional, high-quality",
    infThree: "websites and their backends.",
    btn: "Get In Touch",
  };

  return (
    <React.Fragment>
      <Socials />
      <Scroll />
      {/* <Email /> */}
      <main>
        <div className="main">
          {/* <AnimatePresence key={location.key}> */}
          {/* <Switch location={location} key={location.key}> */}
          <Showcase header={header} />
          <About />
          <Resume />
          <Services />
          <Portfolio />
          {/* <Github /> */}
          {/* <Testimonial /> */}
          <Contact />
          {/* </Switch> */}
          {/* </AnimatePresence> */}
        </div>

        {/* <div className="shadow one"></div>
        <div className="shadow two"></div> */}
      </main>
    </React.Fragment>
  );
}

export default HomeComp;
