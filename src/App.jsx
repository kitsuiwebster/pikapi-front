import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import AppWrapper from './AppWrapper';
import { ThemeProvider } from './ThemeContext';
import UnderConstruction from './pages/UnderConstruction';
import About from './pages/About';
import Pikadex from './pages/Pikadex';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <ThemeProvider>
          <Routes>
            <Route path="/" element={<Layout><AppWrapper><Home /></AppWrapper></Layout>} />
            <Route path="/about" element={<Layout><AppWrapper><About /></AppWrapper></Layout>} />
            <Route path="/broken" element={<Layout><AppWrapper><UnderConstruction /></AppWrapper></Layout>} />
            <Route path="/pikadex" element={<Layout><AppWrapper><Pikadex /></AppWrapper></Layout>} />
            <Route path="/*" element={<Layout><AppWrapper><NotFound /></AppWrapper></Layout>} />
            <Route path="/contact" element={<Layout><AppWrapper><Contact /></AppWrapper></Layout>} />
          </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
