// src/components/GLBModel.js
import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ------------------------------------------
// This component is designed specifically for R3F
// It's a functional component that leverages hooks.
// ------------------------------------------
const GLBModel = ({ modelPath, scale = [1, 1, 1], rotation = [0, 0, 0], speed = 1, ...props }) => {
  // Load the model using the hook from @react-three/drei
  const { scene, animations } = useGLTF(modelPath);
  
  // Create refs for the model and the animation mixer
  const modelRef = useRef();
  const mixer = useRef();
  
  // Set up the scene and animations once the model is loaded
  useEffect(() => {
    if (scene && modelRef.current) {
      // Clone the scene object (essential because useGLTF caches it)
      const clonedScene = scene.clone(); 
      modelRef.current.add(clonedScene);

      // Apply scale and rotation
      modelRef.current.scale.set(...scale);
      modelRef.current.rotation.set(...rotation);

      // Setup Animation Mixer
      if (animations && animations.length) {
        mixer.current = new THREE.AnimationMixer(clonedScene);
        const action = mixer.current.clipAction(animations[0]);
        action.play();
      }
    }
    
    // Cleanup function for when the component unmounts
    return () => {
      // Dispose of the mixer
      if (mixer.current) {
        mixer.current.stopAllAction();
        mixer.current = null;
      }
    };
  }, [modelPath, animations, scale, rotation]); // Re-run if props change

  // Update animations on every frame
  useFrame((state, delta) => {
    if (mixer.current) {
      // Use the provided speed prop for controlled animation
      mixer.current.update(delta * speed);
    }
  });

  // Render the loaded scene
  // Using a <group> as a container for better control over position/rotation/scaling
  return <group ref={modelRef} {...props} />;
};

// Optional: Preload the model to improve loading smoothness
// NOTE: Make sure the galaxyModelUrl is exported/available here or passed as a parameter to preload.
// useGLTF.preload(galaxyModelUrl); 

export default GLBModel;