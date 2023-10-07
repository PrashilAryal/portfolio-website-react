import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const [toggle, setMenu] = useState(false);
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav__logo">
          <span>P</span>
          <p>rashil.</p>
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav_item">
                <a href="#home" className="nav__link">
                  <i className="icon-home"></i>
                  <span className="tooltip-text">Home</span>
                </a>
              </li>

              <li className="nav_item">
                <a href="#about" className="nav__link">
                  <i className="icon-user-following"></i>
                  <span className="tooltip-text">About</span>
                </a>
              </li>

              <li className="nav_item">
                <a href="#services" className="nav__link">
                  <i className="icon-briefcase"></i>
                  <span className="tooltip-text">Services</span>
                </a>
              </li>

              <li className="nav_item">
                <a href="#resume" className="nav__link">
                  <i className="icon-graduation"></i>
                  <span className="tooltip-text">Resume</span>
                </a>
              </li>

              <li className="nav_item">
                <a href="#portfolio" className="nav__link">
                  <i className="icon-layers"></i>
                  <span className="tooltip-text">Portfolio</span>
                </a>
              </li>

              <li className="nav_item">
                <a href="#contact" className="nav__link">
                  <i className="icon-bubble"></i>
                  <span className="tooltip-text">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav_footer">
          <span className="copyright">&copy; 2022 - 2023.</span>
        </div>
      </aside>

      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => {
          setMenu(!toggle);
        }}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
