import React, { useEffect } from "react";
import logo from "../../assets/imgs/logo.jpg";
import "./style.css";

const Scroll = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = document.querySelector(".scroll");
      let height = window.scrollY;

      if (height > 200) {
        scroll.classList.add("visible");
      } else {
        scroll.classList.remove("visible");
      }
    });
  }, []);
  return (
    <a href="#showcase">
      <div className="scroll">
        <img src={logo} alt="logo" />
      </div>
    </a>
  );
};

export default Scroll;
