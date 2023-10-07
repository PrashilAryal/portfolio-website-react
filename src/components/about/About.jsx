import React from "react";
import "./about.css";
import Me from "../../assets/my-pic-ps1.png";
import Frontend from "../../assets/frontend.png";
import Uiux from "../../assets/uiux.png";
import Backend from "../../assets/backend.png";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Me} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Prashil Aryal, dedicated and highly skilled Information
              Technology professional, having rich experience in website design
              and building and customization. I seek for a challenging
              environment where I can utilize my technical expertise,
              problem-solving abilities, and passion for innovation to
              contribute to the success in a dynamic world of Technology.
            </p>
            <a href="" className="btn">
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Frontend Development</h3>
                <span className="skills_number">
                  <i className="fa-solid fa-code"></i>
                </span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Backend Development</h3>
                <span className="skills_number">
                  <i className="fa-solid fa-database"></i>
                </span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX Design</h3>
                <span className="skills_number">
                  <i class="fa-regular fa-keyboard"></i>
                </span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
