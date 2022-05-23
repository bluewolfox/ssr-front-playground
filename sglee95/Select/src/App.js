import { Routes, Route} from 'react-router-dom';
import Young1 from './routes/Young1';
import Young2 from './routes/Young2';
import Young3 from './routes/Young3';
import Young4 from './routes/Young4';
import Young5 from './routes/Young5';
import Home from './routes/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/2001" element={ <Young1/>} />
        <Route path="/2009" element={ <Young2/> } />
        <Route path="/2017" element={ <Young3/> } />
        <Route path="/2019" element={ <Young4/> } />
        <Route path="/2022" element={ <Young5/> } />
      </Routes>
    
    </div>
  );
}

export default App;
