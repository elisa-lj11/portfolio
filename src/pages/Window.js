// src/pages/_SamplePage.js
// Copy this page to create a new project page using standard formatting
import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

import hiFiPrototypeScreenshotImageUrl from '../assets/images/window/hi-fi-prototype-screenshot.png';
import needfindingMapImageUrl from '../assets/images/window/needfinding-map.png';
import ep1ImageUrl from '../assets/images/window/ep1.png';
import ep2ImageUrl from '../assets/images/window/ep2.png';
import ep3ImageUrl from '../assets/images/window/ep3.png';
import conceptSketchHeadsetImageUrl from '../assets/images/window/concept-sketch-headset.png';
import conceptSketchStoreImageUrl from '../assets/images/window/concept-sketch-store-projection.png';
import conceptSketchWearableImageUrl from '../assets/images/window/concept-sketch-wearable.png';
import conceptSketchMobileImageUrl from '../assets/images/window/concept-sketch-mobile.png';
import lowFiSimpleTaskFlowImageUrl from '../assets/images/window/low-fi-simple-task-flow.png';
import lowFiModerateTaskFlowImageUrl from '../assets/images/window/low-fi-moderate-task-flow.png';
import lowFiComplexTaskFlowImageUrl from '../assets/images/window/low-fi-complex-task-flow.png';
import storyboardImageUrl from '../assets/images/window/storyboard.jpg';
import lowFiPrototypeImageUrl from '../assets/images/window/low-fi-prototype.png';
import lowFiFlowImageUrl from '../assets/images/window/low-fi-flow.png';
import medFiSimpleTaskFlowImageUrl from '../assets/images/window/med-fi-simple-task-flow.png';
import medFiModerateTaskFlowImageUrl from '../assets/images/window/med-fi-moderate-task-flow.png';
import medFiComplexTaskFlowImageUrl from '../assets/images/window/med-fi-complex-task-flow.png';
import windowWebsiteImageUrl from '../assets/images/window/window-website.png';
import heuristicViolationsImageUrl from '../assets/images/window/heuristic-violations.png';
import hiFiPrototypeMarkerImageUrl from '../assets/images/window/hi-fi-prototype-marker.png';
import hiFiSimpleTaskFlowImageUrl from '../assets/images/window/hi-fi-simple-task-flow.png';
import hiFiModerateTaskFlow1ImageUrl from '../assets/images/window/hi-fi-moderate-task-flow-1.png';
import hiFiModerateTaskFlow2ImageUrl from '../assets/images/window/hi-fi-moderate-task-flow-2.png';
import hiFiComplexTaskFlow1ImageUrl from '../assets/images/window/hi-fi-complex-task-flow-1.png';
import hiFiComplexTaskFlow2ImageUrl from '../assets/images/window/hi-fi-complex-task-flow-2.png';
import windowPosterImageUrl from '../assets/images/window/window-poster.png';

const HCI_CLASS_URL = 'https://hci.stanford.edu/courses/cs147/2016/au/';
const WINDOW_CONCEPT_VIDEO_EMBED_URL = 'https://www.youtube.com/embed/w4h3qxlXQhY?si=nNUvJKlMIMrlfmz-';
const SKETCH_URL = 'https://www.sketch.com/';
const INVISION_URL = 'https://www.invisionapp.com/';
const WINDOW_WEBSITE_URL = 'https://hci.stanford.edu/courses/cs147/2016/au/projects/MixedReality/Window/';
const XCODE_URL = 'https://developer.apple.com/xcode/';
const ARTOOLKIT_URL = 'https://github.com/elisa-lj11/Window/blob/3f7ac125b405bcfd6a46eb2f2a47f5d5726a06b5/README%20(ARToolKit%20for%20iOS).txt';
const MAYA_URL = 'https://www.autodesk.com/products/maya/overview';
const WINDOW_GITHUB_URL = 'https://github.com/elisa-lj11/Window';

