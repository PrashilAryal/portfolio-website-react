import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://github.com/PrashilAryal"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/prashil-aryal-a24908199/"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a
        href="mailto: prashilaryal13@gmail.com"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-google"></i>
      </a>
      <a
        href="https://www.instagram.com/unalome_mbo/"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a
        href="https://www.facebook.com/prashil.aryal"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-facebook"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
