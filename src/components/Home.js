// src/components/Home.js
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';
import { useNavigate } from 'react-router-dom';
import OrbitingNodes from './OrbitingNodes'; // Import the OrbitingNodes class
import GLTFModel from './GLTFModel'; // Import the Model class
import '../assets/style/Home.css'; // Import the external CSS file

import owlImageUrl from '../assets/images/owl-in-space.png'; // Import the owl image for the loading spinner

// Purchased from https://skfb.ly/pr8Kx
import GALAXY_MODEL from '../assets/models/galaxy_HD.glb';
// "Sky Pano - Milkyway" (https://skfb.ly/6BZ67) by MozillaHubs is licensed under CC Attribution-NonCommercial-ShareAlike (http://creativecommons.org/licenses/by-nc-sa/4.0/).
import SKYBOX from '../assets/models/milkyway.glb';

// Custom cursor asset generated with ChatGPT
import rocketCursor from '../assets/images/rocketship-cursor.png';

// To track cursor intersection
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Helper function: Initialize lighting
const initializeLighting = (scene) => {
  const ambLight = new THREE.AmbientLight(0xc6b5f5, 4);
  scene.add(ambLight);

  const pointLight = new THREE.PointLight(0xfae696, 5);
  pointLight.position.set(0, -2, 0);
  scene.add(pointLight);
};

// Helper function: Handle window resize
const handleResize = (renderer, camera) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};

// Event listener to track mouse position
const handleMouseMove = (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
};

let isMouseDown = false;

// Event listener to handle mouse down
const handleMouseDown = (event) => {
  isMouseDown = true;
};

// Event listener to handle mouse up
const handleMouseUp = (event) => {
  isMouseDown = false;
};

const labelMap = new Map(); // Map to track existing labelDivs

// Helper function: Add a label div to display the node name
const createNodeLabel = (labelDiv) => {
  labelDiv.style.position = 'absolute';
  labelDiv.style.color = 'white';
  labelDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  labelDiv.style.padding = '5px';
  labelDiv.style.borderRadius = '3px';
  labelDiv.style.pointerEvents = 'none';
  labelDiv.style.display = 'none'; // Initially hidden
  document.body.appendChild(labelDiv);
}

