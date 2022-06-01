import { Routes, Route } from 'react-router-dom';
// import Young from './routes/Young';
// import Home from './routes/Home';
import Young from './routes/Young_';
import Home from './routes/Home_';
import React from 'react';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Young />} />
        {/* <Route path="/2009" element={<Young2 />} />
        <Route path="/2019" element={<Young4 />} />
        <Route path="/2022" element={<Young5 />} /> */}
      </Routes>
    </div>
  );
}

export default App;
