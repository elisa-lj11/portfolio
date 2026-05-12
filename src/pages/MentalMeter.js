// src/pages/MentalMeter.js
import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

import heroImageUrl from '../assets/images/mental-meter/mental-meter-hero.png';
import cadModelImageUrl from '../assets/images/mental-meter/cad-model.png';
import hardwarePrototypeImageUrl from '../assets/images/mental-meter/hardware-prototype.jpeg';
import systemDiagramImageUrl from '../assets/images/mental-meter/system-diagram.png';
import appUiImageUrl from '../assets/images/mental-meter/app-ui.png';

const PSYCHBATTERY_URL = 'https://psych-battery.vercel.app/';
const ACTIVITYWATCH_URL = 'https://activitywatch.net/';
const BEHANCE_URL = 'https://www.behance.net/gallery/249187247/Human-AI-Design-Methods-Mental-Meter';

const MentalMeter = () => {
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
        <h1>Mental Meter</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={heroImageUrl}
              alt='Mental Meter device on a desk'
              style={{ width: '100%', display: 'inline-block' }}
            />
          </figure>
        </div>
        <br></br>
        <p>
          Mental Meter is a physical ambient device that visualizes a knowledge worker's cognitive energy throughout the workday — using an e-ink battery display and LED ring to encourage recovery before depletion sets in.
        </p>
        <p>
          I worked in a team of four to design, build, and ship a functional prototype. I built the hardware integrating the e-ink display, and co-developed the Flask backend and companion web app.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='concept'>
        <h2>Concept</h2>
        <p>
          In AI-augmented hybrid workplaces, knowledge workers constantly context-switch between deep focus and high-responsiveness communication — often without any signal that their cognitive reserves are running low. Tools like Slack and email optimize for speed but fail to address the human experience of attention and burnout.
        </p>
        <p>
          Our core insight: <b>cognitive depletion is invisible until it's too late.</b> Mental Meter makes it peripheral and glanceable, transforming the battery metaphor into an ambient awareness tool. Seeing a depleted battery legitimizes taking a break rather than pushing through — shifting workers from reactive recovery (crashing after exhaustion) to proactive self-regulation.
        </p>
        <p>
          The design avoids gamification intentionally. The battery is an awareness signal, not a score — the device never interrupts, enforces, or prescribes.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='physical-device'>
        <h2>Physical Device</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={cadModelImageUrl}
              alt='Fusion 360 CAD model of Mental Meter'
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Fusion 360 CAD model</figcaption>
          </figure>
        </div>
        <p>
          We designed multiple CAD iterations in Fusion 360. I built the hardware prototype, integrating a CrowPanel e-ink display and RGB LED ring into a 3D-printed battery-shaped enclosure. E-ink was chosen for its low power draw, ambient readability, and distinctly non-screen feel.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={hardwarePrototypeImageUrl}
              alt='Mental Meter hardware prototype'
              style={{ width: '50%', display: 'inline-block' }}
            />
            <figcaption>Hardware prototype with e-ink display and LED ring</figcaption>
          </figure>
        </div>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='software-system'>
        <h2>Software System</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={systemDiagramImageUrl}
              alt='System diagram showing the Mental Meter feedback loop'
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>System diagram: awareness feedback loop</figcaption>
          </figure>
        </div>
        <p>
          <a target='_blank' rel='noopener noreferrer' href={ACTIVITYWATCH_URL}>ActivityWatch</a> passively captures app usage, away-from-keyboard time, and window focus. A Flask backend ingests this data and runs an ODE-based model tracking two variables — cognitive energy (E) and stress (S) — which evolve based on work and recovery signals. A circadian baseline calibrated to the user's chronotype personalizes the model over time.
        </p>
        <p>
          The backend sends energy and stress values to the e-ink display, updating the battery fill level and LED ring color. Early prototypes simply weighted raw ActivityWatch data; later iterations evolved into a two-model behavioral system combining the ODE energy/stress model with the personalized circadian baseline.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='web-app'>
        <h2>Companion Web App</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={appUiImageUrl}
              alt='Mental Meter companion web app UI'
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Companion app: activity breakdowns and circadian baseline</figcaption>
          </figure>
        </div>
        <p>
          The <a target='_blank' rel='noopener noreferrer' href={PSYCHBATTERY_URL}>companion app</a> mirrors the physical device and adds deeper analytics: circadian baseline visualization, activity breakdowns, phase portraits, and self-report tools for users without the hardware. The UI evolved from a retro aesthetic to a cleaner gradient-based design to better match the device's calm, ambient tone.
        </p>
        <p>
          Full project documentation is on our <a target='_blank' rel='noopener noreferrer' href={BEHANCE_URL}>Behance page</a>.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='reflections'>
        <h2>Reflections</h2>
        <ul>
          <li>
            <b>Metaphors carry implicit values.</b>
            <ul>
              <li>
                The battery is intuitive, but it risks making rest feel like "winning" energy management. We worked hard to keep the signal ambient and non-prescriptive so the device informs rather than instructs.
              </li>
            </ul>
          </li>
          <li>
            <b>Trust is a design material.</b>
            <ul>
              <li>
                User feedback flagged concerns about surveillance early. Simplifying the display logic and removing granular activity tracking made the device feel less like monitoring and more like a mirror — a critical distinction for workplace adoption.
              </li>
            </ul>
          </li>
          <li>
            <b>Physical form shapes the experience.</b>
            <ul>
              <li>
                The e-ink display's non-screen quality was central to the device feeling ambient rather than demanding. Small material choices (matte finish, no backlight) quietly shaped how users related to the information.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </PageTemplate>
  );
};

export default MentalMeter;
