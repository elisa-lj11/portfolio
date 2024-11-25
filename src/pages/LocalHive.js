// src/pages/LocalHive.js
import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

import needfindingInterviewsImageUrl from '../assets/images/local-hive/needfinding-interviews.png';
import initialSynthesisImageUrl from '../assets/images/local-hive/initial-synthesis.jpg';
import affinityMapImageUrl from '../assets/images/local-hive/affinity-map.jpg';
import leaderEmpathyMapImageUrl from '../assets/images/local-hive/community-leader-empathy-map.png';
import memberEmpathyMapImageUrl from '../assets/images/local-hive/community-member-empathy-map.png';
import journeyMapStickyNotesImageUrl from '../assets/images/local-hive/2-by-2-journey-map-sticky-notes.png';
import journeyMapCondensedImageUrl from '../assets/images/local-hive/2-by-2-journey-map-condensed.png';
import hmwIdeationImageUrl from '../assets/images/local-hive/hmw-ideation.jpg';
import hmwAffinityGroupingImageUrl from '../assets/images/local-hive/hmw-affinity-grouping.jpg';
import hmwSolutionBrainstormImageUrl from '../assets/images/local-hive/hmw-solution-brainstorm.png';
import hmwSolutionFinalIdeasImageUrl from '../assets/images/local-hive/hmw-solution-final-ideas.png';
import e1Prototype1ImageUrl from '../assets/images/local-hive/e1-prototype-1.png';
import e1Prototype2ImageUrl from '../assets/images/local-hive/e1-prototype-2.png';
import conceptSketchesImageUrl from '../assets/images/local-hive/concept-sketches.png';
import uiSketch1ImageUrl from '../assets/images/local-hive/ui-sketch-1.jpg';
import uiSketch2ImageUrl from '../assets/images/local-hive/ui-sketch-2.jpg';
import uiSketch3ImageUrl from '../assets/images/local-hive/ui-sketch-3.jpg';
import easyTaskFlowImageUrl from '../assets/images/local-hive/easy-task-flow.png';
import mediumTaskFlowImageUrl from '../assets/images/local-hive/medium-task-flow.png';
import complexTaskFlowImageUrl from '../assets/images/local-hive/complex-task-flow.png';
import lowFiOverviewImageUrl from '../assets/images/local-hive/low-fi-overview.jpg';
import medFi1FigmaOverviewImageUrl from '../assets/images/local-hive/med-fi-1-figma-overview.png';
import medFi1JoinTaskFlowImageUrl from '../assets/images/local-hive/med-fi-1-join-task-flow.png';
import medFi1CreateTaskFlowImageUrl from '../assets/images/local-hive/med-fi-1-create-task-flow.png';
import medFi1MonitorTaskFlowImageUrl from '../assets/images/local-hive/med-fi-1-monitor-task-flow.png';
import medFi2FigmaOverviewImageUrl from '../assets/images/local-hive/med-fi-2-figma-overview.png';
import heuristicViolationsImageUrl from '../assets/images/local-hive/heuristic-violations.png';
import medFi1HomeImageUrl from '../assets/images/local-hive/med-fi-1-home.png';
import medFi2HomeImageUrl from '../assets/images/local-hive/med-fi-2-home.png';
import medFi3HomeImageUrl from '../assets/images/local-hive/med-fi-3-home.png';
import fullAppThumbnailImageUrl from '../assets/images/local-hive/full-app-thumbnail.png';
import fullAppVideoUrl from '../assets/images/local-hive/full-app.mp4';
import appWebsiteImageUrl from '../assets/images/local-hive/app-website.png';
import posterImageUrl from '../assets/images/local-hive/poster.png';

