// src/components/Scene.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for page redirection
import OrbitingNodes from './OrbitingNodes'; // Import the OrbitingNodes class
import Model from './Model'; // Import the Model class

// Helper function: Initialize lighting
const initializeLighting = (scene) => {
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 1, 1);
  scene.add(light);
};

// Helper function: Handle window resize
const handleResize = (renderer, camera) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};

const Scene = () => {
  const mountRef = useRef(null);
  const model = new Model(); // Create an instance of the Model class
  const navigate = useNavigate(); // Hook to navigate between routes

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

    // Model loading
    model.loadModel(scene, () => {
      console.log('Model loaded and added to scene');
    });

    // Initialize the OrbitingNodes class and add nodes to the scene
    const orbitingNodes = new OrbitingNodes();
    orbitingNodes.createNodes(scene);

    // Set up mouse events for clicking on nodes
    const handleNodeClick = (nodeId) => {
      console.log(`Clicked node: ${nodeId}`);
      navigate(`/${nodeId}`);
    };
    orbitingNodes.enableMouseEvents(renderer, camera, handleNodeClick);

    // Add OrbitControls for camera interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update orbiting nodes
      orbitingNodes.updateNodes();

      // Update the animation mixer from the model
      model.updateAnimations();

      // Update the controls
      controls.update();

      // Render the scene
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    window.addEventListener('resize', () => handleResize(renderer, camera));

    // Cleanup function when the component unmounts
    return () => {
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
      
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []); // Empty dependency array, runs once on mount

  return (
    <div ref={mountRef} style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Debugging styles */}
      <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
            overflow: hidden;
          }
          #root {
            width: 100vw;
            height: 100vh;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
};

export default Scene;