import React, { useContext } from "react";
import { ThemContext } from "../context/ThemeContext";

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemContext);

  const toggleThem = () => {
    setIsDark(!isDark);
  };
  return (
    <footer
      className="footer"
      style={{ backgroundColor: isDark ? "black" : "lightgray" }}
    >
      <button className="button" onClick={toggleThem}>
        Dark Mode
      </button>
    </footer>
  );
};

export default Footer;