const FIGMA_EMBED_URL = 'https://embed.figma.com/proto/3kFM2Rku8FVGHng69FMslw/MidFi-(Final-Draft)?node-id=7-8&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&embed-host=share&client-id=W0bOyp7s8UCjcCHJYXANQr';
const HCI_CLASS_URL = 'https://hci.stanford.edu/courses/cs377e/2019/sp/';
const FIGMA_MEDFI_1_URL = 'https://www.figma.com/proto/ISM4ITEIjEmCWPJzAwXgneCa/MidFi?node-id=46-8&node-type=canvas&t=UM1cFDasWXdlhJmJ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1';
const FIGMA_MEDFI_2_URL = 'https://www.figma.com/proto/bNHJX5jYid0RXOPx7Y1bab/MidFi-2?node-id=153-90&node-type=canvas&t=UXP0hEhQLf8r8pON-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1';
const FIGMA_MEDFI_3_URL = 'https://www.figma.com/proto/VYpOKOfXgN9EMJZHS87aiP/MidFi-3-(Decluttered-on-right)?node-id=153-90&node-type=canvas&t=4Ji7p1jIXveXk3MW-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1';
const FIGMA_FINAL_URL = 'https://www.figma.com/proto/3kFM2Rku8FVGHng69FMslw/MidFi-(Final-Draft)?node-id=7-8&node-type=canvas&t=qu5Y3ct7QZOm2kf1-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1';
const APP_WEBSITE_URL = 'https://hci.stanford.edu/courses/cs377e/2019/sp/projects/ResQ/';
// Figma Embed API 1.0, outdated // const FIGMA_EMBED_URL = 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/3kFM2Rku8FVGHng69FMslw/MidFi-(Final-Draft)?node-id=7-8&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&embed-host=share';

