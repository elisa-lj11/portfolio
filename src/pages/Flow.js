// src/pages/Flow.js
import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

import flowHeroImageUrl from '../assets/images/flow/flow-hero.png';
import conceptSketchImageUrl from '../assets/images/flow/concept-sketch.JPEG';
import breadboardImageUrl from '../assets/images/flow/breadboard.JPEG';
import componentLayoutImageUrl from '../assets/images/flow/component-layout-sketch.jpg';
import componentsBoxImageUrl from '../assets/images/flow/components-box.jpg';
import cardboardOvalImageUrl from '../assets/images/flow/taped-oval.jpg';
import tableSawImageUrl from '../assets/images/flow/table-saw.jpg';
import drillPressImageUrl from '../assets/images/flow/drill-press.jpg';
import componentsInPocketsImageUrl from '../assets/images/flow/components-in-pockets.jpg';
import beltSanderImageUrl from '../assets/images/flow/belt-sander.jpg';
import beforeAfterSandingImageUrl from '../assets/images/flow/before-after-sanding.jpg';
import componentsInPlaceImageUrl from '../assets/images/flow/screwed-components.jpg';
import touchdesignerImageUrl from '../assets/images/flow/touchdesigner.png';
import flowInHandImageUrl from '../assets/images/flow/flow-in-hand.JPG';

const ESP32_URL = 'https://learn.adafruit.com/adafruit-esp32-feather-v2';
const MPU_URL = 'https://www.adafruit.com/product/3886';
const HAPTIC_URL = 'https://www.sparkfun.com/sparkfun-qwiic-haptic-driver-da7280.html';
const TOUCHDESIGNER_URL = 'https://derivative.ca/';
const FLOW_DEMO_EMBED_URL = 'https://www.youtube.com/embed/rPztv4rPpMI?si=D3mskzKZJ04PHNeR';
const PROJECT_FILES_URL = 'https://drive.google.com/drive/folders/1tRif2pXJzPHDbcAVN9vTRIrrEHPHt0SZ?usp=sharing';

