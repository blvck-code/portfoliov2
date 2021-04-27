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
      date: "2020 - PRESENT",
      job: "Backend Dev",
      firm: "Upwork",
      desc: `Worked with my campus 
      collegue where my main role 
      was creating Restful APIs for 
      the frontend.`,
    },
    {
      id: "02",
      date: "2018 - 2020",
      job: "Attachee",
      firm: "Siaya District Hospital",
      desc: `Worked with other attachee in 
      the ICT department where most of the roles
      were networking & troubleshooting computers.
      `,
    },
    {
      id: "03",
      date: "2017 - 2019",
      job: "Frontend Dev",
      firm: "Upwork",
      desc: `I worked independently where i built 
      frontend for my Upwork clients mainly with 
      React.js, HTML, SASS & Vanilla js.`,
    },
    {
      id: "04",
      date: "2016 - 2020",
      job: "Photographer",
      firm: "Taita Taveta University.",
      desc: `I was a photographer back in campus 
      which was my main hustle as a student.`,
    },
    {
      id: "05",
      date: "2016 - 2018",
      job: "Freelancer",
      firm: "Upwork.",
      desc: `Worked as a part-time freelancer where 
      i did assignments and homework for for Upwork 
      clients.`,
    },
  ];

  const date = new Date();
  const year = date.getFullYear();

  const expe = year - 2016;

  return (
    <section id="resume">
      {visible && (
        <>
          <Title
            theme="title"
            title="Experience &amp; Education"
            subtitle={`${expe}+ years of experience`}
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
