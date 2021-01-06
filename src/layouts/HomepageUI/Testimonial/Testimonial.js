import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import RightTitle from "../../../utils/RightTitle/RightTitle";
import Title from "../../../utils/Title/Title";
import "./style.css";

function Testimonial() {
  const [visible, setVisible] = useState(false);
  let history = useHistory();

  useEffect(() => {
    const options = { threshold: 0.2 };
    const testimony = document.querySelector("#testimonial");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        setVisible(entry.isIntersecting);
        observer.unobserve(entry.target);
      });
    }, options);

    observer.observe(testimony);
  }, [visible]);

  return (
    <section id="testimonial" className="testimonial">
      {/* <RightTitle title="testimonies" /> */}
      <Title
        theme="title2"
        title="Client Testimonials"
        subtitle="my clients love my work"
        category="testimonies"
      />
      <h1>Testimonial Here</h1>
    </section>
  );
}

export default Testimonial;
