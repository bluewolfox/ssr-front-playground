import { useNavigate } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import logo from "../img/logo.gif";

function Home() {
  const [selects, setSelects] = useState();
  let navigate = useNavigate();
  const home = ["어", "디", "든", "문"];
  const homeList = home.map((homes, index) => (
    <button
      key={index}
      onClick={() => {
        navigate(`/${index}`);
      }}
    >
      {homes}
    </button>
  ));

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <select value={selects} onChange={(e) => setSelects(e.target.value)}>
        <option value="">골라주세요</option>
        <option value="2001">7살</option>
        <option value="2009">15살</option>
        <option value="2020">26살</option>
        <option value="2022">28살</option>
      </select>
      <hr />
      <p>{selects}</p>

      <>{homeList}</>

      {/* <button
        onClick={() => {
          navigate("/0");
        }}
      >
        어
      </button> */}
      {/* <button
        onClick={() => {
          navigate("/1");
        }}
      >
        디
      </button>
      <button
        onClick={() => {
          navigate("/2");
        }}
      >
        든
      </button>
      <button
        onClick={() => {
          navigate("/3");
        }}
      >
        문
      </button> */}
    </div>
  );
}

export default Home;
