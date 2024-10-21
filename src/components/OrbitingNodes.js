// src/components/OrbitingNodes.js
import * as THREE from 'three';

// Bump map generated from https://robson.plus/white-noise-image-generator/
import bumpMapImageUrl from '../assets/images/node-bump-map.png';

class OrbitingNodes {
  constructor() {
    // Initialize start height above the galaxy center here to use in the array below
    this.startHeight = 2;

    // Array of node data
    this.orbitingNodeData = [
      {
        id: 'strivr',
        title: 'Strivr: "Immersive Lobby" Upgrade',
        titleMobile: 'Work: Strivr',
        nodeRadius: 0.4,
        finalRadius: 3.5,
        color: 0x2d3cdc,
      },
      {
        id: 'local-hive',
        title: '"Local Hive": A Human-Centered AI Project',
        titleMobile: 'Stanford: "Local Hive"',
        nodeRadius: 0.3,
        finalRadius: 3.5,
        color: 0xe6cc7e,
      },
      {
        id: 'hifi',
        title: 'High Fidelity: Content Prototyping',
        titleMobile: 'Work: High Fidelity',
        nodeRadius: 0.25,
        finalRadius: 3.5,
        color: 0x23ceff,
      },
      {
        id: 'orgasmr',
        title: '"orgASMR": A Head-Scratching Musical Interface',
        titleMobile: 'Stanford: "orgASMR"',
        nodeRadius: 0.25,
        finalRadius: 6.0,
        color: 0xe6a063,
      },
      {
        id: 'window',
        title: '"Window": An AR Clothes Shopping App',
        titleMobile: 'Stanford: "Window"',
        nodeRadius: 0.25,
        finalRadius: 6.0,
        color: 0x6561e0,
      },
      {
        id: 'rv-vr',
        title: '"RV VR": An Immersive Perspective on the Bay Area Housing Crisis',
        titleMobile: 'Stanford: "RV VR"',
        nodeRadius: 0.2,
        finalRadius: 6.0,
        color: 0x7ba177,
      },
      {
        id: 'lucid-dreaming',
        title: '"Lucid Dreaming": A 360° Video Experience',
        titleMobile: 'Stanford: "Lucid Dreaming"',
        nodeRadius: 0.2,
        finalRadius: 7.0,
        color: 0xd47b7b,
      }
    ];

    this.staticNodeData = [
      {
        id: 'who-am-i',
        title: 'Who am I?',
        titleMobile: 'Who am I?',
        nodeRadius: 0.2,
        finalRadius: 0.0,
        color: 0xffffff,
        position: new THREE.Vector3(0, this.startHeight, 0)
      }
    ];
    
    this.orbitingNodes = []; // Only includes nodes with movement
    this.allNodes = [];
    this.startRadius = 0.0;
    this.radiusIncrement = 3.2; // Space between orbit levels
    this.numNodes = this.orbitingNodeData.length;
    this.nodesPerLevel = 3; // Number of nodes per orbit level

    this.baseRotationSpeed = 0.3; // Base rotation speed
    this.mobileRotationSpeed = 0.05; // Rotation speed on mobile
    this.slowRotationSpeed = 0; // Slower speed when hovering
    this.targetRotationSpeed = this.baseRotationSpeed; // Add a target for smooth lerping
    this.rotationSpeed = this.baseRotationSpeed; // This is the rotation speed that controls current node motion
    this.lerpSpeed = 0.02; // Adjusted to make lerping smoother
    this.rotationStartDelay = 0.2; // How long to wait before starting the animation

    this.hoverTimeout = null; // Timer for delay
    this.hovered = false; // Track if the mouse is hovering
    this.hoverDelay = 200; // Time in milliseconds before switching speeds
    this.hoveredNode = null; // Track the currently hovered node

    this.clock = new THREE.Clock();
    this.levelOffsetAngle = Math.PI / this.nodesPerLevel; // Offset each level by half of the angle spacing

    this.heightMultiplier = -2; // Controls how much the nodes "fall down" the cone vertically

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
  }

