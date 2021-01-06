import React from "react";
import "./style.css";

function Socials() {
  return (
    <div className="socials">
      <div className="socials__wrapper">
        <a href="">
          <i className="fa fa-github" />
        </a>
        <a href="">
          <i className="fa fa-linkedin" />
        </a>
        <a href="">
          <i className="fa fa-phone" />
        </a>
        <a href="">
          <i className="fa fa-instagram" />
        </a>
        <a href="">
          <i className="fa fa-twitter" />
        </a>
        <div className="line" />
      </div>
    </div>
  );
}

export default Socials;
