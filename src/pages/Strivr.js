// src/pages/Strivr.js
import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

import newLobbyImageUrl from '../assets/images/new-lobby.png';

const Strivr = () => {
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
      <h1>'Strivr: "Immersive Lobby" Upgrade'</h1>
      <img src={newLobbyImageUrl} alt='New Lobby'/>
      <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Dictum metus sit; sollicitudin mollis arcu mus phasellus dolor. Magnis pulvinar integer consequat vehicula, aenean lobortis maecenas penatibus. Senectus turpis lobortis nulla sollicitudin donec adipiscing semper lacus cursus. Rhoncus faucibus lacinia porta pellentesque odio ut tellus ad. Luctus lacinia posuere tortor amet at aptent. Finibus rutrum montes euismod etiam dictum.
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
Mi malesuada hendrerit purus arcu, quisque donec taciti. Dui rutrum euismod commodo metus, vel quisque pulvinar. Dis purus nulla magnis eleifend magnis consequat elementum elit. Suspendisse aenean eros est tellus cursus. Taciti enim class natoque; cras sed turpis. Praesent sollicitudin nostra tellus dignissim augue fermentum. Nec mus justo purus pretium rutrum. Interdum rutrum enim netus quam facilisis convallis conubia eu tempor.
<br></br>
Massa suspendisse primis nulla facilisis sed et. Porttitor magnis sapien ac lectus nisl fringilla ornare. Felis dapibus cursus tortor aptent lacus. Scelerisque vivamus mi mollis condimentum ante suscipit. Augue venenatis sed at, potenti enim faucibus. Congue viverra ridiculus potenti nisl gravida porttitor metus adipiscing.
<br></br>
Lectus nibh et, placerat ligula turpis id. Montes ultrices consectetur ultricies sapien; mollis purus felis. Dictum velit erat varius, arcu donec interdum. Scelerisque ultricies nascetur nunc mollis inceptos. Ornare varius sapien vivamus suspendisse nunc urna. Duis eleifend imperdiet eleifend elit; ipsum blandit himenaeos. Placerat leo nostra scelerisque porttitor est donec. Non habitant viverra ipsum bibendum cubilia libero lacinia sit sed. Ad dolor nisi iaculis aliquet mollis.
<br></br>
Inceptos magnis ornare donec fusce tristique lacinia; per dui. Quis rutrum massa tellus euismod eros ornare! Integer blandit tellus magna placerat facilisis ipsum. Ornare orci nibh suscipit mus volutpat felis tempus taciti. Suspendisse dictumst ex vestibulum magna quis quis turpis class. Libero non porta himenaeos sodales nisl scelerisque mattis? Semper dignissim risus tristique gravida in potenti iaculis sed amet. Consequat duis ligula dis lectus mauris tempus nascetur nisl. Mus id eget class euismod egestas lobortis.</p>
      {/* Add more specific content here */}
    </PageTemplate>
  );
};

export default Strivr;