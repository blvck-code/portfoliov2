import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./style.css";
import logo from "../../assets/imgs/logo.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar({ open, setOpen }) {
  const toggleMenu = () => {
    setOpen(!open);
    document.querySelector(".nav-menu").classList.toggle("active");
  };

  useEffect(() => {
    const header = document.querySelector("nav");
    const threshold = 200;
    let toggled = false;

    var doc = document.documentElement;
    var w = window;

    var curScroll = w.scrollY || doc.scrollTop;
    var prevScroll = curScroll;
    var curDirection = 0;
    var prevDirection = 0;

    const checkScroll = () => {
      curScroll = w.scrollY || doc.scrollTop;

      if (curScroll > prevScroll) {
        // scrolled down
        curDirection = 2;
      } else {
        // scrolled up
        curDirection = 1;
      }

      if (curDirection !== prevDirection) {
        toggled = toggleHeader();
      }
      if (toggled) {
        prevDirection = curDirection;
      }
      prevScroll = curScroll;
    };

    const toggleHeader = () => {
      toggled = true;
      if (curDirection === 2 && curScroll > threshold) {
        header.classList.add("hide");
      } else if (curDirection === 1) {
        header.classList.remove("hide");
      } else {
        toggled = false;
      }
      return toggled;
    };

    window.addEventListener("scroll", checkScroll);
  }, []);

  return (
    <nav>
      <motion.div
        className="nav__wrapper"
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 3,
          duration: 1,
        }}>
        <div className="navbar">
          <motion.div className="nav-brand">
            <Link to="/">
              <img src={logo} alt="oluoch logo" />
              <h4>
                <span>O</span>luoch
              </h4>
            </Link>
          </motion.div>

          <div className="nav-menu">
            <div className="menu-btn">
              <span className="line-btn"></span>
              <span className="line-btn"></span>
              <span className="line-btn"></span>
            </div>
            <ul className="nav-items">
              <li>
                <a className="nav-item" href="#about">
                  <span className="text-secondary">01.</span>About
                </a>
              </li>
              <li>
                <a className="nav-item" href="#experience">
                  <span className="text-secondary">02.</span>Experience
                </a>
              </li>
              <li>
                <a className="nav-item" href="#work">
                  <span className="text-secondary">03.</span>Work
                </a>
              </li>
              <li>
                <a className="nav-item" href="#contact">
                  <span className="text-secondary">04.</span>Contact
                </a>
              </li>
            </ul>
          </div>
          {/* <ul className="nav-menu">
            <li>
              <a className="nav-link" href="#showcase">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul> */}
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
