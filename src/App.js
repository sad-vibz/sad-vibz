import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUser, faPhone } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icons
import './App.css';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="header-title">
            {Array.from('Welcome to My Portfolio').map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="/projects">
                  <FontAwesomeIcon icon={faBook} style={{ marginRight: '8px' }} />
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px' }} />
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <FontAwesomeIcon icon={faPhone} style={{ marginRight: '8px' }} />
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/projects" element={<ScrollToSection id="projects"><Projects /></ScrollToSection>} />
            <Route path="/about" element={<ScrollToSection id="about"><About /></ScrollToSection>} />
            <Route path="/contact" element={<ScrollToSection id="contact"><Contact /></ScrollToSection>} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

function ScrollToSection({ id, children }) {
  const location = useLocation();

  useEffect(() => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return <>{children}</>;
}

export default App;
