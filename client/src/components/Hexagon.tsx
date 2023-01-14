import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Mesh, Shape, Path, ShapeGeometry, MeshStandardMaterial } from 'three';
//create a react three fiber functional component of a hexagon. the hexagon will be 10% of its width in height. it will have another smaller hexagon cut out from it's center. the component will be written in typescript
const createHexagonShape = () => {
  const shape = new Shape();
  const hole = new Path();
  //create main hexagon shape
  shape.moveTo(0, 0);
  shape.lineTo(1, 0);
  shape.lineTo(1.5, 0.866);
  shape.lineTo(1, 1.732);
  shape.lineTo(0, 1.732);
  shape.lineTo(-0.5, 0.866);
  shape.lineTo(0, 0);
  //create hole hexagon shape
  hole.moveTo(0.3, 0.3);
  hole.lineTo(0.7, 0.3);
  hole.lineTo(0.95, 0.866);
  hole.lineTo(0.7, 1.432);
  hole.lineTo(0.3, 1.432);
  hole.lineTo(0.05, 0.866);
  hole.lineTo(0.3, 0.3);
  shape.holes.push(hole);

  return shape;
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
      <meshStandardMaterial color={'silver'} />
    </mesh>
  );
}
