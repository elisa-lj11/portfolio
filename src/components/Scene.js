// src/components/Scene.js
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';
import { useNavigate } from 'react-router-dom';
import OrbitingNodes from './OrbitingNodes'; // Import the OrbitingNodes class
import Model from './Model'; // Import the Model class
import '../assets/style/Scene.css'; // Import the external CSS file

// Purchased from https://sketchfab.com/3d-models/galaxy-space-portal-black-hole-773ae44fc994471b85679236a36c0918
import GALAXY_MODEL from '../assets/models/galaxy_HD.glb';
// "Sky Pano - Milkyway" (https://skfb.ly/6BZ67) by MozillaHubs is licensed under CC Attribution-NonCommercial-ShareAlike (http://creativecommons.org/licenses/by-nc-sa/4.0/).
import SKYBOX from '../assets/models/milkyway.glb';

/* When 3D assets were still in a 'public' folder
const GALAXY_MODEL = '/models/galaxy_HD.glb';
const SKYBOX = '/models/milkyway.glb';
*/

// Helper function: Initialize lighting
const initializeLighting = (scene) => {
  const ambLight = new THREE.AmbientLight(0xc6b5f5, 4);
  scene.add(ambLight);

  const pointLight = new THREE.PointLight(0xfae696, 3);
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

// Helper function: Add a label div to display the node name
const createNodeLabel = (labelDiv, labelRef) => {
  labelDiv.style.position = 'absolute';
  labelDiv.style.color = 'white';
  labelDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  labelDiv.style.padding = '5px';
  labelDiv.style.borderRadius = '3px';
  labelDiv.style.pointerEvents = 'none';
  labelDiv.style.display = 'none'; // Initially hidden
  document.body.appendChild(labelDiv);
  labelRef.current = labelDiv;
}

const Scene = () => {
  const mountRef = useRef(null);
  const labelRef = useRef(null);
  const orbitingNodesRef = useRef(null);
  const labelDiv = document.createElement('div');
  createNodeLabel(labelDiv, labelRef);

  const galaxyModel = new Model(GALAXY_MODEL, 2.8); // Instantiate the galaxy with the Model class
  const skyboxModel = new Model(SKYBOX, 100); // Instantiate the galaxy skybox with the Model class
  const orbitingNodes = new OrbitingNodes(); // Instantiate the nodes with the OrbitingNodes class

  const [isFading, setIsFading] = useState(true); // State to control fade
  const navigate = useNavigate(); // Hook to navigate between routes
  let shouldSmoothReset = false; // shouldSmoothReset is checked during animate frames

  // Store the animation frame for cleanup later
  let animationFrameId;

  // Animation loop needs to be defined outside of useEffect to be accessible
  const animate = (scene, camera, controls, renderer, galaxyModel) => {
    const animationLoop = () => {
      animationFrameId = requestAnimationFrame(animationLoop);

      // Update orbiting nodes
      orbitingNodes.updateNodes(camera);

      const hoveredNode = orbitingNodes.getHoveredNode(camera); // Get the hovered node
      const hoveredNodeTitle = orbitingNodes.getHoveredNodeTitle();
      if (hoveredNode) {
        const { x, y } = getScreenPosition(hoveredNode, camera, renderer);
        labelDiv.style.left = `${x}px`;
        labelDiv.style.top = `${y}px`;
        labelDiv.textContent = hoveredNodeTitle; // Set the node name
        labelDiv.style.display = 'block';
      } else {
        labelDiv.style.display = 'none';
      }

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
    setIsFading(false); // This triggers the fade-out of the black overlay
  };

  // Smooth reset function also needs to be defined outside of useEffect
  const doSmoothReset = (camera, controls) => {
    if (!shouldSmoothReset) return;

    // Smooth transition of controls target and camera position
    controls.target.lerp(new THREE.Vector3(0, 0, 0), 0.1);
    camera.position.lerp(new THREE.Vector3(0, 1, 5), 0.05);

    // Smooth zoom transition
    camera.zoom = THREE.MathUtils.lerp(camera.zoom, 1, 0.1);
    camera.updateProjectionMatrix();

    // Stop when close enough to targets
    if (camera.position.distanceTo(new THREE.Vector3(0, 1, 5)) < 0.1 &&
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

  document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      shouldSmoothReset = true;
      console.log('Camera view has been reset');
    }
  });

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Set up camera position
    camera.position.set(0, 1, 5);

    // Initialize lighting (from helper function)
    initializeLighting(scene);

    // Create promises for loading each model or asset
    const loadGalaxyModel = () => {
      return new Promise((resolve) => {
        galaxyModel.loadModel(scene, () => {
          console.log('Galaxy model loaded and added to scene');
          galaxyModel.setSpeed(-0.3); // Galaxy orbits in reverse
          resolve();
        });
      });
    };

    const loadSkyboxModel = () => {
      return new Promise((resolve) => {
        skyboxModel.loadModel(scene, () => {
          console.log('Skybox model loaded and added to scene');
          resolve();
        });
      });
    };

    const loadOrbitingNodes = () => {
      return new Promise((resolve) => {
        orbitingNodes.createNodes(scene);
        orbitingNodesRef.current = orbitingNodes;
        console.log('Orbiting nodes created and added to scene');

        // Set up mouse events for clicking on nodes
        const handleNodeClick = (nodeId) => {
          console.log(`Clicked node: ${nodeId}`);
          // The nodeId is set in OrbitingNodes
          navigate(`/${nodeId}`);
        };
        orbitingNodes.enableMouseEvents(renderer, camera, handleNodeClick);
        resolve(); // Resolve after the nodes are set up
      });
    };

    // Add OrbitControls for camera interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 0.1;
    controls.maxDistance = 1000;
    controls.enableDamping = true;

    // Wait for all models and nodes to load using Promise.all
    Promise.all([loadGalaxyModel(), loadSkyboxModel(), loadOrbitingNodes()])
      .then(() => {
        console.log('All assets loaded. Starting animation.');

        // Start animation loop once all assets are loaded
        animate(scene, camera, controls, renderer, galaxyModel);
      })
      .catch((error) => {
        console.error('An error occurred while loading assets:', error);
      });

    // Handle window resize
    window.addEventListener('resize', () => handleResize(renderer, camera));

    // Cleanup function when the component unmounts
    return () => {
      cancelAnimationFrame(animationFrameId); // Stop animation
      window.removeEventListener('resize', handleResize);

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

      document.body.removeChild(labelDiv);

      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
    };
  }, []); // Empty dependency array, runs once on mount

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

  return (
    <div ref={mountRef} className="scene-container">
      {/* Use CSS class to control fading effect */}
      <div className={`black-overlay ${isFading ? 'fade-in' : 'fade-out'}`}></div>
      <div id="title">
        <p>You have warped to <b>Elisa's space</b></p>
      </div>
      <div id="instruction-text">
        <p>
          &gt; Click on a celestial body to explore creative manifestations<br></br>
          &gt; Play around the interactive space with your pointer<br></br>
          &gt; Press the "Space" key to reset your view
        </p>
      </div>
    </div>
  );
};

export default Scene;