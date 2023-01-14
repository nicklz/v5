import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Mesh, Shape, ShapeGeometry, MeshStandardMaterial } from 'three';

const createHexagonShape = () => {
  const hexagon = new Shape();
  hexagon.moveTo(0, 1);
  for (let i = 1; i <= 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    const x = Math.cos(angle);
    const y = Math.sin(angle);
    hexagon.lineTo(x, y);
  }
  hexagon.closePath();
  return hexagon;
}


export const Hexagon: React.FunctionComponent = () => {
  const hexagonRef = useRef<Mesh>(null);

  useFrame(() => {
    if (hexagonRef.current) {
      hexagonRef.current.rotation.x += 0.01;
      hexagonRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={hexagonRef}>

      <shapeGeometry
        attach="geometry"
        args={[createHexagonShape(), 32]}
      />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
}
