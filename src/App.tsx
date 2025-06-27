import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeAbout from './components/HomeAbout';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initGA } from './utils/analytics';

const App: React.FC = () => {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <HomeAbout />
                <Gallery />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as we create more components */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
