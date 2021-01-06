import React from "react";
import img from "../../assets/imgs/proj2.jpg";
import "./style.css";

function Modal() {
  return (
    <div className="modal">
      <div className="img__modal">
        <img src={img} alt="" />
        <div className="img__info"></div>
      </div>
    </div>
  );
}

export default Modal;
