import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [nameActive, setNameActive] = useState(true);
  const [cityActive, setCityActive] = useState(false);

  const nameActiveHandler = () => {
    setNameActive(true);
    setCityActive(false);
  };

  const cityActiveHandler = () => {
    setCityActive(true);
    setNameActive(false);
  };
  return (
    <nav>
      <ul>
        <Link to="/">
          <li
            onClick={nameActiveHandler}
            className={nameActive ? "nav-active" : ""}
          >
            Name
          </li>
        </Link>
        <Link to="/city">
          <li
            onClick={cityActiveHandler}
            className={cityActive ? "nav-active" : ""}
          >
            City
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
