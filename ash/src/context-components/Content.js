import React, { useContext } from "react";
import { ThemContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

const Content = () => {
  const { isDark } = useContext(ThemContext);
  const user = useContext(UserContext);

  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <p>hi! {user}</p>
    </div>
  );
};

export default Content;
