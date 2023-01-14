import React, { useRef, Suspense } from 'react';
import { useFrame } from 'react-three-fiber';

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export const Hexagon: React.FunctionComponent = () => {
  const hexagonRef = useRef<any>(null);
  const gltf = useLoader(GLTFLoader, '/v5/hexagon.gltf')

  useFrame(() => {
    if (hexagonRef.current) {
      hexagonRef.current.rotation.x += 0.01;
      hexagonRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Suspense fallback={null}>
      <primitive position={[0, 0, -80]} ref={hexagonRef} object={gltf.scene} />
    </Suspense>
  );
}