const Window = () => {
  const [refs, setRefs] = useState([]);

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
        <h2 style={{ display: 'none' }}>Overview</h2>
        <h1>"Window": An AR Clothes Shopping App</h1>
        <img src={hiFiPrototypeScreenshotImageUrl} alt='Window Hi-Fi prototype' width='40%'/>
        <br></br>
        <p>
          In my Stanford undergraduate studies, I took "<a target='_blank' rel='noopener noreferrer' href={HCI_CLASS_URL}>CS 147</a>: Design Thinking for User Experience Design, Prototyping & Evaluation." In this course, my team of three applied design thinking to a quarter-long project focused on mixed reality and human-computer interaction. Over the course of 10 weeks, we moved from ideation to prototyping and ultimately showcased our high-fidelity mobile app at a public fair.
        </p>
        <p>
          Our final product used augmented reality on a mobile platform to place a personalized mannequin in a storefront's window so users can easily view what a store has to offer. This project allowed me to deepen my understanding of the iterative design process while continuing to develop my skills in mixed reality technologies, an area I had already begun working in but was eager to expand further.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='first-section'>
        <h2>Needfinding</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={needfindingMapImageUrl}
              alt='Initial needfinding map'
              style={{ width: '80%', display: 'inline-block' }}
            />
            <figcaption>Initial needfinding map</figcaption>
          </figure>
        </div>
        <p>
          When our group first came together, we began with some initial needfinding to define the direction of our project. We created an empathy map (seen above), which revealed that informative visualization could serve as a solid foundation for our application. Focusing on the shopping experience, we conducted additional needfinding interviews at the Stanford Shopping Center. We spoke with a diverse group of people, including a mother from Hawaii, a man from Sweden, and a group of eighth-grade girls, all of whom expressed similar frustrations with shopping.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='pov-hmw'>
        <h2>"POV"s and "HMW"s</h2>
        <p>
          We refined our focus from technology (Informative Visualization) to a practical problem—enhancing the online shopping experience by allowing users to visualize items before purchasing. We then held interviews with both consumers and retail employees to collect the following "Point of View" statements:
        </p>
        <ol>
          <li>
            A Macy's employee shared that many customers find the shopping experience frustrating, especially when they can't locate specific items in the store quickly. Making it easier for customers to find items would be a game changer.
          </li>
          <li>
            A shopper waiting outside a store expressed a dislike for shopping but prefers in-person experiences over online due to mistrust of reviews. Developing a system to minimize time spent in stores would significantly improve the experience for shoppers like him.
          </li>
          <li>
            An avid online shopper struggles with clothing purchases due to unpredictable sizing. A solution that helps determine how clothing will fit before buying online would be transformative.
          </li>
        </ol>
        <p>
          These conversations highlighted key issues, including the time wasted on unproductive shopping. Based on these insights, we drafted several “How Might We” (HMW) statements to address our interviewees' gripes with shopping:
        </p>
        <ol type='1'>
          <li>
            <b>How might we make it easier for people to find clothes online that fit?</b>
          </li>
          <li>
            <b>How might we make shopping more enjoyable by gamifying the experience?</b>
          </li>
          <li>
            <b>How might we help customers find items in stores more easily?</b>
          </li>
        </ol>
        <p>
          From here, we developed three experience prototypes, which are explained in the next section.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='experience-prototypes'>
        <h2>Experience Prototypes</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={ep1ImageUrl}
              alt='Experience prototype 1'
              style={{ width: '90%', display: 'inline-block', marginRight: '2%' }}
            />
            <figcaption>EP #1: Sharing virtual clothes from a closet with friends</figcaption>
          </figure>
          <figure>
            <img
              src={ep2ImageUrl}
              alt='Experience prototype 2'
              style={{ width: '90%', display: 'inline-block' }}
            />
            <figcaption>EP #2: Trying on virtual clothes from a store</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={ep3ImageUrl}
              alt='Experience prototype 3'
              style={{ width: '80%', display: 'inline-block' }}
            />
            <figcaption>EP #3: Using an AR mannequin to display outfits</figcaption>
          </figure>
        </div>
        <p>
          We created three different experience prototypes to explore various aspects of the shopping experience (seen above). These included a virtual closet where users could add their own clothes for friends to view, trying on virtual clothes from a store, and using an AR mannequin to display outfits. We conducted field testing with users, and after several rounds of iteration, we chose to move forward with EP #3: the AR mannequin prototype. It was the most intuitive option, and one of our users, without prompting, mentioned she would love to use something like it, reinforcing our decision.
        </p>
        <p>
          Once we agreed to implement EP #3, we developed our low-fidelity prototype.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='low-fi-prototype'>
        <h2>Low-Fidelity Prototype</h2>
        <p>
          We branded ourselves as <b>Window</b>, and we defined our mission/problem/solution/value proposition:
        </p>
        <ul>
          <li>
            <b>Mission:</b> See where your style takes you.
          </li>
          <li>
            <b>Problem:</b> Shopping is frustrating when hours of searching yield nothing appealing.
          </li>
          <li>
            <b>Solution:</b> Using augmented reality, we place a custom mannequin in the storefront window to easily showcase a store's offerings.
          </li>
          <li>
            <b>Value Proposition:</b> Window shopping made easier.
          </li>
        </ul>
        <h3>Concept Sketches</h3>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={conceptSketchHeadsetImageUrl}
              alt='Concept sketch: headset'
              style={{ width: '90%', display: 'inline-block', marginRight: '2%' }}
            />
            <figcaption>Concept sketch: headset</figcaption>
          </figure>
          <figure>
            <img
              src={conceptSketchStoreImageUrl}
              alt='Concept sketch: store projector'
              style={{ width: '90%', display: 'inline-block' }}
            />
            <figcaption>Concept sketch: store projector</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={conceptSketchWearableImageUrl}
              alt='Concept sketch: wearable'
              style={{ width: '90%', display: 'inline-block', marginRight: '2%' }}
            />
            <figcaption>Concept sketch: wearable</figcaption>
          </figure>
          <figure>
            <img
              src={conceptSketchMobileImageUrl}
              alt='Concept sketch: mobile'
              style={{ width: '90%', display: 'inline-block' }}
            />
            <figcaption>Concept sketch: mobile</figcaption>
          </figure>
        </div>
        <p>
          Once we had narrowed in on a problem and solution for shopping, we brainstormed different design mediums for our idea. We made sketches for our application on a headset, a store projector, a wearable, and a mobile device (seen above).
        </p>
        <p>
          After reviewing these initial sketches, we decided to proceed with a mobile application for three reasons:
        </p>
        <ol>
          <li>
            Smart phones are exponentially more accessible than our other options.
          </li>
          <li>
            Smart phones have more AR support than the other devices.
          </li>
          <li>
            Smart phones lend themselves to social features that the other mediums do not.
          </li>
        </ol>
        <h3>Task Flows</h3>
        <p>
          We then designed three tasks of varying complexities:
        </p>
        <ol>
          <li>
            <b>Simple Task: Browsing for clothes</b>—scanning a storefront and viewing their selection.
          </li>
          <li>
            <b>Moderate Task: Looking for a new outfit</b>—specifying style and price range.
          </li>
          <li>
            <b>Complex Task: Shopping for someone else and asking for opinions</b>—customizing an outfit and sharing with friends.
          </li>
        </ol>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={lowFiSimpleTaskFlowImageUrl}
              alt='Low-fi Simple Task Flow'
              style={{ width: '70%', display: 'inline-block' }}
            />
            <figcaption>Low-fi simple task flow</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={lowFiModerateTaskFlowImageUrl}
              alt='Low-fi Moderate Task Flow'
              style={{ width: '70%', display: 'inline-block' }}
            />
            <figcaption>Low-fi moderate task flow</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={lowFiComplexTaskFlowImageUrl}
              alt='Low-fi Complex Task Flow'
              style={{ width: '70%', display: 'inline-block' }}
            />
            <figcaption>Low-fi complex task flow</figcaption>
          </figure>
        </div>
        <h3>Concept Video</h3>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={storyboardImageUrl}
              alt='Concept video storyboard'
              style={{ width: '80%', display: 'inline-block' }}
            />
            <figcaption>Concept video storyboard</figcaption>
          </figure>
        </div>
        <p>
          We also produced a concept video for Window.
        </p>
        <div className="video-youtube">
          <iframe className="responsive-iframe" src={WINDOW_CONCEPT_VIDEO_EMBED_URL} title="Window Concept Video" frameBorder="0" allow="autoplay; encrypted-media;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <br />
        <h3>Low-Fidelity Prototype Screens</h3>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={lowFiPrototypeImageUrl}
              alt='Low-fi prototype'
              style={{ width: '80%', display: 'inline-block' }}
            />
            <figcaption>Low-fi prototype</figcaption>
          </figure>
        </div>
        <p>
          We developed our low-fidelity prototype using paper screens and cut-out printed clothing options. Users began by scanning a store name, which led them to a home screen where they could start shopping or filter options. After selecting how to browse, the app displayed a mannequin in augmented reality through the camera. Users swiped through clothing, viewed item details, added articles to their virtual closet, or shared outfits with friends. Clicking on an item revealed sizing, prices, availability, and brand information, along with a barcode for quick identification at checkout. Additionally, swiping from the left opened a navigation drawer to access their virtual closet, friends, settings, and logout options.
        </p>
        <p>
          We designed each screen to flow through our three user tasks so that we could conduct our first round of user testing.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={lowFiFlowImageUrl}
              alt='Low-fi example flow'
              style={{ width: '80%', display: 'inline-block' }}
            />
            <figcaption>Low-fi example flow</figcaption>
          </figure>
        </div>
        <h3>User Testing</h3>
        <p>
          After completing our low-fidelity prototype, we returned to the Stanford Shopping Center to let random shoppers test our application. We assigned them our three tasks and allowed them to navigate the app independently, assisting only when they initiated a click since the paper prototype required manual screen changes.
        </p>
        <p>
          From the testing results, we identified several issues:
        </p>
        <ul>
          <li>
            The original process of scanning a store name and clicking it to start shopping confused them, as they preferred immediate access to AR.
            <ul>
              <li>
                Users needed quicker access to the AR viewport.
              </li>
            </ul>
          </li>
          <li>
            Users often clicked arrows instead of swiping to see more clothing options.
            <ul>
              <li>
                Swiping on clothing options should be more intuitive.
              </li>
            </ul>
          </li>
          <li>
            The closet feature was misunderstood as a purchasing mechanism instead of a "favoriting" tool.
            <ul>
              <li>
                The closet feature should be distinguished from making a purchase.
              </li>
            </ul>
          </li>
        </ul>
        <p>
          With this valuable feedback, we progressed to our medium-fidelity prototype.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='med-fi-prototype'>
        <h2>Medium-Fidelity Prototype</h2>
        <p>
          We developed our medium-fidelity prototype using <a target='_blank' rel='noopener noreferrer' href={SKETCH_URL}>Sketch</a> for graphic design and <a target='_blank' rel='noopener noreferrer' href={INVISION_URL}>InVision</a> for mobile prototyping, enabling seamless navigation between screens based on user input. We incorporated feedback from user testing to implement design changes, including direct access to AR shopping when clicking “Start Shopping,” a slide-up menu for filters and custom measurements, and a simplified closet feature represented by a plus button. Additionally, we added the option for users to customize their mannequin measurements as requested. Below are the updated task flows for our medium-fidelity prototype.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={medFiSimpleTaskFlowImageUrl}
              alt='Med-fi Simple Task Flow'
              style={{ width: '70%', display: 'inline-block' }}
            />
            <figcaption>Med-fi simple task flow</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={medFiModerateTaskFlowImageUrl}
              alt='Med-fi Moderate Task Flow'
              style={{ width: '70%', display: 'inline-block' }}
            />
            <figcaption>Med-fi moderate task flow</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={medFiComplexTaskFlowImageUrl}
              alt='Med-fi Complex Task Flow'
              style={{ width: '70%', display: 'inline-block' }}
            />
            <figcaption>Med-fi complex task flow</figcaption>
          </figure>
        </div>
        <h3>Website</h3>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={windowWebsiteImageUrl}
              alt='Window website'
              style={{ width: '80%', display: 'inline-block' }}
            />
            <figcaption>Window website</figcaption>
          </figure>
        </div>
        <p>
          We also deployed a <a target='_blank' rel='noopener noreferrer' href={WINDOW_WEBSITE_URL}>website</a> for Window to demonstrate our progress through the iterative design process. We uploaded our med-fi prototype to our website so that we could collect heuristic evaluations from our classmates. 
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='heurisitc-evaluation'>
        <h2>Heuristic Evaluation</h2>
        <p>
          In this phase, four evaluators tested our InVision prototype, identifying 37 heuristic violations across ten categories:
        </p>
        <ol>
          <li>
            Visibility of Status
          </li>
          <li>
            Match System & World
          </li>
          <li>
            User Control
          </li>
          <li>
            Consistency
          </li>
          <li>
            Error Prevention
          </li>
          <li>
            Recognition not Recall
          </li>
          <li>
            Efficiency of Use
          </li>
          <li>
            Minimalist Design
          </li>
          <li>
            Help Users with Errors
          </li>
          <li>
            Documentation
          </li>
        </ol>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={heuristicViolationsImageUrl}
              alt='Heuristic Violations Summary'
              style={{ width: '60%', display: 'inline-block' }}
            />
            <figcaption>Heuristic violations summary</figcaption>
          </figure>
        </div>
        <p>
          An example of feedback received:
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p style={{ marginLeft: '10%', marginRight: '10%', textAlign: 'justify' }}>
            <b>[H3: User Control][Severity: 3]</b>
            <br />
            <i>Evaluators: 1, 2, 3, 4</i>
            <br />
            <br />
            Confused as to what the plus button does, is there a quick way to star or favorite an item and come back to it? If it adds to the closet, make it more clear that that is what it's doing.
            <br />
            <br />
            Fix: Pop up text saying that it has been added to your closet, or just an overlayed icon. Be more intentional
            about the iconography. 
          </p>
        </div>
        <p>
          A summary of suggestions for our prototype:
        </p>
        <ul>
          <li>
            The app's minimal and aesthetically pleasing design makes it intuitive and easy to use, with minor violations stemming from the focus on minimalism for AR functionality.
          </li>
          <li>
            Consistent color scheme and typography align with iOS standards, but slight adjustments could enhance UI consistency.
          </li>
          <li>
            The purpose of the virtual closet is unclear—whether it represents a shopping cart, fitting room, or closet depends on user intention.
          </li>
          <li>
            Clarifying the difference between sharing or adding a complete outfit versus a single clothing item would improve the user experience.
          </li>
          <li>
            A short tutorial and AR integration with custom-fit clothes on user photos would make the app more engaging and personal.
          </li>
        </ul>
        <p>
          We carefully considered each of the 37 violations and designated action items to incorporate into our high-fidelity prototype. Our main changes were the following:
        </p>
        <ul>
          <li>
            Users no longer need to log in to access AR functionality.
          </li>
          <li>
            The closet feature was temporarily removed due to user confusion about its purpose.
          </li>
          <li>
            Filtering options were added to the main shopping screen for quick adjustments.
          </li>
          <li>
            Users could share outfit images via text directly from the app.
          </li>
          <li>
            One-time profile creation was introduced to streamline user measurements.
          </li>
        </ul>
        <p>

        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='hi-fi-prototype'>
        <h2>High-Fidelity Prototype</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={hiFiPrototypeMarkerImageUrl}
              alt='Hi-fi prototype labeled'
              style={{ width: '70%', display: 'inline-block' }}
            />
            <figcaption>Hi-fi prototype with marker</figcaption>
          </figure>
        </div>
        <p>
          Our hi-fi prototype was developed in <a target='_blank' rel='noopener noreferrer' href={XCODE_URL}>XCode</a> using Objective-C due to constraints from the <a target='_blank' rel='noopener noreferrer' href={ARTOOLKIT_URL}>ARToolkit SDK</a> (no longer supported). 3D models for clothing items were generated with <a target='_blank' rel='noopener noreferrer' href={MAYA_URL}>Maya</a>. ARToolKit SDK was used for marker detection and rendering 3D objects based on marker location, though it had limitations in detecting touch on 3D models and loading complex ones. A Wizard of Oz technique was used for interactions, faking Optical Character Recognition (OCR) and simulating touch interactions on the screen. Hard-coded data was used for user profiles, store maps, filtering options, and 3D object loading, instead of dynamic generation. The project faced issues with ARToolKit's OpenGL wrappers and limitations in accurately detecting user taps on 3D objects.
        </p>
        <p>
          The hi-fi prototype code repository is available on <a target='_blank' rel='noopener noreferrer' href={WINDOW_GITHUB_URL}>GitHub</a>.
        </p>
        <p>
          Our updated task flows using our hi-fi prototype are below.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={hiFiSimpleTaskFlowImageUrl}
              alt='Hi-fi simple task flow'
              style={{ width: '80%', display: 'inline-block' }}
            />
            <figcaption>Hi-fi simple task flow</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={hiFiModerateTaskFlow1ImageUrl}
              alt='Hi-fi moderate task flow 1'
              style={{ width: '80%', display: 'inline-block' }}
            />
            <figcaption>Hi-fi moderate task flow</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={hiFiModerateTaskFlow2ImageUrl}
              alt='Hi-fi moderate task flow 2'
              style={{ width: '80%', display: 'inline-block' }}
            />
            <figcaption>Hi-fi moderate task flow (cont.)</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={hiFiComplexTaskFlow1ImageUrl}
              alt='Hi-fi complex task flow 1'
              style={{ width: '80%', display: 'inline-block' }}
            />
            <figcaption>Hi-fi complex task flow</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={hiFiComplexTaskFlow2ImageUrl}
              alt='Hi-fi complex task flow 2'
              style={{ width: '80%', display: 'inline-block' }}
            />
            <figcaption>Hi-fi complex task flow (cont.)</figcaption>
          </figure>
        </div>
        <p>
          Due to time constraints leading up to our end-of-quarter project fair, we were unable to implement everything we had planned. Custom clothing measurements, which would allow users to see how items fit different body types, had to be left out of the high-fidelity prototype, though it would be a top priority for future updates. We also set aside store scanning features, which would require collaboration with stores and recognition technology, to focus on core functionality. Finally, our "virtual closet" concept, intended for favoriting and revisiting items across store locations, was postponed.
        </p>
        <p>
          All in all, we finally had a working AR-enabled prototype ready to present to the world.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='fair'>
        <h2>Project Fair</h2>
        <p>
          We delivered a 30-second pitch at the CS 147 project fair alongside 44 other project teams. We also ran a demo table for attendees to try out our prototype and learn about our process.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={windowPosterImageUrl}
              alt='Window poster'
              style={{ width: '60%', display: 'inline-block' }}
            />
            <figcaption>Window poster</figcaption>
          </figure>
        </div>
        <p>
          After 10 weeks of late nights and constant iteration, we were proud to take our AR window shopping concept from a paper prototype to a functional app. It was an intense but rewarding process, where we gained experience in design strategies, teamwork, marketing, and collaborative coding.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='reflections'>
        <h2>Reflections</h2>
        <ul>
          <li>
            <b>Step outside of your comfort zone when seeking user insights.</b>
            <ul>
              <li>
                Initially, I was hesitant to approach strangers for feedback on our app, but I was pleasantly surprised by how willing many of them were to help. Engaging with people outside of my bubble provided valuable insights into the diverse use cases for our app.
              </li>  
            </ul>
          </li>
          <li>
            <b>Let go of unproductive ideas.</b>
            <ul>
              <li>
                We invested too much time trying to refine our "Closet" feature for better user understanding, rather than asking users whether it would be useful to them. If we had prioritized gathering feedback on this feature earlier, we might have recognized its lack of appeal sooner and avoided the frustration of attempting to improve something that users didn't really want.
              </li>  
            </ul>
          </li>
          <li>
            <b>Hype can work wonders!</b>
            <ul>
              <li>
                While we may not have achieved all our personal goals for the app, we generated enough excitement that users were more enthusiastic about its potential than any shortcomings. In such a short development cycle, it was incredibly motivating to see our users eagerly anticipating the next version of our prototype!
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </PageTemplate>
  );
};

export default Window;