import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { IoIosMoon } from "react-icons/io";
import Title from "../../../utils/Title/Title";
import Responsive from "./Responsive/Responsive";
import { motion } from "framer-motion";
import Design from "./Design/Design";
import { myProjects, categories } from "../../../data/data";
import "./style.css";
import Optimize from "./Optimize/Optimize";
import porfolioV2 from "../../../assets/portfolio/porfolio-v2.jpg";

function Portfolio() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [category, setCatergory] = useState("");
  const [projects, setProjects] = useState(null);

  const displayProjects = (items) => {
    return items?.map(
      (
        { image, title, latest, tools, categories, desc, github, link },
        idx
      ) => (
        <motion.div
          key={idx}
          className="project project__item"
          id="project"
          style={{
            transition: `all 2s ease`,
            // animationDelay: `${idx}s`,
          }}>
          <div className="front">
            {latest ? <span>New</span> : ""}
            <img src={image || porfolioV2} alt={title} />
            <small>{idx + 1}</small>
            {link ? (
              <a href={link} target="_blank">
                <h3>{title}</h3>
              </a>
            ) : (
              <h3>{title}</h3>
            )}

            <ul>
              {tools?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="background"></div>
          <div className="back">
            <p className="back-desc">{desc}</p>
            <div className="back-footer">
              {link && (
                <a href={link} target="_blank">
                  Visit {title}
                </a>
              )}
              {github && (
                <a href={github} target="_blank">
                  Source Code
                </a>
              )}
            </div>
          </div>
        </motion.div>
      )
    );
  };

  useEffect(() => {
    setCatergory("all");
    setProjects(myProjects);
  }, []);

  // useEffect(() => {
  // }, [category]);

  // let hotel = myProjects.filter((project) => {
  //   let cat = project?.category;
  //   cat.filter((item) => {
  //     // console.log(item.toLowerCase());
  //     if (item.toLowerCase() === category) {
  //       return item;
  //     }
  //   });
  // });
  // console.log(hotel);

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
        setVisible2(entry.isIntersecting);
      });
    }, options);

    observer.observe(wrapper);
  }, [visible]);

  const preloadImg = (img) => {
    const src = img.getAttribute("data-src");

    if (!src) {
      return;
    }
    img.src = src;
  };

  useEffect(() => {
    const options = { rootMargin: "-150px" };
    const projects = document.querySelector(".projects");
    const project = projects.childNodes;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("visible");
        const img = entry.target.querySelector(".front").childNodes[1];
        preloadImg(img);

        // project.forEach((item) => {
        //   observer.unobserve(item);
        // });
      });
    }, options);

    project.forEach((item) => {
      observer.observe(item);
    });
  }, [projects, category]);

  const date = new Date();
  const hour = date.getHours();
  const night = hour >= 16 || hour <= 7;

  const setActive = (e) => {
    document.querySelectorAll(".categry__item").forEach((item) => {
      item.classList.remove("active");

      e.target.classList.add("active");

      const category = e.target.dataset.id;
      setCatergory(category);

      // console.log(category);

      const projectCategory = projects.map((project) => {
        if (project.categories === category) {
          if (project.categories === category) {
            console.log(project);
          }
        }
      });
      return projectCategory;
      // console.log("projectCategory", projectCategory);
      // setProjects(projectCategory);
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
            : displayProjects(
                myProjects.filter(
                  (project) => project?.category.toLowerCase() === category
                  //  {
                  //   let cat = project?.category;
                  //   cat.map((item) => {
                  //     if (item.toLowerCase() === category) {
                  //       return project;
                  //     }
                  //   });
                  // }
                )
              )}
        </div>
      </div>
      <Optimize />
      <Design />
    </section>
  );
}

export default Portfolio;
