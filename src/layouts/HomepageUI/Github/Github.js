import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RightTitle from "../../../utils/RightTitle/RightTitle";
import Title from "../../../utils/Title/Title";
import "./style.css";
import img from "../../../assets/imgs/user.jpg";
import { githubUser, githubRepos } from "../../../data/github";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
import ChartComponent from "./ExampleChart";
import Pie3d from "./Pie3d";

function Github() {
  const [visible, setVisible] = useState(false);
  const {
    avatar_url,
    html_url,
    name,
    company,
    bio,
    location,
    twitter_username,
    blog,
  } = githubUser;

  let languages = githubRepos.reduce((total, item) => {
    const { language } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1 };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      };
    }
    return total;
  }, {});

  languages = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  // console.log(languages);

  const chartData = [
    {
      label: "HTML",
      value: "13",
    },
    {
      label: "CSS",
      value: "160",
    },
    {
      label: "JavaScript",
      value: "80",
    },
    {
      label: "US",
      value: "30",
    },
    {
      label: "China",
      value: "30",
    },
  ];
  useEffect(() => {
    const options = { threshold: 0.2 };
    const github = document.querySelector("#github");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        setVisible(entry.isIntersecting);
        observer.unobserve(entry.target);
      });
    }, options);

    observer.observe(github);
  }, [visible]);

  return (
    <section id="github" className="github">
      {/* <RightTitle title="github" /> */}
      <Title
        title="Github Stats"
        subtitle="what github says about me"
        theme="title"
        category="Github"
      />
      <div className="github__wrapper">
        <article className="github__user">
          <div className="github__header">
            <img src={img} alt={name} />
            <div className="github__info">
              <h4>{name}</h4>
              <Link to="/">
                <p>@{twitter_username}</p>
              </Link>
            </div>
            <a
              href={html_url}
              target="_blank"
              className="fancy-btn"
              href={html_url}>
              follow
            </a>
          </div>
          <p className="github__bio">{bio}</p>
          <div className="github__links">
            <p>
              <MdBusiness />
              {company}
            </p>
            <p>
              <MdLocationOn />
              {location}
            </p>
            <a className="fancy-link" href={blog} target="_blank">
              <MdLink />
              {blog}
            </a>
          </div>
        </article>
        <div className="github__repos">
          <div className="github__donut">
            <Pie3d data={languages} />
          </div>
        </div>
        <div className="github__footer">
          <div className="github__chart">
            <ChartComponent data={languages} />
          </div>
          <div className="github__bar"></div>
        </div>
      </div>
    </section>
  );
}

export default Github;
