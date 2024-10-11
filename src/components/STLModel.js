// src/components/STLModel.js
import React from 'react';
import { useLoader } from '@react-three/fiber';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import * as THREE from 'three';

const STLModel = ({ modelPath, scale = [1, 1, 1], position = [0, 0, 0], rotation = [0, 0, 0] } ) => {
  // Load the STL model using the path passed in as a prop
  const geometry = useLoader(STLLoader, modelPath);

  // Create a material for the model
  const material = new THREE.MeshStandardMaterial({ color: 'lightgray' });

  return (
    <mesh geometry={geometry} material={material} scale={scale} position={position} rotation={rotation}>
    </mesh>
  );
};

export default STLModel;