import React from "react";
import "./style.css";

function Socials() {
  return (
    <div className="socials">
      <div className="socials__wrapper">
        <a
          href="https://github.com/blvck-code"
          target="_blank"
          className="fa fa-github"></a>
        <a
          href="https://www.linkedin.com/in/maurice-brian-oluoch-ba1269121/"
          target="_blank"
          className="fa fa-linkedin"
        />
        <a href="tel:+254795772333" className="fa fa-phone" />
        <a
          href="https://www.instagram.com/oluoch_jnr/"
          target="_blank"
          className="fa fa-instagram"
        />
        <a
          href="https://twitter.com/blvck_code"
          target="_blank"
          className="fa fa-twitter"
        />
        <div className="line" />
      </div>
    </div>
  );
}

export default Socials;
