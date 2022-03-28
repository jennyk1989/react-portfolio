import React from 'react';
import 'bulma/css/bulma.min.css';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Header from './components/Header';
import Projects from './components/Projects';
// import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Header />
      <main>
          <Hero />
          <About />
          <Projects />        
      </main>
      <Footer />
    </div>
    
  );
}

export default App;