const LocalHive = () => {
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
        <h1>"Local Hive": A Human-Centered AI Project</h1>
        <div className='interaction-instructions'>
          Interact with the Figma prototype below
        </div>
        <br></br>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <iframe
            style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
            width="400px"
            height="800px"
            src={FIGMA_EMBED_URL}
            allowFullScreen
          >This Figma prototype does not support embedding.</iframe>
        </div>
      </div>
      <br />
      <p>
        "Local Hive" is an app-hosted platform designed to strengthen community cohesion by enabling users to create and join projects, volunteer, and exchange skills.
      </p>
      <p>
        In my Stanford undergraduate studies, I took "<a target='_blank' rel='noopener noreferrer' href={HCI_CLASS_URL}>CS 377E</a>: Designing Solutions to Global Grand Challenges: Human-Centered AI," where my team of four applied design thinking to a quarter-long project at the intersection of healthcare and smart technology. Over 10 weeks, we progressed from ideation to prototyping, ultimately presenting our award-winning product at a public fair.
      </p>
      <hr className="solid"></hr>
      <div className="section" id='background-research'>
        <h2>Background Research</h2>
        <p>
          We focused on applying human-centered AI for social good. One team member, from Colombia, directed our attention to issues in Buenaventura, a seaport city affected by poverty, violence, and unemployment. Research showed that enhancing social infrastructure—trust, collaboration, and self-organization—was crucial for community resilience in conflict-affected areas (Aldrich & Meyer, 2015). Based on these insights, we developed a solution that utilized time banking, AI, and blockchain to reinforce social ties and promote economic self-sufficiency. We then moved to the needfinding phase to ensure our design aligned with community goals.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='needfinding'>
        <h2>Needfinding</h2>
        <p>
          We interviewed eight people—two from Buenaventura, Colombia, and six from Palo Alto, California, including self-identified community leaders and members. Our goal was to understand differences between the two communities and break out of our Palo Alto bubble.
        </p>
        <p>
          We explored five topics:
        </p>
        <ol>
          <li>
            <b>Community Description:</b> Characteristics, demographics, and culture.
          </li>
          <li>
            <b>Community Problems:</b> Challenges like poverty, violence, and resource scarcity.
          </li>
          <li>
            <b>Interconnectivity:</b> Social cohesion and relationships with other communities.
          </li>
          <li>
            <b>Outstanding Members/Projects:</b> Key figures or initiatives driving positive change.
          </li>
          <li>
            <b>Applying Social Capital:</b> Interest in time banking for community improvement.
          </li>
        </ol>
        <p>
          After conducting the interviews, we compiled the responses into a spreadsheet and synthesized the insights using sticky notes, grouping them by interviewer and guided by the question, "How might we help communities overcome crises?"
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={needfindingInterviewsImageUrl}
              alt='Needfinding Interviews'
              style={{ width: '90%', display: 'inline-block' }}
            />
            <figcaption>Combined needfinding interviews</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={initialSynthesisImageUrl}
              alt='Initial Synthesis'
              style={{ width: '50%', display: 'inline-block' }}
            />
            <figcaption>Interview synthesis</figcaption>
          </figure>
        </div>
        <p>
          Using an affinity map, we categorized insights into themes like leadership qualities, community obstacles, and infrastructure issues, identifying "super-members" who demonstrated leadership. This helped us distill our findings into two empathy maps—one for community leaders and one for community members.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={affinityMapImageUrl}
              alt='Affinity Map'
              style={{ width: '70%', display: 'inline-block' }}
            />
            <figcaption>Affinity map</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={leaderEmpathyMapImageUrl}
              alt='Community Leader Empathy Map'
              style={{ width: '70%', display: 'inline-block', marginRight: '2%' }}
            />
            <figcaption>Community leader empathy map</figcaption>
          </figure>
          <figure>
            <img
              src={memberEmpathyMapImageUrl}
              alt='Community Member Empathy Map'
              style={{ width: '70%', display: 'inline-block' }}
            />
            <figcaption>Community member empathy map</figcaption>
          </figure>
        </div>
        <p>
          We also created a 2x2 journey map contrasting community cohesion (low vs. high) with leadership (leaders vs. members). This revealed that self-organization occurs when leadership and membership roles blur into equal collaboration.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={journeyMapStickyNotesImageUrl}
              alt='Initial 2x2 Journey Map'
              style={{ width: '90%', display: 'inline-block', marginRight: '2%' }}
            />
            <figcaption>Initial 2x2 journey map using sticky notes from past exercises</figcaption>
          </figure>
          <figure>
            <img
              src={journeyMapCondensedImageUrl}
              alt='Condensed 2x2 Journey Map'
              style={{ width: '70%', display: 'inline-block' }}
            />
            <figcaption>Condensed 2x2 journey map</figcaption>
          </figure>
        </div>
        <br />
        <p>
          Key insights:
        </p>
        <ol>
          <li>
            Communities vary in cohesion levels.
          </li>
          <li>
            Low-cohesion communities have clear leaders. 
          </li>
          <li>
            Medium-cohesion communities see members taking on larger roles.
          </li>
          <li>
            High-cohesion communities operate by consensus, with little distinction between leaders and members.
          </li>
          <li>
            As cohesion increases, learned leadership skills both influence members and empower new leaders.
          </li>
          <li>
            Technology use varies: communication in low-cohesion and collaboration in high-cohesion groups.
          </li>
          <li>
            Helping is essential in low-cohesion communities, while it's voluntary in high-cohesion ones.
          </li>
          <li>
            Leaders demand recognition in low-cohesion settings but are more understated in high-cohesion communities.
          </li>
        </ol>
        <p>
          With these insights, we felt prepared to move on to generating "Point of View" and "How Might We" statements. 
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='pov-hmw'>
        <h2>"POV"s and "HMW"s</h2>
        <p>
          From our interviews, we identified three key points of view:
        </p>
        <ol>
          <li>
            "Leonard" (community leader): He connects external resources with internal needs but often overlooks local talent, highlighting a need to shift leaders' focus to leveraging internal resources first.
          </li>
          <li>
            "Ashley" (aspiring social worker in Buenaventura): She feels exclusionary leadership prevents her from stepping up. Dismantling existing structures could empower new leaders and foster inclusivity.
          </li>
          <li>
            Palo Alto cooperative living members: They have a knowledge-sharing network, but unequal voice distribution indicates a need for a more balanced and collaborative environment.
          </li>
        </ol>
        <p>
          These POVs led us to brainstorm 53 "How Might We" (HMW) statements, which we organized into affinity groups. After voting, we focused on three themes:
        </p>
        <ul>
          <li>
            Members Speak Up
          </li>
          <li>
            Searching for Resources
          </li>
          <li>
            Teaching Skills
          </li>
        </ul>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={hmwIdeationImageUrl}
              alt='HMW Ideation'
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>HMW ideation</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={hmwAffinityGroupingImageUrl}
              alt='HMW Affinity Grouping'
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>HMW affinity grouping</figcaption>
          </figure>
        </div>
        <p>
          From these themes, we generated the following HMW statements:
        </p>
        <ol>
          <li>
            <b>How might we break down hierarchical community structures that prevent new leaders from speaking up?</b>
          </li>
          <li>
            <b>How might we advertise a community member's skills more broadly?</b>
          </li>
          <li>
            <b>How might we encourage skill sharing and recruitment within the community?</b>
          </li>
        </ol>
        <p>
          With our finalized HMWs, we proceeded to the solution ideation phase.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='solution-ideation'>
        <h2>Solution Ideation</h2>
        <p>
          We held another sticky note brainstorming session, generating 48 ideas for our three HMW groups. After voting, we narrowed it down to 34 options.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={hmwSolutionBrainstormImageUrl}
              alt='HMW Solution Brainstorm'
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>HMW solution brainstorm</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={hmwSolutionFinalIdeasImageUrl}
              alt='HMW Solution Final Ideas'
              style={{ width: '60%', display: 'inline-block' }}
            />
            <figcaption>HMW solution final ideas</figcaption>
          </figure>
        </div>
        <p>
          In a final voting round, we selected four ideas:
        </p>
        <ul>
          <li>
            Matching/apprenticeship program connecting learners with mentors
          </li>
          <li>
            Platform for leaders and community members to post and find needed skills
          </li>
          <li>
            Pop-up classes/skill teach-ins
          </li>
          <li>
            (Dark horse idea) Hackathon
          </li>
        </ul>
        <p>
          Next, we moved into an experimental phase to determine the best candidate for our project.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='experience-prototypes'>
        <h2>Experience Prototypes</h2>
        <p>
          We developed three experience prototypes based on our solution ideation exercise. Each prototype tested a hypothesis over a week and analyzed the results.
        </p>
        <h3>EP #1: Skills and Services Marketplace</h3>
        <img src={e1Prototype1ImageUrl} alt='EP 1 Prototype 1' width='100%'/>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={e1Prototype2ImageUrl}
              alt='EP 1 Prototype 2'
              style={{ width: '40%', display: 'inline-block' }}
            />
            <figcaption>Matching members to tasks based on their listed skills</figcaption>
          </figure>
        </div>
        <p>
          <b>Hypothesis:</b> Members are more motivated to seek help if they know their neighbors' skills.
        </p>
        <p>
          <b>Method:</b> We presented a spreadsheet of skilled community members and tasks to a Palo Alto co-op member.
        </p>
        <span>
          <b>Results:</b>
        </span>
        <ul>
          <li>
            (+) Task matching was intuitive.
          </li>
          <li>
            (+) Table of people with skills was easy to read.
          </li>
          <li>
            (-) Projects may stagnate without appropriate skills.
          </li>
          <li>
            (-) Funding is essential for some projects.
          </li>
        </ul>
        <span><b>Validity:</b></span>
        <ul>
          <li>
            Our hypothesis was valid, as the visibility of each member's skills enabled more effective collaboration to complete tasks.
          </li>
          <li>
            A new assumption emerged that some members need to start with social capital to post tasks.
          </li>
        </ul>
        <h3>EP #2: Hold a "Hackathon" of Community Service</h3>
        <p>
          <b>Hypothesis:</b> Shared activities enhance social connections and understanding of individual skills.
        </p>
        <p>
          <b>Method:</b> Conducted a group chat ideation session with a leader and member from Buenaventura.
        </p>
        <span>
          <b>Results:</b>
        </span>
        <ul>
          <li>
            (+) Social goals effectively recruited people.
          </li>
          <li>
            (-) Activities highlighted skills, but users wanted to know others' intentions.
          </li>
        </ul>
        <span>
          <b>Validity:</b>
        </span>
        <ul>
          <li>
            The hypothesis was not valid; low-cohesion communities struggle to identify available help and lack knowledge of others' skills.
          </li>
        </ul>
        <h3>EP #3: Creating More Leaders</h3>
        <p>
          <b>Hypothesis:</b> Taking ownership fosters leadership development.
        </p>
        <p>
          <b>Method:</b> Developed a chatbot for a gardening simulation.
        </p>
        <span>
          <b>Results:</b>
        </span>
        <ul>
          <li>
            (+) Participation was easy, and the storyline engaged users.
          </li>
          <li>
            (-) Texting in-person felt awkward, and knowledgeable participants were less interested.
          </li>
        </ul>
        <span>
          <b>Validity:</b>
        </span>
        <ul>
          <li>
            The hypothesis was valid as the simulation allowed participants to make quick judgments under stress, but results did not indicate long-term leadership success.
          </li>
        </ul>
        <h3>EP Outcomes: Analysis</h3>
        <p>
          After testing the prototypes, we chose to move forward with EP #1, the "Skills and Services Marketplace," as it showed the most promise for fostering community cohesion. We were ready for the initial prototyping stages.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='low-fi-prototype'>
        <h2>Low-Fidelity Prototype</h2>
        <p>
          We branded ourselves as <b>Local Hive</b>, defining our mission/problem/solution/value proposition:
        </p>
        <ul>
          <li>
            <b>Mission:</b> Boost projects and build skills through community support.
          </li>
          <li>
            <b>Problem:</b> How can community members support each other at a distance?
          </li>
          <li>
            <b>Solution:</b> Create a marketplace for projects and skills using volunteering time as currency.
          </li>
          <li>
            <b>Value Proposition:</b> Foster community cohesion and social capital.
          </li>
        </ul>
        <h3>Concept Sketches</h3>
        <img src={conceptSketchesImageUrl} alt='Concept Sketches' width='100%' />
        <p>
          We sketched concepts focusing on four input modalities: web, mobile, AR, and existing platforms (Slack, iMessage, etc.). After voting, we chose web and mobile for further UI sketches.
        </p>
        <h3>UI Sketches</h3>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={uiSketch1ImageUrl}
              alt='Mobile UI Sketch 1'
              style={{ width: '90%', display: 'inline-block', marginRight: '2%' }}
            />
            <figcaption>Mobile UI sketch 1</figcaption>
          </figure>
          <figure>
            <img
              src={uiSketch2ImageUrl}
              alt='Mobile UI Sketch 2'
              style={{ width: '90%', display: 'inline-block' }}
            />
            <figcaption>Mobile UI sketch 2</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={uiSketch3ImageUrl}
              alt='Web UI Sketch'
              style={{ width: '40%', display: 'inline-block' }}
            />
            <figcaption>Web UI sketch</figcaption>
          </figure>
        </div>
        <p>
          Once we completed our UI sketches, we determined that a <b>mobile app</b> was the best option due to:
        </p>
        <ol>
          <li>
            Users commonly using phones for organizing information.
          </li>
          <li>
            The appeal of push notifications for immediate community connections.
          </li>
          <li>
            Existing social networking mental models linked to mobile devices.
          </li>
        </ol>
        <p>
          With this decision, we defined task flows to guide our low-fidelity prototype design.
        </p>
        <h3>Task Flows</h3>
        <p>
          We structured screens around tasks of varying difficulty:
        </p>
        <ol>
          <li>
            <b>Easy Task: Joining a project</b>—signing up, exploring projects, finding a fit, and optionally contacting the leader.
          </li>
          <li>
            <b>Medium Task: Creating a project</b>—specifying details, recruiting users, and posting.
          </li>
          <li>
            <b>Complex Task: Monitoring community involvement</b>—project leaders tracking contributions and users monitoring their engagement.
          </li>
        </ol>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={easyTaskFlowImageUrl}
              alt='Easy Task Flow'
              style={{ width: '70%', display: 'inline-block' }}
            />
            <figcaption>Easy task flow</figcaption>
          </figure>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={mediumTaskFlowImageUrl}
              alt='Medium Task Flow'
              style={{ width: '70%', display: 'inline-block' }}
            />
            <figcaption>Medium task flow</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={complexTaskFlowImageUrl}
              alt='Complex Task Flow'
              style={{ width: '70%', display: 'inline-block' }}
            />
            <figcaption>Complex task flow</figcaption>
          </figure>
        </div>
        <h3>Low-Fi Prototype Screens</h3>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={lowFiOverviewImageUrl}
              alt='Low-Fi Overview'
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Low-fi prototype</figcaption>
          </figure>
        </div>
        <p>
          With task flows in place, we sketched 17 screens for our low-fi prototype, utilizing plastic film to simulate buttons. Design decisions emphasized:
        </p>
        <ul>
          <li>
            Encouraging users to engage in projects beyond their skillset.
          </li>
          <li>
            Valuing connections as much as the work.
          </li>
          <li>
            Influencing AI recommendations based on user goals.
          </li>
        </ul>
        <h3>User Testing</h3>
        <p>
          We conducted 20-minute tests with three participants of different ages and backgrounds, guiding them through tasks using our paper prototype. Our team alternated roles as facilitator, “computer,” and notetaker.
        </p>
        <p>
          Critical Incidents:
        </p>
        <ul>
          <li>
            The attitudinal screen confused users.
          </li>
          <li>
            Participants wanted specific project screens.
          </li>
          <li>
            Users focused more on personal projects than community status.
          </li>
        </ul>
        <p>
          Critical Successes:
        </p>
        <ul>
          <li>
            Positive responses to creating projects.
          </li>
          <li>
            The combined presence of people and projects was helpful.
          </li>
          <li>
            Tree visualization symbolizing community growth was appreciated.
          </li>
        </ul>
        <p>
          Takeaways:
        </p>
        <ul>
          <li>
            (+) The social network aspect was intuitive.
          </li>
          <li>
            (+) Joining a community was straightforward.
          </li>
          <li>
            (-) The point system needs clarity.
          </li>
          <li>
            (-) Screen navigation requires streamlining.
          </li>
        </ul>
        <p>
          Following this evaluation, we began developing our medium-fidelity prototype using insights from our user testing.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='med-fi-prototype'>
        <h2>Medium-Fidelity Prototype</h2>
        <p>
          In developing our med-fi prototype, we incorporated feedback from low-fi testing, including:
        </p>
        <ul>
          <li>
            Gifting users an initial amount of points (Honey Money) upon signup.
          </li>
          <li>
            Adding due dates and locations for tasks.
          </li>
          <li>
            Displaying experience gained from community involvement.
          </li>
        </ul>
        <p>
          We aimed to test the "Honey Money" time banking system, where users begin with 50 Honey Money (10 equaling one hour of work) to create projects or join others. Users could view their balance, experience, and transaction history on a Wallet Page.
        </p>
        <p>
          We also developed a taxonomy of skills for users' profiles and project listings. AI would recommend projects based on users' qualifications and interests.
        </p>
        <p>
          Using Figma, we built our <a target='_blank' rel='noopener noreferrer' href={FIGMA_MEDFI_1_URL}>first med-fi prototype</a>.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={medFi1FigmaOverviewImageUrl}
              alt='Med-Fi #1 Figma overview'
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Med-fi #1 Figma overview</figcaption>
          </figure>
        </div>
        <p>
          Our prototype included our three task flows:
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={medFi1JoinTaskFlowImageUrl}
              alt='"Join a Project" Task Flow'
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Med-fi "Join a Project" task flow</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={medFi1CreateTaskFlowImageUrl}
              alt='"Create a Project" Task Flow'
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Med-fi "Create a Project" task flow</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={medFi1MonitorTaskFlowImageUrl}
              alt='"Monitor a Community" Task Flow'
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Med-fi "Monitor a Community" task flow</figcaption>
          </figure>
        </div>
        <p>
          We tested four participants for about 10 minutes each as they navigated the tasks. Our test plan aimed to assess:
        </p>
        <ol>
          <li>
            Task completion likability and excitement without guidance.
          </li>
          <li>
            The order of actions taken.
          </li>
          <li>
            Preferences for joining versus creating projects.
          </li>
          <li>
            Language adjustments for participation encouragement.
          </li>
        </ol>
        <p>
          Results indicated the need to:
        </p>
        <ul>
          <li>
            Simplify the "Honey Money" concept.
          </li>
          <li>
            Rephrase onboarding instructions.
          </li>
          <li>
            Add a sub-task list above the join button.
          </li>
          <li>
            Include a social media button for recruiting.
          </li>
          <li>
            List required skills on tasks.
          </li>
        </ul>
        <p>
          Based on these insights, we iterated our design for a <a target='_blank' rel='noopener noreferrer' href={FIGMA_MEDFI_2_URL}>second med-fi Figma prototype</a> before moving to the heuristic evaluation phase.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={medFi2FigmaOverviewImageUrl}
              alt='Med-Fi 2 Figma Overview'
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Med-Fi #2 Figma overview</figcaption>
          </figure>
        </div>
        <h3>Heuristic Evaluation</h3>
        <p>
          In this phase, four evaluators tested our Figma prototype, identifying 46 heuristic violations across ten categories:
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
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Heuristic violations summary</figcaption>
          </figure>
        </div>
        <p>
          An example of feedback received:
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p style={{ marginLeft: '10%', marginRight: '10%', textAlign: 'justify' }}>
            <b>[H6: Recognition not Recall][Severity: 3]</b>
            <br />
            <i>Evaluators: 1, 2, 3, 4</i>
            <br />
            <br />
            What is the difference between the buzz page and the projects page? It's not intuitive that the buzz page includes projects that you are not currently “enrolled” in. I think that searching for new projects and looking at the ones that you are already signed up for should just all be in the same place. It makes it confusing to need to remember where the different things regarding the projects are.
            <br />
            <br />
            Fix: Make them one category and have subcategories for searching through projects easily or on the project page having a buzz “someone else” button in addition to a join project button. 
          </p>
        </div>
        <p>
          We carefully considered each of the 46 violations and designated action items to incorporate into our <a target='_blank' rel='noopener noreferrer' href={FIGMA_MEDFI_3_URL}>third med-fi prototype</a> iteration. We categorized violations into four areas for action:
        </p>
        <ul>
          <li>
            <b>Conceptual Clarification:</b> Simplify onboarding with concise explanations of app concepts.
          </li>
          <li>
            <b>Content Sizing:</b> Declutter pages for relevance.
          </li>
          <li>
            <b>Information Consistency:</b> Standardize key details across screens.
          </li>
          <li>
            <b>Task Prioritization:</b> Emphasize actionable tasks on the home screen.
          </li>
        </ul>
        <p>
          The progression between our three med-fi prototypes:
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={medFi1HomeImageUrl}
              alt='First Med-Fi Prototype Home Screen'
              style={{ width: '90%', display: 'inline-block', marginRight: '2%' }}
            />
            <figcaption>First med-fi prototype home screen</figcaption>
          </figure>
          <figure>
              <img
              src={medFi2HomeImageUrl}
              alt='Second Med-Fi Prototype Home Screen'
              style={{ width: '90%', display: 'inline-block', marginRight: '2%' }}
            />
            <figcaption>Second med-fi prototype home screen</figcaption>
          </figure>
          <figure>
              <img
              src={medFi3HomeImageUrl}
              alt='Third Med-Fi Prototype Home Screen'
              style={{ width: '90%', display: 'inline-block' }}
            />
            <figcaption>Third med-fi prototype home screen</figcaption>
          </figure>
        </div>
        <p>
          We were prepared to conduct one final round of user research before creating our final prototype.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='user-research'>
        <h2>User Research</h2>
        <p>
          Our user research aimed to assess the prototype's effectiveness in addressing issues with creating and joining community projects while ensuring the app's concepts (Hive, Honey Money, Buzz, etc.) were clear and visually appealing.
        </p>
        <p>
          We recruited volunteers from four key groups identified in our needfinding stage for testing:
        </p>
        <ol>
          <li>
            <b>Community members:</b> Regular members to see how the app encourages project creation and recruitment.
          </li>
          <li>
            <b>Community leaders:</b> Potential power-users to evaluate how the app enhances their organizing efforts.
          </li>
          <li>
            <b>Low cohesion/motivation:</b> Less engaged members to determine if the app motivates involvement.
          </li>
          <li>
            <b>High cohesion/motivation:</b> Highly engaged users to assess the app's usefulness for well-functioning communities.
          </li>
        </ol>
        <p>
          We conducted tests with four volunteers and summarized their feedback:
        </p>
        <ul>
          <li>
            The design and Hive theme were well-received, but some onboarding colors felt out of place.
          </li>
          <li>
            Users were confused about the intended project scale (large vs. small) and the "buzzing" feature.
          </li>
          <li>
            There was appreciation for organizing personal and community goals, but concerns about small community engagement.
          </li>
          <li>
            Suggestions included adding realistic project images and interactive features for tracking progress.
          </li>
          <li>
            The Honey Money system was well-liked, but users wanted clearer ways to track involvement.
          </li>
        </ul>
        <p>
          Based on this feedback, we prioritized the following changes for our final prototype:
        </p>
        <ul>
          <li>
            Enhance fidelity for better immersion.
          </li>
          <li>
            Include real images for profiles and projects.
          </li>
          <li>
            Sort tasks by category on a separate screen.
          </li>
          <li>
            Declutter by prioritizing tasks.
          </li>
          <li>
            Ensure consistency of key terms like "buzz" across the app.
          </li>
        </ul>
        <p>
          With this final user study completed, we were ready to develop and launch our final prototype.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='final-prototype'>
        <h2>Final Prototype</h2>
        <div className="video-vertical" style={{ height: 'auto', width: '100%' }}>
          <video controls poster={fullAppThumbnailImageUrl} muted className="responsive-video">
            <source src={fullAppVideoUrl} type="video/mp4" />
          </video>
        </div>
        <p>
          We launched our <a target='_blank' rel='noopener noreferrer' href={FIGMA_FINAL_URL}>final Figma prototype</a> at an end-of-quarter project fair, accompanied by a website detailing our app's functionality and design process.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={appWebsiteImageUrl}
              alt='App Website'
              style={{ width: '60%', display: 'inline-block' }}
            />
            <figcaption>
              <a target='_blank' rel='noopener noreferrer' href={APP_WEBSITE_URL}>App website</a>
            </figcaption>
          </figure>
        </div>
        <p>
          At the fair, we presented our app's evolution in a 15-minute presentation and showcased a project poster that won "Best Poster" among six teams.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={posterImageUrl}
              alt='Poster'
              style={{ width: '40%', display: 'inline-block' }}
            />
            <figcaption>Local Hive poster</figcaption>
          </figure>
        </div>
        <p>
          I was proud that in just 10 weeks, we transformed a vague idea of strengthening communities into a robust prototype that many people tried out. With more time, we would have liked to pilot the app in a real community for ecological validity and develop a minimum viable product for an international launch. Nevertheless, we were pleased with our progress in such a short timeframe.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='reflections'>
        <h2>Reflections</h2>
        <ul>
          <li>
            <b>Listen first, design second.</b>
            <ul>
              <li>
                Needfinding is a crucial step in product development, often overlooked if you focus too much on your initial solution. To apply human-centered design effectively, it's essential to step outside your perspective and listen objectively to your target users before making assumptions.
              </li>
            </ul>
          </li>
          <li>
            <b>User feedback drives better design.</b>
            <ul>
              <li>
                Avoid getting attached to early design iterations; user testing will reveal areas for improvement, often highlighting conflicting preferences among users. Refining a design requires balancing the needs of the majority without neglecting the minority.
              </li>
            </ul>
          </li>
          <li>
            <b>Trust your instincts, but validate with users.</b>
            <ul>
              <li>
                While humility is important, it's gratifying to recognize when your instincts are correct. We believed in leveraging social capital for community growth, and user tests consistently validated our approach of using volunteer time as a currency for supporting community projects, despite numerous adjustments to the specifics of "Honey Money."
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='works-cited'>
        <h2>Works Cited</h2>
        <ul>
          <li>
            Aldrich, D. P., & Meyer, M. A. (2015). Social capital and community resilience. American behavioral scientist, 59(2), 254-269.
          </li>
        </ul>
      </div>
    </PageTemplate>
  );
};

export default LocalHive;