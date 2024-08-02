import React from 'react';
import './App.css'; // Asigură-te că calea este corectă
import Navbar from './components/Navbar';
import Home from './components/Home';
import Test from './components/test'; // Importă componenta Test pentru fundalul animat
import About from './components/About';
import  Contact  from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Test />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    
    </>
  );
}

export default App;
