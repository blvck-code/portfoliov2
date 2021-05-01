import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import RightTitle from "../../../utils/RightTitle/RightTitle";
import Title from "../../../utils/Title/Title";
import "./style.css";
import { aboutData } from "../../../data/data";

function About() {
  const { aboutOne, aboutTwo, img, skills } = aboutData;

  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  useEffect(() => {
    const options = { rootMargin: "-200px" };
    const about = document.querySelector("#about");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        setVisible(entry.isIntersecting);
      });
    }, options);

    observer.observe(about);
  }, [visible]);

  useEffect(() => {
    const options = { rootMargin: "-150px" };
    const aboutIntro = document.querySelectorAll(".about__intro");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("visible");
        // setVisible2(entry.isIntersecting);
      });
    }, options);

    aboutIntro.forEach((item) => {
      observer.observe(item);
    });
  }, [visible]);

  useEffect(() => {
    const options = { rootMargin: "-200px" };
    const aboutImg = document.querySelector(".about__img");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("visible");
        setVisible2(entry.isIntersecting);
      });
    }, options);

    observer.observe(aboutImg);
  }, [visible]);

  useEffect(() => {
    const options = { rootMargin: "-100px" };
    const skillItem = document.querySelectorAll(".skill__item");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("visible");
      });
    }, options);

    skillItem.forEach((item) => {
      observer.observe(item);
    });

    // observer.observe(skillItems);
  }, []);

  return (
    <>
      <section id="about" className="about">
        {visible && (
          <>
            <Title
              title="About Myself"
              subtitle="basic info about me"
              theme="title2"
              category="About"
              section="#about"
            />
          </>
        )}
        <div className="about__wrapper">
          <div className="about__info">
            <div className="about__detail">
              <p className="about__intro">{aboutOne}</p>
              <p className="about__intro">{aboutTwo}</p>
              <p className="about__intro">
                During my four years in{" "}
                <a href="https://www.ttu.ac.ke/" target="_blank">
                  Taita Taveta University
                </a>
                , I gained alot of interest in programming and spent most of my
                time reading programming materials and watching tutorials which
                has equipped me with lots of skills that i have used to work on
                a wide variety of interesting and meaningful projects on a daily
                basis.
              </p>
            </div>
          </div>
          <div className="about__img">
            {visible2 && (
              <motion.div
                className="img__border"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}>
                <motion.img
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 1.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                  src={img}
                  alt="oluoch pic"
                />
              </motion.div>
            )}
          </div>
        </div>

        <div className="about__stats">
          {skills?.map(({ name, percent }, idx) => (
            <motion.div key={idx} className="skill__item">
              <div className="skill__title">
                <span className="skill__name">{name}</span>
                <span className="skill_percent">{percent}%</span>
              </div>
              <div className="progress">
                <span
                  className="progress__bar"
                  style={{ width: `${percent}%` }}></span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;
