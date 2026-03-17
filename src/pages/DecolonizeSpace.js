// src/pages/DecolonizeSpace.js
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useErrorBoundary } from 'use-error-boundary';

import GLBModel from '../components/GLBModel';
import PageTemplate from '../components/PageTemplate';

import galaxyModelImageUrl from '../assets/images/decolonize-space/galaxy-model.png';
import placardImageUrl from '../assets/images/decolonize-space/zine-placard.JPEG';
import cardsImageUrl from '../assets/images/decolonize-space/zine-cards.JPEG';
import earthModelImageUrl from '../assets/images/decolonize-space/earth-model.png';
import marsModelImageUrl from '../assets/images/decolonize-space/mars-model.png';
import pCModelImageUrl from '../assets/images/decolonize-space/proxima-centauri-model.png';
import waterModelImageUrl from '../assets/images/decolonize-space/water-model.png';
import plantModelImageUrl from '../assets/images/decolonize-space/plant-model.png';

import galaxyModelUrl from '../assets/models/galaxy_HD.glb';
import earthModelUrl from '../assets/models/earth.glb';
import marsModelUrl from '../assets/models/mars.glb';
import pCModelUrl from '../assets/models/proxima-centauri.glb';
import waterModelUrl from '../assets/models/water.glb';
import plantModelUrl from '../assets/models/plant.glb';

