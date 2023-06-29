import React from "react";
import "./Footer.scss";
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import linkedinIcon from "../../assets/linkedin.svg";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <h2>
          <a className="main-link" href="#s">
            LEGEND.CO
          </a>
        </h2>

        <div className="rsss">
          <a
            href="https://www.facebook.com/ireyes7"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebookIcon} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/ireyescarlos/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon} alt="" />
          </a>
          <a
            href="https://instagram.com/itl7?igshid=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramIcon} alt="" />
          </a>
        </div>
        <div className="routing">
          <a href="#s">CONTACT</a>
          <a href="#s">FAQ</a>
          <a href="#s">BLOG</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
