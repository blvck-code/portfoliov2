import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { IoIosMoon } from "react-icons/io";
import Title from "../../../utils/Title/Title";
import Responsive from "./Responsive/Responsive";
import { motion } from "framer-motion";
import Design from "./Design/Design";
import { myProjects, categories } from "../../../data/data";
import img1 from "../../../assets/imgs/proj1.jpg";
import img2 from "../../../assets/imgs/proj2.jpg";
import "./style.css";
import Optimize from "./Optimize/Optimize";

function Portfolio() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [category, setCatergory] = useState("");
  const [projects, setProjects] = useState(null);

  const currentProj = (e) => {
    const target = e.target.parentNode.parentNode;
    target.offsetTop = 0;
    console.log(target);
  };

  const displayProjects = (items) => {
    return items?.map(({ img, title, latest, categories, desc }, idx) => (
      <motion.div
        key={idx}
        className="project project__item"
        id="project"
        style={{
          transition: `all 2s ease`,
        }}>
        <div className="front">
          {latest ? <span>New</span> : ""}
          <img src={img} alt="Project Img" />
          <Link to="/">
            <h3>{title}</h3>
          </Link>
          <ul>
            {desc?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="background"></div>
        <div className="back">
          <p className="back-desc">
            A full stack all around, designer that may or may not include a
            guide. A full stack all around, designer that may or may not include
            a guide.
          </p>
          <div className="back-footer">
            <Link to="/">Visit Site</Link>
            <Link to="/">Source Code</Link>
          </div>
        </div>
      </motion.div>
    ));
  };

  useEffect(() => {
    setCatergory("all");
    setProjects(myProjects);
  }, []);

  // useEffect(() => {
  // }, [category]);

  useEffect(() => {
    const options = { rootMargin: "-150px" };
    const portfolio = document.querySelector("#portfolio");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        setVisible(entry.isIntersecting);
      });
    }, options);

    observer.observe(portfolio);
  }, [visible]);

  useEffect(() => {
    const options = { rootMargin: "-150px" };
    const wrapper = document.querySelector(".portfolio__wrapper");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        console.log(entry);
        setVisible2(entry.isIntersecting);
      });
    }, options);

    observer.observe(wrapper);
  }, [visible]);

  // const preloadImg = (img) => {
  //   const src = img.getAttribute("data-src");

  //   if (!src) {
  //     return;
  //   }
  //   img.src = src;
  // };

  useEffect(() => {
    const options = { rootMargin: "-150px" };
    const projects = document.querySelector(".projects");
    const project = projects.childNodes;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        console.log(entry);
        entry.target.classList.add("visible");
        // const img = entry.target.querySelector(".front").childNodes[1];
        // preloadImg(img);

        project.forEach((item) => {
          observer.unobserve(item);
        });
      });
    }, options);

    project.forEach((item) => {
      observer.observe(item);
    });
  }, [projects]);

  const date = new Date();
  const hour = date.getHours();
  const night = hour >= 16 || hour <= 7;

  const setActive = (e) => {
    document.querySelectorAll(".categry__item").forEach((item) => {
      item.classList.remove("active");

      e.target.classList.add("active");

      const category = e.target.dataset.id;
      setCatergory(category);

      const projectCategory = projects.filter((project) => {
        if (project.categories === category) {
          if (project.categories === category) {
            return project;
          }
        }
      });
      console.log("projectCategory", projectCategory);
      setProjects(projectCategory);
    });
  };

  return (
    <section id="portfolio" className="portfolio">
      {visible && (
        <Title
          title="See My Portfolio"
          theme="title"
          subtitle="meet my projects"
          category="projects"
        />
      )}
      <div className="portfolio__wrapper">
        <ul className="porfolio__categories">
          {categories.map(({ category, style, id }, idx) => (
            <>
              {visible2 && (
                <motion.li
                  initial={{ x: -40, y: -40, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: idx / 4 }}
                  onClick={(e) => setActive(e)}
                  data-id={id}
                  key={id}
                  className={`categry__item ${style}`}>
                  {category}
                </motion.li>
              )}
            </>
          ))}
        </ul>
        <div className="projects">
          {category === "all"
            ? displayProjects(myProjects)
            : displayProjects(myProjects)}
        </div>
      </div>
      <Optimize />
      {/* <Design /> */}
    </section>
  );
}

export default Portfolio;
