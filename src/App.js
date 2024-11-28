// src/App.js
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Strivr from './pages/Strivr';
import Spaceship from './pages/Spaceship';
import LocalHive from './pages/LocalHive';
import HiFi from './pages/HiFi';
import OrgASMR from './pages/OrgASMR';
import Window from './pages/Window';
import ImmersiveMedia from './pages/ImmersiveMedia';

import WhoAmI from './pages/WhoAmI';
import Accessible from './pages/Accessible';
import NotFound from './pages/NotFound';

import './assets/style/fonts.css';

const App = () => {
  useEffect(() => {
    // Decode hash manually only if required
    const initialHash = window.location.hash;

    try {
      const decodedHash = decodeURIComponent(initialHash);
      if (decodedHash !== initialHash) {
        window.location.hash = decodedHash;
      }
    } catch (e) {
      if (process.env.IS_DEVELOPMENT) console.error("Error decoding hash: ", e);
      window.location.hash = initialHash;
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Update node map in OrbitingNodes.js with new routes */}
          <Route path="/" element={< Home />} />
          <Route path="/strivr" element={< Strivr />} />
          <Route path="/spaceship" element={< Spaceship />} />
          <Route path="/local-hive" element={< LocalHive />} />
          <Route path="/hifi" element={< HiFi />} />
          <Route path="/orgasmr" element={< OrgASMR />} />
          <Route path="/window" element={< Window />} />
          <Route path="/immersive-media" element={< ImmersiveMedia />} />
          {/* About Me page */}
          <Route path="/who-am-i" element={< WhoAmI />} />
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
