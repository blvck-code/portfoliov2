import React, { useEffect, useState } from "react";
import RightTitle from "../../../utils/RightTitle/RightTitle";
import Title from "../../../utils/Title/Title";
import { motion } from "framer-motion";
import "./style.css";

function Resume() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const options = { rootMargin: "-200px" };
    const resume = document.querySelector("#resume");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        setVisible(entry.isIntersecting);
      });
    }, options);

    observer.observe(resume);
  }, [visible]);

  useEffect(() => {
    const options = { rootMargin: "-100px" };
    const expeItem = document.querySelectorAll(".experience__item");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("visible");
      });
    }, options);

    expeItem.forEach((item) => {
      observer.observe(item);
    });
  }, []);

  const experience = [
    {
      id: "01",
      date: "2011 - 2014",
      job: "UI Designer",
      firm: "Google Corporation.",
      desc: `All you need to do, is 
      your best work together one 
      package works among seamlessly 
      in computer daily`,
    },
    {
      id: "02",
      date: "2011 - 2014",
      job: "UI Designer",
      firm: "Apple Production",
      desc: `All you need to do, is 
      your best work together one 
      package works among seamlessly 
      in computer daily`,
    },
    {
      id: "03",
      date: "2011 - 2014",
      job: "UI Designer",
      firm: "Leam Designer Music.",
      desc: `All you need to do, is 
      your best work together one 
      package works among seamlessly 
      in computer daily`,
    },
    {
      id: "01",
      date: "2011 - 2014",
      job: "UI Designer",
      firm: "Google Corporation.",
      desc: `All you need to do, is 
      your best work together one 
      package works among seamlessly 
      in computer daily`,
    },
    {
      id: "02",
      date: "2011 - 2014",
      job: "UI Designer",
      firm: "Apple Production",
      desc: `All you need to do, is 
      your best work together one 
      package works among seamlessly 
      in computer daily`,
    },
    {
      id: "03",
      date: "2011 - 2014",
      job: "UI Designer",
      firm: "Leam Designer Music.",
      desc: `All you need to do, is 
      your best work together one 
      package works among seamlessly 
      in computer daily`,
    },
  ];

  return (
    <section id="resume">
      {visible && (
        <>
          <Title
            theme="title"
            title="Experience &amp; Education"
            subtitle="45+ years of experience"
            category="resume"
          />
        </>
      )}
      <div className="experience" id="experience">
        {experience.map(({ id, date, job, firm, desc }, idx) => (
          <div
            key={idx}
            className="experience__item"
            style={{
              transition: `all ${idx < 3 ? idx + 1 : idx - 2}s ease`,
            }}>
            <span />
            <span />
            <span />
            <span />
            <h1 className="faded">{id}</h1>
            <h5>
              {date} <small>({job})</small>
            </h5>
            <h2>{firm}</h2>
            <p>{desc}</p>
            <span />
          </div>
        ))}
      </div>
      <div className="skills"></div>
    </section>
  );
}

export default Resume;
