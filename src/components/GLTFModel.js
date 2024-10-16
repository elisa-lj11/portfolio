// src/components/GLTFModel.js
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib'; // GLTFLoader for loading the .gltf/.glb files

class GLTFModel {
  constructor(modelName, scale) {
    this.modelName = modelName;
    this.model = null;
    this.scale = scale;
    this.mixer = null;
    this.speed = 1; // Speed constant for the orbiting motion
    this.clock = new THREE.Clock(); // Clock to update animations
  }

  // Load the model with animations
  loadModel(scene, onLoadCallback) {
    const loader = new GLTFLoader();
    loader.load(this.modelName, (gltf) => {
      this.model = gltf.scene;
      this.model.scale.set(this.scale, this.scale, this.scale);
      scene.add(this.model); // Add the model to the provided scene

      const animations = gltf.animations;
      if (animations && animations.length > 0) {
        // Set up the AnimationMixer
        this.mixer = new THREE.AnimationMixer(this.model);
        const action = this.mixer.clipAction(animations[0]);
        action.play();
      } else {
        if (process.env.IS_DEVELOPMENT) console.log('No animations found in this model: ' + this.modelName);
      }

      // Invoke the callback once the model is loaded
      if (onLoadCallback) onLoadCallback();
    });
  }

  // Update the animation mixer based on the clock delta time
  updateAnimations() {
    if (this.mixer) {
      const delta = this.clock.getDelta() * this.speed;
      this.mixer.update(delta);
    }
  }

  // Update the orbit speed
  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }

  // Return the model object
  getModel() {
    return this.model;
  }
}

export default GLTFModel;
