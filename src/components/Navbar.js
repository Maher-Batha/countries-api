import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { CountriesContext } from "../context/CountriesContext";

const Navbar = () => {
  const { theme, changeTheme } = useContext(CountriesContext);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h1>where in the world?</h1>
        </div>
        <button className="toggle-theme" onClick={changeTheme}>
          {theme ? <FaSun /> : <FaMoon />}
          {theme ? "light" : "dark"} mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
