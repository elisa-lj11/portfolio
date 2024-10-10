// src/components/OrbitingNodes.js
import * as THREE from 'three';

class OrbitingNodes {
  constructor() {
    // Map for node page titles, make sure to update the route path in App.js
    this.nodeTitles = new Map([
      ['strivr', 'Strivr: "Immersive Lobby" Upgrade'],
      ['local-hive', '"Local Hive": A Human-Centered AI Project'],
      ['orgasmr', '"orgASMR": A Head-Scratching Musical Interface'],
    ]);
    
    this.nodes = [];
    this.startRadius = 0.0;
    this.finalRadius = 3.2;
    this.numNodes = this.nodeTitles.size;
    this.orbitRadius = this.startRadius; // Orbit radius starts from 0 and expands

    this.baseRotationSpeed = 0.5; // Base rotation speed
    this.slowRotationSpeed = 0.05; // Slower speed when hovering
    this.targetRotationSpeed = this.baseRotationSpeed; // Add a target for smooth lerping
    this.rotationSpeed = this.baseRotationSpeed; // This is the rotation speed that controls current node motion
    this.lerpSpeed = 0.02; // Adjusted to make lerping smoother
    this.rotationStartDelay = 0.2; // How long to wait before starting the animation

    this.hoverTimeout = null; // Timer for delay
    this.hovered = false; // Track if the mouse is hovering
    this.hoverDelay = 200; // Time in milliseconds before switching speeds
    this.hoveredNode = null; // Track the currently hovered node

    this.clock = new THREE.Clock();
    this.angles = []; // Store the current angle for each node

    this.heightMultiplier = -2; // Controls how much the nodes "climb" the cone vertically
    this.startHeight = 2; // Starting below the galaxy center (negative y value)

    // Raycaster for interaction
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    // Edge case handling for node clicks
    this.shouldBlockMouseUpClick = false;
    this.lastNodeClicked = null;

    // Store the media type when createNodes() is called
    this.isMobile = null;

    // Callback to navigate to node page, defined in Home.js
    this.clickCallback = null;

    // Callback to clean up node-related mouse events, called in Home.js
    this.cleanupMouseEvents = null;

    // Initialize the starting angles for the nodes
    for (let i = 0; i < this.numNodes; i++) {
      this.angles.push((i / this.numNodes) * 2 * Math.PI);
    }
  }

