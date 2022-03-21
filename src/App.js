import React from 'react';
import 'bulma/css/bulma.min.css';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Projects from './components/Projects';
// import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Nav />
      <main>
          <Hero />
          <About />
          <Projects />        
      </main>
      <Contact />
    </div>
    
  );
}

export default App;
