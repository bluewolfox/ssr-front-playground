import { Routes, Route, useParams } from "react-router-dom";
import Young from "./routes/Young";
import Home from "./routes/Home";
import React, { useState } from "react";
import data from "./routes/data.js";

function App() {
  let [test] = useState(data);
  let { id } = useParams();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Young test={data} />} />
        {/* <Route path="/2009" element={<Young2 />} />
        <Route path="/2019" element={<Young4 />} />
        <Route path="/2022" element={<Young5 />} /> */}
      </Routes>
    </div>
  );
}

export default App;
