// src/pages/DecolonizeSpace.js
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useErrorBoundary } from 'use-error-boundary';

import GLBModel from '../components/GLBModel';
import PageTemplate from '../components/PageTemplate';

//import sampleImageUrl from '';
import galaxyModelImageUrl from '../assets/images/decolonize-space/galaxy-model.png';
import earthModelImageUrl from '../assets/images/decolonize-space/earth-model.png';
import waterModelImageUrl from '../assets/images/decolonize-space/water-model.png';
import plantModelImageUrl from '../assets/images/decolonize-space/plant-model.png';

import galaxyModelUrl from '../assets/models/galaxy_HD.glb'; // Sourced from https://sketchfab.com/3d-models/galaxy-space-portal-black-hole-773ae44fc994471b85679236a36c0918
import earthModelUrl from '../assets/models/earth.glb'; // Sourced from https://sketchfab.com/3d-models/planet-earth-babd284930204736a938915ceb0a6535
import waterModelUrl from '../assets/models/water.glb'; // Scanned with Luma AI
import plantModelUrl from '../assets/models/plant.glb'; // Scanned with Luma AI

const DecolonizeSpace = () => {
  const [refs, setRefs] = useState([]);
  const canvasRef = useRef();
  const { ErrorBoundary, didCatch, error } = useErrorBoundary();

  useEffect(() => {
    const handleContextLost = (event) => {
      event.preventDefault();
      console.warn('WebGL context lost');
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.removeEventListener('webglcontextlost', handleContextLost);
      }
      window.location.reload();
    };
  
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener('webglcontextlost', handleContextLost);
    }
  
    return () => {
      if (canvas) {
        canvas.removeEventListener('webglcontextlost', handleContextLost);
      }
    };
  }, []);

  const modelFallbackImage = ({ imageUrl, altText, captionText }) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
        <figure>
          <img
            src={imageUrl}
            alt={altText}
            style={{ width: '70%', display: 'inline-block' }}
          />
          <figcaption>{captionText}</figcaption>
        </figure>
      </div>
    );
  };

  const galaxyModelFallbackElement = modelFallbackImage({
    imageUrl: galaxyModelImageUrl,
    altText: 'Galaxy model failed to load',
    captionText: 'Galaxy model (Fallback Image)',
  });

  const earthModelFallbackElement = modelFallbackImage({
    imageUrl: earthModelImageUrl,
    altText: 'Earth model failed to load',
    captionText: 'Earth model (Fallback Image)',
  });

  const waterModelFallbackElement = modelFallbackImage({
    imageUrl: waterModelImageUrl,
    altText: 'Water model failed to load',
    captionText: 'Water model (Fallback Image)',
  });

  const plantModelFallbackElement = modelFallbackImage({
    imageUrl: plantModelImageUrl,
    altText: 'Plant model failed to load',
    captionText: 'Plant model (Fallback Image)',
  });

  // Function to be used in PageTemplate and passed down
  const generateRefsFromDOM = (generateRefsFunction) => {
    generateRefsFunction();  // Call the function that scans the DOM and sets the refs
  };

  return (
    <PageTemplate
      refs={refs} 
      setRefs={setRefs} 
      generateRefsFromDOM={generateRefsFromDOM}
    >
      <div className="section" id='overview'>
        <h2 style={{ display: 'none' }}>Zine Overview</h2>
        <h1>Prophylactic Photogrammetry Toward Decolonization of Space</h1>
        <br></br>
        {didCatch ? (
          galaxyModelFallbackElement
        ) : (
          <>
            <div className='interaction-instructions'>
              Drag and zoom to interact with the galaxy below
            </div>
            <div style={{ border: '2px solid #706EF5', padding: '10px', borderRadius: '5px', margin: '20px 0' }}>
              <ErrorBoundary>
                <Canvas 
                  ref={canvasRef}
                  camera={{
                    position: [5, 5, 5], // Change these values to better see your model
                    fov: 50, // Field of view (adjust as necessary)
                  }}
                  style={{ height: '50vh', width: '100%' }}
                  gl={{ antialias: true, powerPreference: 'high-performance' }}
                  fallback={galaxyModelFallbackElement}
                  onCreated={({ gl }) => {
                    gl.setPixelRatio(window.devicePixelRatio);

                    return () => {
                      // Dispose the scene and resources when the Canvas unmounts
                      scene.traverse((obj) => {
                        if (obj.geometry) obj.geometry.dispose();
                        if (obj.material) {
                          if (Array.isArray(obj.material)) {
                            obj.material.forEach((mat) => mat.dispose());
                          } else {
                            obj.material.dispose();
                          }
                        }
                      });
                      gl.dispose();
                    };
                  }}
                >
                  {/* Ambient light provides soft global illumination */}
                  <ambientLight intensity={1} />
                  
                  {/* Directional light to cast shadows */}
                  <directionalLight position={[-5, 5, 5]} intensity={5} />
                  
                  {/* Load model with a fallback */}
                  <Suspense fallback={null}>
                    <GLBModel 
                      modelPath={galaxyModelUrl} 
                      scale={[3.5, 3.5, 3.5]} 
                      rotation={[0, 0, 0.2]} 
                    />
                  </Suspense>
                  {/* OrbitControls to enable zoom and rotation */}
                  <OrbitControls />
                </Canvas>
              </ErrorBoundary>
            </div>
          </>
        )}
        <p>
          This hybrid physical/digital zine explores the expansiveness of possibilities in outer space while critically examining the inability of humans to “stake claims” to the histories of preexisting celestial objects in pursuit of interplanetary colonization.
          <br/><br/>
          In a world where capitalist hegemony is hyperfocused on chasing “the final frontier” after depleting many of our own planet's natural resources, we must be reminded that these celestial bodies predate us and have developed their own stories for millions, if not billions of years, before human existence.
          <br/><br/>
          As a sustainable alternative, we should lean into the preservation and reuse of artifacts that are already around us before projecting a consumerist, extraterrestrial human future that demands even greater resource consumption and perpetuates colonial violence.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='earth'>
        <h2>Our Very Own Planet Earth</h2>
        {didCatch ? (
          earthModelFallbackElement
        ) : (
          <>
            <div className='interaction-instructions'>
              Drag and zoom to interact with the galaxy below
            </div>
            <div style={{ border: '2px solid #706EF5', padding: '10px', borderRadius: '5px', margin: '20px 0' }}>
              <ErrorBoundary>
                <Canvas 
                  ref={canvasRef}
                  camera={{
                    position: [5, 5, 5], // Change these values to better see your model
                    fov: 50, // Field of view (adjust as necessary)
                  }}
                  style={{ height: '50vh', width: '100%' }}
                  gl={{ antialias: true, powerPreference: 'high-performance' }}
                  fallback={earthModelFallbackElement}
                  onCreated={({ gl }) => {
                    gl.setPixelRatio(window.devicePixelRatio);

                    return () => {
                      // Dispose the scene and resources when the Canvas unmounts
                      scene.traverse((obj) => {
                        if (obj.geometry) obj.geometry.dispose();
                        if (obj.material) {
                          if (Array.isArray(obj.material)) {
                            obj.material.forEach((mat) => mat.dispose());
                          } else {
                            obj.material.dispose();
                          }
                        }
                      });
                      gl.dispose();
                    };
                  }}
                >
                  {/* Ambient light provides soft global illumination */}
                  <ambientLight intensity={10} />
                  
                  {/* Directional light to cast shadows */}
                  <directionalLight position={[-5, 5, 5]} intensity={10} />
                  
                  {/* Load model with a fallback */}
                  <Suspense fallback={null}>
                    <GLBModel 
                      modelPath={earthModelUrl} 
                      position={[1, -4, 0]}
                      scale={[3, 3, 3]} 
                      rotation={[0, 0, 0.2]} 
                    />
                  </Suspense>
                  {/* OrbitControls to enable zoom and rotation */}
                  <OrbitControls />
                </Canvas>
              </ErrorBoundary>
            </div>
          </>
        )}
        <p>
          Earth has always been our home planet. 
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='water'>
        <h2>Water is All Around Us</h2>
        {didCatch ? (
          waterModelFallbackElement
        ) : (
          <>
            <div className='interaction-instructions'>
              Drag and zoom to interact with the glass of water below
            </div>
            <div style={{ border: '2px solid #706EF5', padding: '10px', borderRadius: '5px', margin: '20px 0' }}>
              <ErrorBoundary>
                <Canvas 
                  ref={canvasRef}
                  camera={{
                    position: [5, 5, 5], // Change these values to better see your model
                    fov: 50, // Field of view (adjust as necessary)
                  }}
                  style={{ height: '50vh', width: '100%' }}
                  gl={{ antialias: true, powerPreference: 'high-performance' }}
                  fallback={waterModelFallbackElement}
                  onCreated={({ gl }) => {
                    gl.setPixelRatio(window.devicePixelRatio);

                    return () => {
                      // Dispose the scene and resources when the Canvas unmounts
                      scene.traverse((obj) => {
                        if (obj.geometry) obj.geometry.dispose();
                        if (obj.material) {
                          if (Array.isArray(obj.material)) {
                            obj.material.forEach((mat) => mat.dispose());
                          } else {
                            obj.material.dispose();
                          }
                        }
                      });
                      gl.dispose();
                    };
                  }}
                >
                  {/* Ambient light provides soft global illumination */}
                  <ambientLight intensity={1} />
                  
                  {/* Directional light to cast shadows */}
                  <directionalLight position={[-5, 5, 5]} intensity={1} />
                  
                  {/* Load model with a fallback */}
                  <Suspense fallback={null}>
                    <GLBModel 
                      modelPath={waterModelUrl} 
                      position={[0, 0, 0]}
                      scale={[3, 3, 3]} 
                      rotation={[0, 0, 0]} 
                    />
                  </Suspense>
                  {/* OrbitControls to enable zoom and rotation */}
                  <OrbitControls />
                </Canvas>
              </ErrorBoundary>
            </div>
          </>
        )}
        <p>
          Water is a source of life. 
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='plant'>
        <h2>Plants Ground Us</h2>
        {didCatch ? (
          plantModelFallbackElement
        ) : (
          <>
            <div className='interaction-instructions'>
              Drag and zoom to interact with the orchid below
            </div>
            <div style={{ border: '2px solid #706EF5', padding: '10px', borderRadius: '5px', margin: '20px 0' }}>
              <ErrorBoundary>
                <Canvas 
                  ref={canvasRef}
                  camera={{
                    position: [5, 5, 5], // Change these values to better see your model
                    fov: 50, // Field of view (adjust as necessary)
                  }}
                  style={{ height: '50vh', width: '100%' }}
                  gl={{ antialias: true, powerPreference: 'high-performance' }}
                  fallback={plantModelFallbackElement}
                  onCreated={({ gl }) => {
                    gl.setPixelRatio(window.devicePixelRatio);

                    return () => {
                      // Dispose the scene and resources when the Canvas unmounts
                      scene.traverse((obj) => {
                        if (obj.geometry) obj.geometry.dispose();
                        if (obj.material) {
                          if (Array.isArray(obj.material)) {
                            obj.material.forEach((mat) => mat.dispose());
                          } else {
                            obj.material.dispose();
                          }
                        }
                      });
                      gl.dispose();
                    };
                  }}
                >
                  {/* Ambient light provides soft global illumination */}
                  <ambientLight intensity={5} />
                  
                  {/* Directional light to cast shadows */}
                  <directionalLight position={[-5, 5, 5]} intensity={0.5} />
                  
                  {/* Load model with a fallback */}
                  <Suspense fallback={null}>
                    <GLBModel 
                      modelPath={plantModelUrl} 
                      position={[0, -1, 0]}
                      scale={[3, 3, 3]} 
                      rotation={[0, 0, 0]} 
                    />
                  </Suspense>
                  {/* OrbitControls to enable zoom and rotation */}
                  <OrbitControls />
                </Canvas>
              </ErrorBoundary>
            </div>
          </>
        )}
        <p>
          Plants came long before us. We are dependent on them for the air we breathe. 
        </p>
      </div>
    </PageTemplate>
  );
};

export default DecolonizeSpace;