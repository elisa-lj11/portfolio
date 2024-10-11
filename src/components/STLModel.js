// src/components/STLModel.js
import React, { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import * as THREE from 'three';

const STLModel = ({ modelPath, scale = [1, 1, 1], position = [0, 0, 0], rotation = [0, 0, 0] } ) => {
  // Use refs to store the geometry and material so you can dispose of them
  const geometryRef = useRef();
  const materialRef = useRef();

  // Load the STL model using the path passed in as a prop
  const geometry = useLoader(STLLoader, modelPath);
  // Store geometry in the ref
  geometryRef.current = geometry;

  // Create a material for the model
  const material = new THREE.MeshStandardMaterial({ color: 'lightgray' });
  materialRef.current = material;

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (geometryRef.current) geometryRef.current.dispose();
      if (materialRef.current) materialRef.current.dispose();
    };
  }, []);

  return (
    <mesh 
      geometry={geometry} 
      material={material} 
      scale={scale} 
      position={position} 
      rotation={rotation}>
    </mesh>
  );
};

export default STLModel;