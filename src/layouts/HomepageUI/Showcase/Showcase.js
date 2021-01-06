import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./style.css";
import { useHistory } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import styled from "styled-components";
import img from "../../../assets/imgs/oluoch.jpg";

function Showcase({ open, header }) {
  const showcase = document.getElementById("showcase");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  let history = useHistory();
  useEffect(() => {
    console.log(history.replace);
  }, []);

  const {
    titleOne,
    titleTwo,
    titleThree,
    infOne,
    infTwo,
    infThree,
    btn,
  } = header;

  return (
    <section id="showcase" className="showcase">
      {mounted && (
        <div className="showcase__wrapper">
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}>
            {titleOne}
          </motion.p>
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}>
            {titleTwo}
          </motion.h2>
          <motion.h2
            className="faded"
            initial={{ y: "50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}>
            {titleThree}
          </motion.h2>
          <motion.p
            initial={{ y: "70%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 1.5 }}>
            {infOne} <br />
            {infTwo}
            <br /> {infThree}
          </motion.p>
          <motion.a
            href="#contact"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}>
            {btn}
          </motion.a>
        </div>
      )}
    </section>
  );
}

export default Showcase;
