import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Stars = () => {
  const ref = useRef();
  const points = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(5000 * 3); // Increase the number of stars
    for (let i = 0; i < positions.length; i++) {
      positions[i] = (Math.random() - 0.5) * 1000; // Increase the range of positions
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame(({ clock }) => {
    ref.current.rotation.x = clock.getElapsedTime() * 0.01;
    ref.current.rotation.y = clock.getElapsedTime() * 0.01;
  });

  return (
    <points ref={ref} geometry={points}>
      <pointsMaterial attach="material" color={0xffffff} size={0.1} />
    </points>
  );
};

export default Stars;
