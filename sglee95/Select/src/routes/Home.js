import { useNavigate } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";

import logo from "../img/logo.gif";

function Home() {
  const [selects, setSelects] = useState();
  let navigate = useNavigate();
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <select value={selects} onChange={(e) => setSelects(e.target.value)}>
        <option value="2001">7살</option>
        <option value="2009">15살</option>
        <option value="2019">26살</option>
        <option value="2019">28살</option>

        {/* <button
          onClick={() => {
            alert(selects);
                   }}
         >
          Submit
        </button> */}
        {/* {
        setSelects === 1
        === 1
      ?         <button onClick={({...selects})=>{navigate('/about')}}>클릭</button>
    : null
      }
       </select>
      <hr />
      <p>{selects}</p>
      { {selects} === 2
        ?         <button onClick={({...selects})=>{navigate('/해피')}}>클릭</button>
      : null
      } */}
      </select>
      <hr />
      <p>{selects}</p>
      <button
        onClick={() => {
          navigate("/0");
        }}
      >
        어
      </button>
      <button
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
      </button>
    </div>
  );
}

export default Home;
