import './App.css';
import React from 'react';
import Mainpage from './to_do_list/pages/mainpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './to_do_list/components/About';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Mainpage/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    </>
  );
}

export default App;