const Flow = () => {
  const [refs, setRefs] = useState([]);

  const generateRefsFromDOM = (generateRefsFunction) => {
    generateRefsFunction();
  };

  return (
    <PageTemplate
      refs={refs}
      setRefs={setRefs}
      generateRefsFromDOM={generateRefsFromDOM}
    >
      <div className="section" id='overview'>
        <h2 style={{ display: 'none' }}>Overview</h2>
        <h1>flow</h1>
        <div className="video-youtube">
          <iframe className="responsive-iframe" src={FLOW_DEMO_EMBED_URL} title="flow Demo" frameBorder="0" allow="autoplay; encrypted-media;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <p>
          "flow" is an embodied interactive system that transforms a user's movement into real-time visual and haptic feedback.
        </p>
        <p>
          I worked in a team of three to develop a high-fidelity prototype of flow. I owned the hardware and software development that powered its interactions.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='context'>
        <h2>Concept</h2>
        <figure>
          <img src={conceptSketchImageUrl} alt='Concept Sketch' />
          <figcaption>Concept sketch</figcaption>
        </figure>
        <p>
          In a moment where people are constantly under pressure to perform and plan for the future, there is little time to pause and reflect in the present. We hoped to blend technology, materiality, and calming visuals to encourage people to slow down and breathe with their bodies. Inspired by bioluminescent plankton and the calming movement of water, we wanted our device to evoke the feeling of touching the surface of a magically realistic fluid body and to encourage immersion within a more peaceful moment.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='hardware-setup'>
        <h2>Hardware Setup</h2>
        <figure>
          <img src={breadboardImageUrl} alt='Breadboard with Components' />
          <figcaption>Breadboard with components</figcaption>
        </figure>
        <p>
          I used an <a target='_blank' rel='noopener noreferrer' href={ESP32_URL}>ESP32 Feather v2</a> microcontroller to handle input from an <a target='_blank' rel='noopener noreferrer' href={MPU_URL}>MPU 6050 IMU sensor</a> (an integrated accelerometer/gyroscope sensor). Every 10 milliseconds, the ESP32 received 6 points of data from the IMU sensor (acceleration along the x, y, and z axes; and gyroscopic rotation along the x, y, and z axes). The ESP32 processed these 6 points into a single "intensity" metric that would determine the strength of the <a target='_blank' rel='noopener noreferrer' href={HAPTIC_URL}>SparkFun Qwicc Haptic Driver (DA7280)</a> vibration feedback.
        </p>
        <p>
          After testing that these individual components worked with basic Arduino sketches, I connected them together via I2C wires for efficient and streamlined serial communication, and I integrated the sketches. The ESP32 converted the accelerometer x and y inputs into pitch and roll values that could be sent via UDP over WiFi to our visualization software, TouchDesigner.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='case-iteration'>
        <h2>Iterating Through Cases</h2>
        <figure>
          <img src={componentLayoutImageUrl} alt='Component Layout Sketch' />
          <figcaption>Component layout sketch</figcaption>
        </figure>
        <p>
          We planned to encase our electronics inside of a wooden box since we wanted the form to feel as organic as possible.
        </p>
        <figure>
          <img src={componentsBoxImageUrl} alt='Components Box' style={{ maxWidth: '60%' }} />
          <figcaption>Laser-cut box for components</figcaption>
        </figure>
        <p>
          First we prototyped a simple laser-cut box to test the component fit and wood resonance. Then, we explored different shapes, some more symmetrical than others, and cut them out of cardboard.
        </p>
        <figure>
          <img src={cardboardOvalImageUrl} alt='Cardboard Case Prototype' style={{ maxWidth: '60%' }} />
          <figcaption>Cardboard case prototype</figcaption>
        </figure>
        <p>
          We settled on an asymmetrical, stone-like shape that would still fit around the components but lend itself to a more ergonomic hold than the box or symmetrical shapes.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='wood-form'>
        <h2>Final Wooden Form</h2>
        <div className="img-row">
          <figure>
            <img src={tableSawImageUrl} alt='Table Saw' />
            <figcaption>Table saw</figcaption>
          </figure>
          <figure>
            <img src={drillPressImageUrl} alt='Drill Press' />
            <figcaption>Drill press</figcaption>
          </figure>
        </div>
        <figure>
          <img src={componentsInPocketsImageUrl} alt='Components in Pockets' />
          <figcaption>Components in pockets</figcaption>
        </figure>
        <p>
          Using found materials in our woodshop, we took a scrap of 2 by 4 wood and cut with a table saw into a square shape, then cut that square shape into 2 halves. We used the drill press to carve out a pocket in each of the halves to fit the components. We also used the drill press to cut out 2 holes in each half to insert press-fit magnets so the halves could snap together but also separate when we needed to access the components.
        </p>
        <div className="img-row">
          <figure>
            <img src={beltSanderImageUrl} alt='Belt Sander' />
            <figcaption>Belt sander</figcaption>
          </figure>
          <figure>
            <img src={beforeAfterSandingImageUrl} alt='Before and After Sanding' />
            <figcaption>Before and after sanding</figcaption>
          </figure>
        </div>
        <p>
          We used the belt sander to carve the halves into a rounded, natural shape. We applied wood stain as a finish to bring out the rings already present in the wood.
        </p>
        <figure>
          <img src={componentsInPlaceImageUrl} alt='Components in Place' style={{ maxWidth: '60%' }} />
          <figcaption>Components in place</figcaption>
        </figure>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='touchdesigner'>
        <h2>TouchDesigner</h2>
        <figure>
          <img src={touchdesignerImageUrl} alt='TouchDesigner Tweaks' />
          <figcaption>TouchDesigner tweaks</figcaption>
        </figure>
        <p>
          We built our visualization in <a target='_blank' rel='noopener noreferrer' href={TOUCHDESIGNER_URL}>TouchDesigner</a>, a block-coding visual development platform. We started with a particle field that could be manipulated via x and y coordinates fed from the device. After fine-tuning the responsiveness of movement with manipulation of the particle field, we experimented with different forces and colors by modifying code block parameters in order to create the effect of bioluminescent plankton floating in a rippling ocean.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='final-prototype'>
        <h2>Final Prototype</h2>
        <figure>
          <img src={flowInHandImageUrl} alt='flow In Hand' />
        </figure>
        <p>
          The final prototype, named flow, is an embodied, interactive device that translates real-time movement into a beautiful, calming visualization. "flow" responds to rotational movement (pitch and roll) which is mapped to motion between particles within an x-y coordinate plane, all visualized in TouchDesigner. Along with visual feedback, a user receives subtle haptic feedback whenever they move the device, inviting them to explore virtually infinite interactions with the screen and feel present in their bodies.
        </p>
        <figure>
          <img src={flowHeroImageUrl} alt='flow Hero Shot' />
        </figure>
        <p>
          All project files are contained in this <a target='_blank' rel='noopener noreferrer' href={PROJECT_FILES_URL}>Google Drive folder</a>.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='reflections'>
        <h2>Reflections</h2>
        <ul>
          <li>
            <b>Take a step back sometimes.</b>
            <ul>
              <li>
                As an engineer, I can sometimes tunnel-vision on the implementation and functionality of a product. I was fortunate to work with two design-first teammates who encouraged me to take a step back and see the bigger picture of what a user should "feel" (e.g., opting for a larger screen during our showcase, perfecting the wood sanding, etc.).
              </li>
            </ul>
          </li>
          <li>
            <b>Experiment widely with aesthetics.</b>
            <ul>
              <li>
                I was grateful to work with a program as robust as TouchDesigner, which allowed us to experiment easily with all kinds of colors, forces, particle effects, and responsiveness to achieve the aesthetic we hoped for. I also wish I could have spent even more time exploring different operations available within TouchDesigner; perhaps, we could have used something other than a particle effect to get an even greater fluid resemblance.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </PageTemplate>
  );
};

export default Flow;
