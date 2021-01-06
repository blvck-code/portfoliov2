import React, { useEffect } from "react";
import "./style.css";

function Preloader() {
  useEffect(() => {
    let count = 0;
    let counter = setInterval(() => {
      if (count < 101) {
        let preloader = document.querySelector(".count");
        let loader = document.querySelector(".loader");
        if (preloader) {
          preloader.textContent = count + "%";
          loader.style.width = count + "%";
        } else {
          return;
        }
        // .innerHTML(count + "%");
        console.log(preloader);
        count++;
      } else {
        clearInterval(counter);
      }
    }, 28);
  }, []);
  return (
    <div className="preloader">
      <div className="loader" />
      <div className="count" />
    </div>
  );
}

export default Preloader;