const Home = () => {
  const mountRef = useRef(null);
  const orbitingNodesRef = useRef(null);

  const galaxyModel = new GLTFModel(GALAXY_MODEL, 2.8); // Instantiate the galaxy with the Model class
  const skyboxModel = new GLTFModel(SKYBOX, 100); // Instantiate the galaxy skybox with the Model class
  const orbitingNodes = new OrbitingNodes(); // Instantiate the nodes with the OrbitingNodes class

  const [isBlackOverlayActive, setIsBlackOverlayActive] = useState(true); // State to control fade
  const navigate = useNavigate(); // Hook to navigate between routes

  const handleNavigateToAccessible = () => {
    document.body.style.cursor = `url(${rocketCursor}), auto`; // Reset cursor
    navigate('/simple-view');
  };

  // Default positions for desktop and mobile
  const DEFAULT_DESKTOP_CAMERA_POSITION = new THREE.Vector3(4.42, 2.64, 0.21);
  const DEFAULT_MOBILE_CAMERA_POSITION = new THREE.Vector3(5.93, 6.35, 0.22);
  let defaultCameraPosition; // Will be set in useEffect()

  // Store the animation frame for cleanup later
  let animationFrameId;

  // Will be set in useEffect()
  let isMobile;

  // Used in camera view smooth reset functionality
  let shouldSmoothReset = false;
  let tapCount = 0;
  let lastTapTime = 0;
  const maxTapInterval = 300; // Maximum interval between taps (in milliseconds)

  // Animation loop needs to be defined outside of useEffect to be accessible
  const animate = (scene, camera, controls, renderer, galaxyModel) => {
    const nodeInfoArray = orbitingNodes.getNodeInfoArray(camera, renderer);
    
    const animationLoop = () => {
      //console.log("Camera position x:" + camera.position.x + " y:" + camera.position.y + " z:" + camera.position.z);
      
      animationFrameId = requestAnimationFrame(animationLoop);

      // Update orbiting nodes
      orbitingNodes.updateNodes(camera);

      // Iterate through each node
      nodeInfoArray.forEach(({ node, nodeTitle }) => {
        // Check if a labelDiv already exists for this node
        let nodeLabelDiv = labelMap.get(node.userData.id);

        if (!nodeLabelDiv) {
          // Create a new label if it doesn't exist
          nodeLabelDiv = document.createElement('div');
          createNodeLabel(nodeLabelDiv);
          labelMap.set(node.userData.id, nodeLabelDiv); // Store in the map
        }

        // Who Am I node takes priority
        if (node.userData.id === 'who-am-i') {
          nodeLabelDiv.style.fontWeight = 'bold';
          nodeLabelDiv.style.color = '#db13bd';
          nodeLabelDiv.style.zIndex = '100'; // High z-index to take precedence
        }

        // Get node's screen position
        const { x, y } = getScreenPosition(node, camera, renderer);

        // Update the label position and content
        nodeLabelDiv.style.left = `${x}px`;
        nodeLabelDiv.style.top = `${y}px`;
        nodeLabelDiv.textContent = nodeTitle;
        nodeLabelDiv.style.display = 'block'; // Ensure the label is visible

        const hoveredNode = orbitingNodes.getHoveredNode(); // Get the hovered node

        // Update the raycaster with the camera and mouse position
        raycaster.setFromCamera(mouse, camera);

        // Check for intersections with the galaxy model
        const intersects = raycaster.intersectObject(galaxyModel.model);

        // If on desktop, handle node and galaxy interactions separately
        if (!isMobile) {
          if (hoveredNode) {
            // Handle node hover
            document.body.style.cursor = 'pointer'; // Prioritize node hover -> 'pointer'
            nodeLabelDiv.style.display = 'block'; // Show node labels
          } else {
            // Handle galaxy hover only if no node is hovered
            if (intersects.length > 0) {
              if (isMouseDown) {
                document.body.style.cursor = 'grabbing'; // Galaxy click -> 'grabbing'
              } else {
                document.body.style.cursor = 'grab'; // Galaxy hover -> 'grab'
              }
            } else {
              document.body.style.cursor = `url(${rocketCursor}), auto`; // Reset cursor if no node or galaxy interaction
            }

            nodeLabelDiv.style.display = 'none'; // Hide node labels if no node is hovered
          }
        }
      });

      // Update the animation mixer from the model
      galaxyModel.updateAnimations();

      // Run the smooth reset if triggered
      if (shouldSmoothReset) doSmoothReset(camera, controls);

      // Update the controls
      controls.update();

      // Render the scene
      renderer.render(scene, camera);
    };

    // Start the animation loop and trigger fade-in
    animationLoop();
    setIsBlackOverlayActive(false); // This triggers the fade-out of the black overlay
  };

  // Convert the node's 3D position to 2D screen coordinates
  const getScreenPosition = (node, camera, renderer) => {
    const vector = new THREE.Vector3();
    node.getWorldPosition(vector);
    vector.project(camera);

    const halfWidth = renderer.domElement.clientWidth / 2;
    const halfHeight = renderer.domElement.clientHeight / 2;

    return {
      x: vector.x * halfWidth + halfWidth,
      y: -(vector.y * halfHeight) + halfHeight
    };
  };

  // Smooth reset function also needs to be defined outside of useEffect
  const doSmoothReset = (camera, controls) => {
    // Only run if shouldSmoothReset is true
    if (!shouldSmoothReset) return;

    // Smooth transition of controls target and camera position
    controls.target.lerp(new THREE.Vector3(0, 0, 0), 0.1);
    camera.position.lerp(defaultCameraPosition, 0.05);

    // Smooth zoom transition
    camera.zoom = THREE.MathUtils.lerp(camera.zoom, 1, 0.1);
    camera.updateProjectionMatrix();

    // Stop when close enough to targets
    if (camera.position.distanceTo(defaultCameraPosition) < 0.1 &&
      Math.abs(camera.zoom - 1) < 0.1 &&
      controls.target.distanceTo(new THREE.Vector3(0, 0, 0)) < 0.1) {
        shouldSmoothReset = false;

        // Remove angular limits after reset
        controls.minAzimuthAngle = -Infinity;
        controls.maxAzimuthAngle = Infinity;
        controls.minPolarAngle = 0;
        controls.maxPolarAngle = Math.PI;
      }

    controls.update();
  };

  // Event callback to reset view when space key is pressed
  const handleSpaceUp = (event) => {
    if (event.code === 'Space') {
      shouldSmoothReset = true;
      if (process.env.IS_DEVELOPMENT) console.log('Camera view has been reset');
    }
  }

  // Event callback to reset view when screen is triple-tapped
  const handleTouchStart = (event) => {
    const currentTime = new Date().getTime();
    const timeSinceLastTap  = currentTime - lastTapTime;
  
    if (timeSinceLastTap < maxTapInterval) {
      tapCount++;
    } else {
      tapCount = 1 // Reset to single tap if time interval is too long
    }
  
    if (tapCount === 3) {
      shouldSmoothReset = true;
      if (process.env.IS_DEVELOPMENT) console.log('Camera view has been reset (triple-tap)');
      tapCount = 0; // Reset tap count after triple tap
    }
  
    lastTapTime = currentTime; // Update the last tap time
  }

  // Event callback to stop smooth reset on mouse/touch interruption
  const stopSmoothReset = () => {
    // Check if a smooth reset is happening (=true) and
    // (edge case check) that the tap count was reset to 0 on mobile since
    // each tap increases the tap counter past 0 except when a smooth reset is triggered
    if (shouldSmoothReset && !(tapCount === 0 && isMobile)) {
      shouldSmoothReset = false;
    }
  };

  useEffect(() => {
    const overlay = document.querySelector('.black-overlay');
    const instructionText = document.getElementById('instruction-text');

    const handleTransitionEnd = () => {
      if (overlay.style.opacity < '0.1') {
        instructionText.classList.add('fade-in');
      }
    };
  
    overlay.addEventListener('transitionend', handleTransitionEnd);
  
    return () => {
      overlay.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, []);
  
  useEffect(() => {
    document.body.style.zoom = 1; // Reset the zoom by setting it to the default 1
    window.scrollTo(0, 0); // Scroll to the top on page load

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Set custom cursor
    document.body.style.cursor = `url(${rocketCursor}), auto`;

    // Media query to check for devices with no precise pointer or coarse pointer (e.g., touchscreens)
    isMobile = window.matchMedia('(pointer:none), (pointer:coarse)').matches;

    // Change default camera position for mobile devices
    defaultCameraPosition = isMobile ? DEFAULT_MOBILE_CAMERA_POSITION : DEFAULT_DESKTOP_CAMERA_POSITION;

    // Set up camera position
    camera.position.copy(defaultCameraPosition);

    // Initialize lighting (from helper function)
    initializeLighting(scene);

    // Create promises for loading each model or asset
    const loadGalaxyModel = () => {
      return new Promise((resolve) => {
        galaxyModel.loadModel(scene, new THREE.Euler(), () => {
          if (process.env.IS_DEVELOPMENT) console.log('Galaxy model loaded and added to scene');
          galaxyModel.setSpeed(-0.3); // Galaxy orbits in reverse
          resolve();
        });
      });
    };

    const loadSkyboxModel = () => {
      return new Promise((resolve) => {
        skyboxModel.loadModel(scene, new THREE.Euler(0, -1, 0), () => {
          if (process.env.IS_DEVELOPMENT) console.log('Skybox model loaded and added to scene');
          resolve();
        });
      });
    };

    const loadOrbitingNodes = () => {
      return new Promise((resolve) => {
        orbitingNodes.createNodes(scene, isMobile);
        orbitingNodesRef.current = orbitingNodes;
        if (process.env.IS_DEVELOPMENT) console.log('Orbiting nodes created and added to scene');

        // Set up mouse events for clicking on nodes
        const handleNodeClick = (nodeId) => {
          if (process.env.IS_DEVELOPMENT) console.log(`Clicked node: ${nodeId}`);
          document.body.style.cursor = `url(${rocketCursor}), auto`; // Reset cursor

          // The nodeId is set in OrbitingNodes
          navigate(`/${nodeId}`);
        };
        orbitingNodes.enableMouseEvents(renderer, camera, handleNodeClick);
        resolve(); // Resolve after the nodes are set up
      });
    };

    // Add OrbitControls for camera interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 3;
    controls.maxDistance = 20;
    controls.enableDamping = true;

    // Wait for all models and nodes to load using Promise.all
    Promise.all([loadGalaxyModel(), loadSkyboxModel(), loadOrbitingNodes()])
      .then(() => {
        if (process.env.IS_DEVELOPMENT) console.log('All assets loaded. Starting animation.');
        
        // Hide the loading overlay
        const loadingOverlay = document.getElementById('loading-overlay');
        if (loadingOverlay) {
          loadingOverlay.style.display = 'none';
        }

        // Start animation loop once all assets are loaded
        animate(scene, camera, controls, renderer, galaxyModel);
      })
      .catch((error) => {
        if (process.env.IS_DEVELOPMENT) console.error('An error occurred while loading assets:', error);
      });

    // Handle window resize
    window.addEventListener('resize', () => handleResize(renderer, camera));

    // Interaction event listeners
    document.addEventListener('keyup', handleSpaceUp);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchstart', stopSmoothReset);
    document.addEventListener('mousedown', stopSmoothReset);
    document.addEventListener('wheel', stopSmoothReset);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Cleanup function when the component unmounts
    return () => {
      isMouseDown = false; // Reset mouse state
      cancelAnimationFrame(animationFrameId); // Stop animation

      // Clean up event listeners to avoid memory leaks
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keyup', handleSpaceUp);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchstart', stopSmoothReset);
      document.removeEventListener('mousedown', stopSmoothReset);
      document.removeEventListener('wheel', stopSmoothReset);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      if (orbitingNodesRef.current && orbitingNodesRef.current.cleanupMouseEvents) {
        orbitingNodesRef.current.cleanupMouseEvents();
      }

      // Cleanup all objects in the scene
      scene.traverse((object) => {
        if (object.isMesh) {
          if (object.geometry) object.geometry.dispose();

          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => {
                if (material.map) material.map.dispose(); // Dispose of textures
                material.dispose();
              });
            } else {
              if (object.material.map) object.material.map.dispose();
              object.material.dispose();
            }
          }
        }
      });

      // Dispose of the renderer and remove the DOM element
      renderer.dispose();

      // Dispose of OrbitControls
      controls.dispose();

      // Remove the div elements for each node label
      labelMap.forEach((labelDiv, nodeId) => {
        document.body.removeChild(labelDiv);
      });
      labelMap.clear();

      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
    };
  }, []); // Empty dependency array, runs once on mount

  return (
    <div ref={mountRef} className="scene-container">
      <div className="loading-overlay" id="loading-overlay">
      <img src={owlImageUrl} alt="Owl" className="spinner-image" />
        <div className="spinner"></div>
        <p>Blasting off...</p>
        <div className="accessible-link" style={{ fontSize: "16px" }}>
          <span className="span-link" onClick={handleNavigateToAccessible}>
            "Elisa's space" simple view
          </span>
        </div>
      </div>
      {/* Use CSS class to control fading effect */}
      <div className={`black-overlay ${isBlackOverlayActive ? 'fade-in' : 'fade-out'}`}></div>
      <div id="title">
        <p><b>ELISA LUPIN-JIMENEZ</b>, creative technologist and space nerd</p>
        <div className="accessible-link">
          <span className="span-link" onClick={handleNavigateToAccessible}>
            Simple view
          </span>
        </div>
      </div>
      <div id="title-mobile">
        <p><b>ELISA LUPIN-JIMENEZ</b><br></br>creative technologist, space nerd</p>
      </div>
      <div id="instruction-text">
        <p>
          &gt; Click a celestial body to explore projects<br></br>
          &gt; Drag and scroll to navigate the space<br></br>
          &gt; Press the "Space" key to reset the view<br></br>
        </p>
      </div>
      <div id="instruction-text-mobile">
        <p>
          <span className="span-link" onClick={handleNavigateToAccessible}>
            &gt; Simple view
          </span><br></br>
          &gt; Click a celestial body to explore projects<br></br>
          &gt; Drag and pinch-to-zoom to navigate the space<br></br>
          &gt; Triple-tap to reset the view
        </p>
      </div>
    </div>
  );
};

export default Home;
