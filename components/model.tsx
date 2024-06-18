import { useEffect, useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/birds.glb");
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const speed = 0.05; // Adjust the speed as necessary
  const startPosition = 1;
  const endPosition = -30;

  useEffect(() => {
    if (gltf.animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(gltf.scene);
      gltf.animations.forEach((clip) => {
        mixerRef.current?.clipAction(clip).play();
      });
    }

    // Rotate the model to face left and scale the model
    if (gltf.scene) {
      gltf.scene.rotation.y = Math.PI; // Rotate 180 degrees around the y-axis to face left
      gltf.scene.scale.set(4, 3, 2); // Scale the model uniformly

      // Set material to transparent
      gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material.transparent = true;
        }
      });
    }

    return () => {
      mixerRef.current?.stopAllAction();
    };
  }, [gltf]);

  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }

    if (modelRef.current) {
      // Move the model along the x-axis from center to left
      if (!modelRef.current) return;
      modelRef.current.position.x -= speed;

      // Adjust opacity based on position
      modelRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh) {
           // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          const distanceTravelled = startPosition - modelRef.current.position.x;
          const totalDistance = startPosition - endPosition;
          child.material.opacity = Math.max(
            0,
            1 - (distanceTravelled / totalDistance)
          );
        }
      });

      // Reset position if it becomes fully transparent
      if (modelRef.current.position.x < endPosition) {
        modelRef.current.position.x = startPosition; // Reset to starting position
        modelRef.current.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material.opacity = 1; // Reset opacity
          }
        });
      }
    }
  });

  return <primitive ref={modelRef} object={gltf.scene} />;
};

export default Model;
