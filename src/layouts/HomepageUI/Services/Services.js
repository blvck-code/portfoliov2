import React, { useEffect, useState } from "react";
import { servicesData } from "../../../data/data";
import Title from "../../../utils/Title/Title";
import "./style.css";

function Services() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  useEffect(() => {
    const options = { rootMargin: "-200px" };
    const services = document.querySelector("#services");
    const servicesWrapper = document.querySelector(".services__wrapper");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        setVisible(entry.isIntersecting);
      });
    }, options);

    const serviceObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        setVisible(entry.isIntersecting);
      });
    }, options);

    observer.observe(services);

    {
      visible && serviceObserver.observe(servicesWrapper);
    }
  }, [visible]);

  useEffect(() => {
    const services = document.querySelectorAll(".service__item");
    const options = { rootMargin: "-100px" };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("visible");
        setVisible2(entry.isIntersecting);
      });
    }, options);

    services.forEach((item) => {
      observer.observe(item);
    });
  }, [visible2]);

  const date = new Date();
  const year = date.getFullYear();

  const expe = year - 2016;

  return (
    <section id="services" className="services">
      {visible && (
        <>
          <Title
            title="Services &amp; Skills"
            subtitle={`${expe}+ years of experience`}
            theme="title2"
            category="services"
          />
        </>
      )}
      <div className="services__wrapper">
        {servicesData.map(({ icon, title, desc }, idx) => (
          <>
            <div
              style={{ transition: `all ${idx < 3 ? idx + 1 : idx - 2}s ease` }}
              className="service__item"
              key={idx}>
              <div className="title__animated">
                <h1>{title}</h1>
              </div>
              <div className="service__head">
                {icon}
                <h2>{title}</h2>
              </div>
              <p>{desc}</p>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}

export default Services;
