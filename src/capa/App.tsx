import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/home/home'
import Exercese1PAge from './pages/exerceses/exerceses1/exerceses1';
import Exercese2Page from './pages/exerceses/exerceses2/exerceses2';
import Exercese3Page from './pages/exerceses/exerceses3/exerceses3';
import Exercese4Page from './pages/exerceses/exerceses4/exerceses4';

import "./App.css"


function App() {
  return (
    <div className='home'>
      <div className='home-center'>
      <Routes>
        <Route path='/' element={ <Homepage />}/>
        <Route path='exercise1' element={ <Exercese1PAge />} />
        <Route path='exercise2' element={ <Exercese2Page />} />
        <Route path='exercise3' element={ <Exercese3Page/>} />
        <Route path='exercise4' element={ <Exercese4Page/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
