import React from 'react';
import './App.css'; // Asigură-te că calea este corectă
import Navbar from './components/Navbar';
import Home from './components/Home';
import Test from './components/test'; // Importă componenta Test pentru fundalul animat
import About from './components/About';
import  Contact  from './components/Contact';

function App() {
  return (
    <>
      <Test />
      <Navbar />
      <Home />
      <About />
      <Contact />
    
    </>
  );
}

export default App;