  // Function to create orbiting nodes with unique IDs
  createNodes(scene, isMobile) {
    this.isMobile = isMobile;

    // Nodes should always rotate slowly on mobile
    if (isMobile) {
      this.rotationSpeed = this.slowRotationSpeed;
      this.targetRotationSpeed = this.slowRotationSpeed;
      this.baseRotationSpeed = this.slowRotationSpeed;
    }

    const geometry = new THREE.SphereGeometry(0.2, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

    let i = 0;
    for (const [nodeId, nodeTitle] of this.nodeTitles) {
      const node = new THREE.Mesh(geometry, material);

      node.position.set(
        this.startRadius * Math.cos((i / this.numNodes) * 2 * Math.PI),
        this.startHeight,
        this.startRadius * Math.sin((i / this.numNodes) * 2 * Math.PI)
      );

      // Assign a unique ID to each node, this is used as the route path to navigate to in Home.js
      node.userData = { id: `${nodeId}` };
      this.nodes.push(node);

      scene.add(node);

      // Store an initial angle offset for each node
      this.angles.push((i / this.numNodes) * 2 * Math.PI);

      i++;
    }
  }

  // Returns all the nodes and their associated label to Home.js
  getNodesInfoArray() {
    let nodesInfoArray = [];
    this.nodes.forEach((node, index) => {
      let nodeLabel = this.nodeTitles.get(node.userData.id);

      let nodeInfo = { node, nodeLabel };
      nodesInfoArray.push(nodeInfo);
    });

    return nodesInfoArray;
  }

  // Returns the node that is currently being hovered or null if no node is hovered
  getHoveredNode() {
    return this.hoveredNode;
  }

  // Set up mouse event listeners for detecting clicks
  enableMouseEvents(renderer, camera, clickCallback) {
    this.clickCallback = clickCallback;

    // Listen for mousedown to track start of click
    const onMouseDown = () => {
      this.handleClick(camera, false);
    };

    const onMouseMove = (event) => {
      // Only listen to intersections when mouse is moving
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Listen for mouseup to track end of click
    const onMouseUp = () => {
      this.handleClick(camera, true);
    };

    // Attach events
    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('mouseup', onMouseUp);

    // Add a cleanup method to remove these listeners
    this.cleanupMouseEvents = () => {
      renderer.domElement.removeEventListener('mousedown', onMouseDown);
      renderer.domElement.removeEventListener('mousemove', onMouseMove);
      renderer.domElement.removeEventListener('mouseup', onMouseUp);
    };
  }

  // Call the click callback when the click is valid
  handleClick(camera, isMouseUp) {
    this.raycaster.setFromCamera(this.mouse, camera);

    // Find intersected objects
    const intersects = this.raycaster.intersectObjects(this.nodes);

    if (intersects.length == 0 && !isMouseUp) {
      // When mouse is clicked down on something that is not a node, block
      // the unintentional triggering of a node on mouse click up
      this.shouldBlockMouseUpClick = true;
    } else if (intersects.length > 0 && !isMouseUp) {
      // Track the node clicked on mouse down to prevent unintentional trigger
      // of mouse click up on different node
      this.lastNodeClicked = intersects[0].object;
    } else if (intersects.length > 0 && isMouseUp && !this.shouldBlockMouseUpClick) {
      const intersectedNode = intersects[0].object; // Get the first intersected node
      const nodeId = intersectedNode.userData.id; // Get the ID from userData
      
      if (this.lastNodeClicked == intersectedNode && this.clickCallback) {
        this.clickCallback(nodeId); // Call the callback with node and nodeId
      }
      this.lastNodeClicked = null;
    } else {
      // Reset the mouse up click block in all other cases
      this.shouldBlockMouseUpClick = false;
    }
  }
  
  // Handle orbiting logic on animation frame updates
  updateNodes(camera) {
    const deltaTime = this.clock.getDelta(); // Use deltaTime for incremental updates
    const elapsedTime = this.clock.getElapsedTime() - this.rotationStartDelay; // Use elapsedTime for approach to final radius

    // Set raycaster from camera perspective
    this.raycaster.setFromCamera(this.mouse, camera);
    const intersects = this.raycaster.intersectObjects(this.nodes);

    // Lerp rotation speed based on mouse hover
    if (intersects.length > 0) {
      this.hoveredNode = intersects[0].object; // Store the hovered node

      // Hover not supported on mobile
      // Mouse started hovering over a node, delay the speed change
      if (!this.isMobile && !this.hovered) {
        this.hovered = true;
        clearTimeout(this.hoverTimeout); // Clear any pending timeout
        this.hoverTimeout = setTimeout(() => {
          this.targetRotationSpeed = this.slowRotationSpeed; // Target the slow speed after delay
        }, this.hoverDelay);
      }
    } else {
      this.hoveredNode = null; // No nodes are hovered

      // Hover not supported on mobile
      // Mouse stopped hovering, delay switching back to base speed
      if (!this.isMobile && this.hovered) {
        this.hovered = false;
        clearTimeout(this.hoverTimeout); // Clear any pending timeout
        this.hoverTimeout = setTimeout(() => {
          this.targetRotationSpeed = this.baseRotationSpeed; // Target the base speed after delay
        }, this.hoverDelay);
      }
    }

    // Smoothly lerp the rotation speed toward the target speed every frame
    this.rotationSpeed = THREE.MathUtils.lerp(this.rotationSpeed, this.targetRotationSpeed, this.lerpSpeed);

    // Update orbitRadius based on time, for outward movement
    this.orbitRadius =
      this.startRadius +
      (this.finalRadius - this.startRadius) *
        (2 / (1 + 2 ** (-3 * Math.max(0, elapsedTime - this.rotationStartDelay))) - 1); // Sigmoid-like smooth expansion

    // Swirl nodes around and update positions along the upside-down cone, starting from below
    this.nodes.forEach((node, i) => {
      // Increment the angle based on the current rotation speed and deltaTime
      this.angles[i] += this.rotationSpeed * deltaTime;

      // Make sure the angle wraps around between 0 and 2*PI (360 degrees)
      this.angles[i] = this.angles[i] % (2 * Math.PI);

      // Cone motion: x and z expand outward, y starts below the center and rises
      node.position.x = this.orbitRadius * Math.cos(this.angles[i]);
      node.position.z = this.orbitRadius * Math.sin(this.angles[i]);

      // Calculate the y-position for upward movement, simulating an upside-down cone
      const normalizedRadius = this.orbitRadius / this.finalRadius; // 0 at start, 1 at max
      node.position.y = this.startHeight + normalizedRadius * this.heightMultiplier; // Rising upward
    });
  }
}

export default OrbitingNodes;
