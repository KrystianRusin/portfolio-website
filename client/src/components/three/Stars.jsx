import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Stars = () => {
  const ref = useRef();
  const points = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(5000 * 3); // Increase the number of stars
    for (let i = 0; i < positions.length; i += 3) {
      const radius = 1000 * Math.sqrt(Math.random()); // Favor smaller radii
      const sphericalCoords = new THREE.Spherical(
        radius,
        2 * Math.PI * Math.random(),
        Math.PI * Math.random()
      );
      const position = new THREE.Vector3().setFromSpherical(sphericalCoords);
      positions[i] = position.x;
      positions[i + 1] = position.y;
      positions[i + 2] = position.z;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  return (
    <points ref={ref} geometry={points}>
      <pointsMaterial attach="material" color={0xffffff} size={0.1} />
    </points>
  );
};

export default Stars;
