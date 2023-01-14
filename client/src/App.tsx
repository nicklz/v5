import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { Hexagon } from './components/Hexagon';

import './App.css';

function App() {
  const [page, setContent] = useState('');

  //TODO: clean this up with a constants file

  return (
    <>
      <h1>HELLO dsafadfsfdsadsaf</h1>
      <h1>HELLO dsafadfsfdsadsaf</h1>
      <h1>HELLO dsafadfsfdsadsaf</h1>
      <h1>HELLO dsafadfsfdsadsaf</h1>
      <h1>HELLO dsafadfsfdsadsaf</h1>
      <Canvas>
        <Hexagon />
      </Canvas>
    </>
  )
}
export default App;
