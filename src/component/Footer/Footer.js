import React, { useEffect } from "react";
import "./style.css";
import logo from "../../assets/imgs/logo.jpg";

function Footer() {
  const year = new Date().getFullYear();
  const texts = [
    "you code like a pro, you become a pro.",
    "geniouses are not born, they are self-made",
    "imagination is greater than knowledge",
    "do more",
  ];

  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  useEffect(() => {
    (function type() {
      if (count === texts.length) {
        count = 0;
      }

      currentText = texts[count];
      letter = currentText.slice(0, ++index);

      const motives = document.querySelector(".motives");

      if (motives !== null) {
        motives.textContent = letter;
      }
      if (letter.length === currentText.length) {
        count++;
        index = 0;
      }

      setTimeout(type, 300);
    })();
  }, []);

  useEffect(() => {
    const footer = document.querySelector(".footer__wrapper");
    const options = { rootMargin: "-50px" };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("visible");
      });
    }, options);

    observer.observe(footer);
  }, []);

  return (
    <footer id="footer">
      <div className="footer__wrapper">
        <div className="footer__logo">
          <img src={logo} alt="Oluoch" />
          {/* <h5><span>O</span>louch</h5> */}
        </div>
        <p>&copy;{year}, Design and Built by Oluoch Maurice Brian.</p>
        <small className="motives"></small>
      </div>
    </footer>
  );
}

export default Footer;
