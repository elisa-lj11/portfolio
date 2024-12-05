// src/components/PageTemplate.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/style/PageTemplate.css'; // Import the CSS file

// Texture from galaxy model: https://skfb.ly/pr8Kx 
import galaxyImageUrl from '../assets/images/galaxy.png';

// Custom cursor asset generated with ChatGPT
import rocketCursor from '../assets/images/rocketship-cursor.png';

const PageTemplate = ({ refs, setRefs, children, generateRefsFromDOM }) => {
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [selectedSection, setSelectedSection] = useState(''); // To keep track of the selected section
  const [jumpScroll, setJumpScroll] = useState(false); // Track if a scroll is manual

  useEffect(() => {
    // Set custom cursor after the component has mounted
    document.body.style.cursor = `url(${rocketCursor}), auto`;

    // Cleanup function to reset the cursor when the component unmounts
    return () => {
      document.body.style.cursor = `url(${rocketCursor}), auto`;
    };
  }, []);

  const projectName = window.location.hash.split('#/')[1].split('#')[0];

  const goHome = () => {
    navigate('/'); // Navigate to the home page
  };

  // Function to search DOM for div elements and generate refs array
  const generateRefsFromDOMInternal = () => {
    const divs = document.querySelectorAll('div.section'); // Select all div section elements
    const newRefs = Array.from(divs).map((div) => {
      const h2 = div.querySelector('h2');
      return {
        id: div.id,
        label: h2 ? h2.textContent : div.id // Use h2 text if available, otherwise use the div id
      };
    });
    setRefs(newRefs); // Update refs
  };

  useEffect(() => {
    if (generateRefsFromDOM) {
      generateRefsFromDOM(generateRefsFromDOMInternal); // Call internal function
    }
    // Empty dependency array ensures this effect runs only on mount
  }, []);

  const scrollToSection = (targetId) => {
    const targetElement = document.getElementById(targetId); // Get the element to scroll to

    if (targetElement) {
      setJumpScroll(true); // Set flag before scroll starts

      // Scroll and update hash without delay
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `${process.env.PUBLIC_PATH}#/${projectName}#${targetId}`);
      setSelectedSection(targetId);

      // Reset manual scroll flag after a delay
      setTimeout(() => setJumpScroll(false), 800);
    } else {
      // If target section doesn't exist, redirect to the base project URL
      window.history.replaceState(null, '', `${process.env.PUBLIC_PATH}#/${projectName}`);
    }
  };

  // Handle scroll action from dropdown
  const handleScroll = (event) => {
    const targetId = event.target.value; // Get the selected value from the dropdown
    if (targetId) {
      scrollToSection(targetId);
    }
  };

  // Use IntersectionObserver to track section visibility
  useEffect(() => {
    const observerOptions = {
      root: null, // Observe within the viewport
      rootMargin: '0px 0px -10% 0px', // Start detecting sections when they are entering the viewport
      threshold: [0.1], // Trigger when 10% of the section is visible
    };

    const observerCallback = (entries) => {
      const visibleSections = entries.filter((entry) => entry.isIntersecting);
      if (visibleSections.length > 0) {
        // If at least one section is visible, set the selected section
        const visibleSection = visibleSections[0].target.id;
        setSelectedSection(visibleSection);
        window.history.replaceState(null, '', `${process.env.PUBLIC_PATH}#/${projectName}#${visibleSection}`); // Update the URL hash
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section (the refs should correspond to section headers)
    refs.forEach((ref) => {
      const section = document.getElementById(ref.id);
      if (section) observer.observe(section);
    });

    // Clean up the observer when the component unmounts
    return () => {
      refs.forEach((ref) => {
        const section = document.getElementById(ref.id);
        if (section) {
          observer.unobserve(section);
        }
      });

      // Clean up the observer on component unmount
      observer.disconnect();
    };
  }, [refs, jumpScroll]);

  // Effect to handle initial scrolling based on the URL
  useEffect(() => {
    const targetId = window.location.hash.split('#').pop(); // Extract the target ID from the hash
    if (targetId) {
      scrollToSection(targetId); // Scroll to the section if found
    }
  }, []);

  return (
    /* Set custom cursor here when page loads quicker than previous page unload/cleanup */
    <div className="page-template" style={{ cursor: `url(${rocketCursor}), auto` }}>
      {/* Set header z-index to 200 to hide node labels that don't clear quickly enough */}
      <header style={{ zIndex: "200" }}>
        <button className="home" onClick={goHome}>
          &lt;
          <img src={galaxyImageUrl} className="galaxy-image" width="40px"/>
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
      <main>
        <div className="content">
          {children} {/* This is where the specific page content will be rendered */}
        </div>
      </main>
      <footer>
        {/* Add footer elements here if needed */}
      </footer>
    </div>
  );
};

export default PageTemplate;
