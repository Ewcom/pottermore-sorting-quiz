import { HomePage } from './pages/homepage/HomePage';
import { Questionary } from './pages/questionary/Questionary';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';
import { pointsContext } from './context/pointsContext'
import { Result } from './pages/result/Result';

function App() {


  //initializing context object for global access to the points 
  const [contextPoints, setContextPoints] = useState({
    gryffindorScore: 0,
    ravenclawScore: 0,
    hufflepuffScore: 0,
    slytherinScore: 0,
  })




  return (
    <pointsContext.Provider value={{ contextPoints, setContextPoints }}>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/questions" element={<Questionary />} />
          <Route path="/results" element={<Result />} />



        </Routes>
      </BrowserRouter>
    </pointsContext.Provider>
  )
}

export default App;
