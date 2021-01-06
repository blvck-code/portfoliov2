import React, { useEffect } from "react";
import { FaBolt, FaFileArchive } from "react-icons/fa";
import "./style.css";

function Optimize() {
  const optimize = [
    {
      percent: 96,
      desc: "page speed score",
    },
    {
      percent: 93,
      desc: "YSlow score",
    },
    {
      percent: 89,
      desc: "faster than",
    },
  ];

  const optimize2 = [
    {
      icon: <FaFileArchive />,
      title: "Optimized image sizes",
    },
    {
      icon: <FaBolt />,
      title: "Lazy loading images",
    },
    {
      icon: <FaBolt />,
      title: "Small component sizes(less than 20kb)",
    },
    {
      icon: <FaBolt />,
      title: "Less import of 3rd party libraries",
    },
  ];

  return (
    <div className="optimize">
      <div className="optimize__wrapper">
        <div className="optimize__title">
          <h2>
            Optimized for fast
            <br />
            loading speed.
          </h2>
          <p>
            All my sites are{" "}
            <span>optimized to be fast &amp; highly perfomant </span>by having a
            good structure and well-written code.
          </p>
          <div className="optimize__percents">
            {optimize.map(({ percent, desc }, idx) => (
              <div key={idx} className="optimize__percent">
                <h1>
                  {percent}
                  <span>%</span>
                </h1>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="optimize__info">
          {optimize2.map(({ icon, title }, idx) => (
            <div className="optimize__item">
              {icon}
              <h4>{title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Optimize;
