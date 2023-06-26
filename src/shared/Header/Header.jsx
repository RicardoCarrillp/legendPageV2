import React from "react";
import "./Header.scss"

const Header = () => {
  return (
    <>
      <div className="nav-container">
        <ul>
          <li>
            <a className="my-tag" href="#s">
              WORK
            </a>
          </li>
          <li>
            <a className="my-tag" href="#s">
              SPACE
            </a>
          </li>
          <li>
            <a className="my-tag" href="#s">
              ABOUT
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
