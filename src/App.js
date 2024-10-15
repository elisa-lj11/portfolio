// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Strivr from './pages/Strivr';
import LocalHive from './pages/LocalHive';
import OrgASMR from './pages/OrgASMR';
import HiFi from './pages/HiFi';
import RVVR from './pages/RVVR';
import LucidDreaming from './pages/LucidDreaming';
import Accessible from './pages/Accessible';
import NotFound from './pages/NotFound';

import './assets/style/fonts.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Update node map in OrbitingNodes.js with new routes */}
          <Route path="/" element={< Home />} />
          <Route path="/strivr" element={< Strivr />} />
          <Route path="/local-hive" element={< LocalHive />} />
          <Route path="/orgasmr" element={< OrgASMR />} />
          <Route path="/hifi" element={< HiFi />} />
          <Route path="/rv-vr" element={< RVVR />} />
          <Route path="/lucid-dreaming" element={< LucidDreaming />} />
          {/* Accessibility page */}
          <Route path="/accessible" element={< Accessible />} />
          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