  createNode(nodeInfo, startingPosition, angle) {
    const geometry = new THREE.SphereGeometry(nodeInfo.nodeRadius, 32, 32);

    // Load a predefined bump map texture (for simplicity, using a random noise image)
    const bumpTexture = new THREE.TextureLoader().load(bumpMapImageUrl);

    // Randomize the bumpScale for each node to make them look unique
    const randomBumpScale = Math.random() * 0.2 + 0.1; // Random value between 0.1 and 0.3

    const material = new THREE.MeshPhongMaterial({
      color: nodeInfo.color, // Node color
      shininess: 30,  // Higher shininess for a more reflective surface
      specular: 0xffffff, // Color of the specular reflection (white for high gloss)
      bumpMap: bumpTexture, // Apply the bump map
      bumpScale: randomBumpScale // Randomize the bump scale for variation
    });

    const node = new THREE.Mesh(geometry, material);

    node.position.copy(startingPosition);

    node.userData = { 
      id: nodeInfo.id, // Assign a unique ID to each node, used as route path to navigate to in Home.js
      currentRadius: this.startRadius, // Store the current radius of the orbit
      finalRadius: nodeInfo.finalRadius, // Target the final radius stored here
      angle: angle // Set the starting angle
    };

    return node;
  }

  // Function to create orbiting nodes with unique IDs
  createNodes(scene, isMobile) {
    this.isMobile = isMobile;

    // Nodes should always rotate slowly on mobile
    if (isMobile) {
      this.rotationSpeed = this.mobileRotationSpeed;
      this.targetRotationSpeed = this.mobileRotationSpeed;
      this.baseRotationSpeed = this.mobileRotationSpeed;
    }

    this.staticNodeData.forEach(nodeInfo => {
      const node = this.createNode(nodeInfo, nodeInfo.position, 0);
      this.allNodes.push(node);
      scene.add(node);
    });

    this.orbitingNodeData.forEach((nodeInfo, i) => {
      // Calculate which level this node is on (integer division)
      const level = Math.floor(i / this.nodesPerLevel);
      
      // Calculate how many nodes are on the current level
      const nodesOnCurrentLevel = Math.min(this.nodesPerLevel, this.numNodes - level * this.nodesPerLevel);
      
      // Evenly distribute the nodes on this level (in radians)
      const baseAngle = (i % this.nodesPerLevel) * (2 * Math.PI / nodesOnCurrentLevel);

      // Apply an offset to the level's angles so they don't align vertically with the previous level
      const angle = baseAngle + level * this.levelOffsetAngle;

      const startingPosition = new THREE.Vector3(0, this.startHeight, 0);

      const node = this.createNode(nodeInfo, startingPosition, angle);
      this.orbitingNodes.push(node);
      scene.add(node);
    });

    // Store all nodes in one array for calculating mouse intersections
    this.allNodes = this.allNodes.concat(this.orbitingNodes)
  }

  // Returns all the nodes and their associated label to Home.js
  getNodeInfoArray() {
    let nodesInfoArray = [];

    let allNodeData = this.orbitingNodeData.concat(this.staticNodeData);

    this.allNodes.forEach(node => {
      let nodeInfo = allNodeData.find(info => info.id === node.userData.id);
      let nodeTitle = this.isMobile ? nodeInfo.titleMobile : nodeInfo.title;

      nodesInfoArray.push({ node, nodeTitle });
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
    const intersects = this.raycaster.intersectObjects(this.allNodes);

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

    // Include "Who Am I" node in intersects list
    const intersects = this.raycaster.intersectObjects(this.allNodes);

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

    // Swirl nodes around and update positions along the upside-down cone, starting from below
    this.orbitingNodes.forEach((node, i) => {
      // Rotation speed slows on each subsequent level
      const speedMultiplier = 1 / Math.floor((i / this.nodesPerLevel) + 1);
      // Increment the angle based on the current rotation speed and deltaTime
      node.userData.angle += this.rotationSpeed * deltaTime * speedMultiplier;

      // Make sure the angle wraps around between 0 and 2*PI (360 degrees)
      node.userData.angle = node.userData.angle % (2 * Math.PI);

      // Use the node's specific orbit radius (stored in userData)
      let currentRadius = node.userData.currentRadius;
      let finalRadius = node.userData.finalRadius;

      // Update orbitRadius based on time, for outward movement
      currentRadius =
        this.startRadius +
        (finalRadius - this.startRadius) *
        (2 / (1 + 2 ** (-3 * Math.max(0, elapsedTime - this.rotationStartDelay))) - 1); // Sigmoid-like smooth expansion
      
      // Cone motion: x and z expand outward, y starts above the center and falls
      node.position.x = currentRadius * Math.cos(node.userData.angle);
      node.position.z = currentRadius * Math.sin(node.userData.angle);

      // Update the current radius for the node
      node.userData.currentRadius = currentRadius;

      // Calculate the y-position for upward movement, simulating an upside-down cone
      const normalizedRadius = currentRadius / finalRadius; // 0 at start, 1 at max
      node.position.y = this.startHeight + normalizedRadius * this.heightMultiplier; // Moving downward
    });
  }
}

export default OrbitingNodes;
