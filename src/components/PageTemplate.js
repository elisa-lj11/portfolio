// src/components/PageTemplate.js
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/style/PageTemplate.css'; // Import the CSS file

// Texture from galaxy model: https://skfb.ly/pr8Kx
import galaxyImageUrl from '../assets/images/galaxy.png';

// Custom cursor asset generated with ChatGPT
import rocketCursor from '../assets/images/rocketship-cursor.png';

const PageTemplate = ({ refs, setRefs, children, generateRefsFromDOM }) => {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState('');
  const [jumpScroll, setJumpScroll] = useState(false);
  const progressBarRef = useRef(null);
  const mainRef = useRef(null);

  const projectName = window.location.hash.split('#/')[1].split('#')[0];

  const goHome = () => {
    navigate('/');
  };

  // Function to search DOM for div elements and generate refs array
  const generateRefsFromDOMInternal = () => {
    const divs = document.querySelectorAll('div.section');
    const newRefs = Array.from(divs).map((div) => {
      const h2 = div.querySelector('h2');
      return {
        id: div.id,
        label: h2 ? h2.textContent : div.id
      };
    });
    setRefs(newRefs);
  };

  useEffect(() => {
    if (generateRefsFromDOM) {
      generateRefsFromDOM(generateRefsFromDOMInternal);
    }
  }, []);

  // Reading progress bar
  useEffect(() => {
    const mainEl = mainRef.current;
    if (!mainEl || !progressBarRef.current) return;

    const updateProgress = () => {
      const scrollTop = mainEl.scrollTop;
      const scrollHeight = mainEl.scrollHeight - mainEl.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      progressBarRef.current.style.width = `${progress}%`;
    };

    mainEl.addEventListener('scroll', updateProgress, { passive: true });
    return () => mainEl.removeEventListener('scroll', updateProgress);
  }, []);

  // Scroll-triggered section visibility animations
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    if (!sections.length) return;

    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        root: mainRef.current,
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.05,
      }
    );

    sections.forEach((section) => visibilityObserver.observe(section));

    return () => visibilityObserver.disconnect();
  }, [refs]);

  const scrollToSection = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      setJumpScroll(true);

      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `${process.env.PUBLIC_PATH}#/${projectName}#${targetId}`);
      setSelectedSection(targetId);

      setTimeout(() => setJumpScroll(false), 800);
    } else {
      window.history.replaceState(null, '', `${process.env.PUBLIC_PATH}#/${projectName}`);
    }
  };

  const handleScroll = (event) => {
    const targetId = event.target.value;
    if (targetId) {
      scrollToSection(targetId);
    }
  };

  // IntersectionObserver for dropdown section tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: [0.1],
    };

    const observerCallback = (entries) => {
      const visibleSections = entries.filter((entry) => entry.isIntersecting);
      if (visibleSections.length > 0) {
        const visibleSection = visibleSections[0].target.id;
        setSelectedSection(visibleSection);
        window.history.replaceState(null, '', `${process.env.PUBLIC_PATH}#/${projectName}#${visibleSection}`);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    refs.forEach((ref) => {
      const section = document.getElementById(ref.id);
      if (section) observer.observe(section);
    });

    return () => {
      refs.forEach((ref) => {
        const section = document.getElementById(ref.id);
        if (section) observer.unobserve(section);
      });
      observer.disconnect();
    };
  }, [refs, jumpScroll]);

  // Handle initial scrolling based on URL
  useEffect(() => {
    const targetId = window.location.hash.split('#').pop();
    if (targetId) {
      scrollToSection(targetId);
    }
  }, []);

  return (
    <div className="page-template" style={{ cursor: `url(${rocketCursor}), auto` }}>
      <header>
        <button className="home" onClick={goHome}>
          &lt;
          <img src={galaxyImageUrl} className="galaxy-image" width="40px" alt="galaxy" />
          <span>Go back to space</span>
        </button>
        <div className="dropdown">
          <select onChange={handleScroll} value={selectedSection || ""}>
            <option value="" disabled>Warp to a section</option>
            {refs.map((ref) => (
              <option key={ref.id} value={ref.id}>
                {ref.label}
              </option>
            ))}
          </select>
        </div>
      </header>
      <div className="progress-bar" ref={progressBarRef}></div>
      <main ref={mainRef}>
        <div className="content">
          {children}
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
};

export default PageTemplate;