const SPACESHIP_EARTH_URL = 'https://anthropology.mit.edu/files/anthropology/imce/people/papers/helmreich_spaceship_earth.pdf';

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

  const modelFallbackImage = ({ imageUrl, altText, captionText }) => (
    <figure>
      <img src={imageUrl} alt={altText} style={{ maxWidth: '70%' }} />
      <figcaption>{captionText}</figcaption>
    </figure>
  );

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

  const marsModelFallbackElement = modelFallbackImage({
    imageUrl: marsModelImageUrl,
    altText: 'Mars model failed to load',
    captionText: 'Mars model (Fallback Image)',
  });

  const pCModelFallbackElement = modelFallbackImage({
    imageUrl: pCModelImageUrl,
    altText: 'Proxima Centauri model failed to load',
    captionText: 'Proxima Centauri model (Fallback Image)',
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

  const generateRefsFromDOM = (generateRefsFunction) => {
    generateRefsFunction();
  };

  const makeCanvas = ({ modelUrl, fallbackElement, modelComponent, ambientIntensity, dirIntensity, scale, position, rotation }) => (
    didCatch ? fallbackElement : (
      <>
        <div className='interaction-instructions'>
          Drag and zoom to interact with the model below
        </div>
        <div className="model-viewer">
          <ErrorBoundary>
            <Canvas
              ref={canvasRef}
              camera={{ position: [5, 5, 5], fov: 50 }}
              style={{ height: '50vh', width: '100%' }}
              gl={{ antialias: true, powerPreference: 'high-performance' }}
              fallback={fallbackElement}
              onCreated={({ gl }) => {
                gl.setPixelRatio(window.devicePixelRatio);
                return () => {
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
              <ambientLight intensity={ambientIntensity} />
              <directionalLight position={[-5, 5, 5]} intensity={dirIntensity} />
              <Suspense fallback={null}>
                <GLBModel
                  modelPath={modelUrl}
                  scale={scale}
                  position={position}
                  rotation={rotation}
                />
              </Suspense>
              <OrbitControls />
            </Canvas>
          </ErrorBoundary>
        </div>
      </>
    )
  );

  return (
    <PageTemplate
      refs={refs}
      setRefs={setRefs}
      generateRefsFromDOM={generateRefsFromDOM}
    >
      <div className="section" id='overview'>
        <h2 style={{ display: 'none' }}>Zine Overview</h2>
        <h1>Prophylactic Photogrammetry Toward Decolonization of Space</h1>
        {makeCanvas({
          modelUrl: galaxyModelUrl,
          fallbackElement: galaxyModelFallbackElement,
          ambientIntensity: 1,
          dirIntensity: 5,
          scale: [3.5, 3.5, 3.5],
          position: [0, 0, 0],
          rotation: [0, 0, 0.2],
        })}
        <p>
          This hybrid physical/digital zine explores the expansiveness of possibilities in outer space while critically examining the inability of humans to "stake claims" to the histories of preexisting celestial objects in pursuit of interplanetary colonization.
          <br/><br/>
          In a world where capitalist hegemony is hyperfocused on chasing "the final frontier" after depleting our terrestrial resources, we must be reminded that these celestial bodies predate us and have developed their own stories for millions, if not billions of years, before human existence.
          <br/><br/>
          As a sustainable alternative, we should lean into the preservation and reuse of artifacts that are already accessible to us before projecting a consumerist, extraterrestrial human future that demands even greater resource consumption and perpetuates colonial violence.
        </p>
        <figure>
          <img src={placardImageUrl} alt='Zine placard' style={{ maxWidth: '90%' }} />
          <figcaption>Physical portion of zine, laser-cut into plywood</figcaption>
        </figure>
        <figure>
          <img src={cardsImageUrl} alt='Zine tokens' style={{ maxWidth: '90%' }} />
          <figcaption>Zine tokens, QR code linking to this digital zine</figcaption>
        </figure>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='earth'>
        <h2>Our Very Own Planet Earth</h2>
        {makeCanvas({
          modelUrl: earthModelUrl,
          fallbackElement: earthModelFallbackElement,
          ambientIntensity: 10,
          dirIntensity: 10,
          scale: [3, 3, 3],
          position: [1, -4, 0],
          rotation: [0, 0, 0.2],
        })}
        <p>
          Earth has always been our home planet. Humans have subsisted off of Earth's resources for a million years, yet it is only in the last few centuries that we have begun to consider the possibility of exhausting our resources and needing a backup plan in space. As we have gotten closer and closer to breaking into interplanetary travel, going as far as placing satellites into and beyond our orbit, we have become more convinced that interplanetary colonization is the only alternative to our inevitable demise.
          <br/><br/>
          We have become overly reliant on digital representations of our planet, perhaps as an attempt to propagandize the colonial idea that this planet is "too small for us." In the article <a target='_blank' rel='noopener noreferrer' href={SPACESHIP_EARTH_URL}>"From Spaceship Earth to Google Ocean: Planetary Icons, Indexes, and Infrastructures,"</a> Professor Stefan Helmreich argues that Google Earth, a 3D conglomerate of satellite images, ultimately fails to capture our unique, embodied experiences on Earth. Instead, it pushes the idea that we can capture a "whole Earth" that can be easily manipulated with just a drag or a scroll (as we see in the model above).
          <br/><br/>
          Perhaps, we should ask ourselves, "What more is there to explore on our own planet?" Perhaps, there are things beyond physical and digital artifacts for us to dive into, such as the communities and cultures that are ever-evolving within our closed planetary ecosystem. By investigating these things, perhaps our values will realign to preserve the beauty of humanity as it has come to form on this planet, instead of burning through our resources and harming the communities that are most vulnerable to climate change.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='mars'>
        <h2>Mars: The Next Frontier?</h2>
        {makeCanvas({
          modelUrl: marsModelUrl,
          fallbackElement: marsModelFallbackElement,
          ambientIntensity: 5,
          dirIntensity: 10,
          scale: [5, 5, 5],
          position: [0, 0, 0],
          rotation: [0, 0, 0.2],
        })}
        <p>
          Mars is "the next frontier." We have already expended so many resources to land rovers on Mars, all in the hopes of eventually sending humans out there as the first interplanetary colony. Who will have the "privilege" of settling this new colony? Most likely, the elite will embark on this voyage, leaving behind a ravaged Earth in which marginalized communities must survive.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='proxima-centauri'>
        <h2>Proxima Centauri: A Distant Future</h2>
        {makeCanvas({
          modelUrl: pCModelUrl,
          fallbackElement: pCModelFallbackElement,
          ambientIntensity: 2,
          dirIntensity: 1,
          scale: [3, 3, 3],
          position: [0, 0, 0],
          rotation: [0, 0, 0.2],
        })}
        <p>
          Some scientists imagine humanity branching into the Alpha Centauri star system located just 4.2 light years away from us. "Just" is an understatement, though; 4.2 light years is actually 24.7 trillion miles. With our current space travel capabilities, it would take us 200,000 years to reach Proxima Centauri.
          <br/><br/>
          How many more of Earth's (and subsequently our solar system's) resources must we consume to achieve this level of technology? I imagine this pursuit of exoplanetary colonization as a self-propelling, self-destructive mechanism. By depleting our planet's resources to realize this goal, we make our own environment increasingly inhospitable, forcing us to find a way out.
          <br/><br/>
          Can we break out of this feedback loop preemptively?
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='water'>
        <h2>Water Is All Around Us</h2>
        {makeCanvas({
          modelUrl: waterModelUrl,
          fallbackElement: waterModelFallbackElement,
          ambientIntensity: 1,
          dirIntensity: 1,
          scale: [3, 3, 3],
          position: [0, 0, 0],
          rotation: [0, 0, 0],
        })}
        <p>
          Water is a source of life, yet we take it for granted, assuming that it will always be accessible with the right infrastructure. Our water is precious and essential to life; being without it results in death after just three days. We must work harder to protect our sources of water and re-learn the simple appreciation of it as a resource to which we can have virtually unlimited access only if we preserve it.
          <br/><br/>
          I attempted to capture this glass of water using photogrammetry and utterly failed. I scoured the Internet for higher-quality 3D models of glasses of water, but I decided to keep this one as a metaphor for the difficulty of translating ephemeral, essential reality into a stable, masterable digital asset. This highlights the conceit that if we can model something, we can control it, a dangerous assumption that underlies the very planetary resource exploitation this zine critiques.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='plant'>
        <h2>Plants Ground Us</h2>
        {makeCanvas({
          modelUrl: plantModelUrl,
          fallbackElement: plantModelFallbackElement,
          ambientIntensity: 5,
          dirIntensity: 0.5,
          scale: [3, 3, 3],
          position: [0, -1, 0],
          rotation: [0, -2.1, 0],
        })}
        <p>
          Plants came long before us. We are dependent on them for the air we breathe. Unfortunately, we have wreaked havoc on our forests and plant ecosystems by consuming far too many resources. The plants have not had time to catch up with our levels of consumption, and in a way, we are suffocating ourselves in an attempt to "have" more.
          <br/><br/>
          The potted orchid in this zine, captured with photogrammetry, is therefore a symbol of this localized, rooted vitality, a vital artifact we must nurture and reuse here on Earth before we can ethically project our consumption onto sterile celestial frontiers.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='takeaways'>
        <h2>Takeaways</h2>
        <p>
          Ultimately, the creation of this hybrid zine functions as an act of prophylactic photogrammetry: a deliberate pivot away from the extractive colonial mindset projected onto the cosmos and back toward the necessity of terrestrial reclamation. By physically juxtaposing the impossibly vast, modeled celestial targets with the intimate, flawed digital indexes of our Earthly resources (e.g., the failed attempt to capture water, the essential life of the potted plant), this zine underscores the deep moral and material failure of seeking expansion before conservation.
          <br/><br/>
          The final takeaway is that the "final frontier" is not an escape route but a false ideology: the greatest expansion of human possibility lies not in planting flags on sterile planets, but in the sustained appreciation, preservation, and reuse of the complex and life-giving artifacts that already constitute our only home.
        </p>
      </div>
    </PageTemplate>
  );
};

export default DecolonizeSpace;
