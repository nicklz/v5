import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { Hexagon } from './components/Hexagon';

import './App.css';

function App() {
  const [page, setContent] = useState('');

  //TODO: clean this up with a constants file

  return (
    <>

      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Hexagon />
      </Canvas>
    </>
  )
}
export default App;
