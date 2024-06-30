import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { Hexagon } from './components/Hexagon';
import { Block } from './components/Block';
import { Listing } from './components/Listing';

import './App.css';

function App() {
  const [page, setContent] = useState('');

  //TODO: clean this up with a constants file

  return (
    <>
      <div className="app">
        <header className="app-header">
          <Canvas className="app-logo">
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Hexagon />
          </Canvas>
          <p>
            Nick Kuhn
            <br />
            Technology Leader
          </p>
          <button onClick={() => setContent('overview')}>
            Overview
          </button>
          <button onClick={() => setContent('skills')}>
            Code
          </button>
          <button onClick={() => setContent('portfolio')}>
            Projects
          </button>
          <button onClick={() => window.open("https://www.youtube.com/@NICKLZ22/videos", "_blank")}>
            Videos
          </button>
          <button onClick={() => window.open("https://open.spotify.com/artist/7MhFAqUQR638zLxShAWudg?si=GgGSfYXdSEGoxcbZGl7e_g", "_blank")}>
            Music
          </button>
          <button onClick={() => window.open("https://www.linkedin.com/in/nicklz/", "_blank")}>
            Contact
          </button>
          <button onClick={() => window.open("https://nicklz.com/resume/resume2022.pdf", "_blank")}>
            Resume
          </button>

          <code className="footer">Powered by Drupal 10 + React Three Fiber (Typescript)<br />NICKLZ © 2024</code>
        </header>
        <main>
          {page === 'overview' && (
            <>
              <article className="content">
                <span className="close" onClick={() => setContent('close')}>
                  ✕
                </span>
                <Block endpoint='https://nicklz.com/v5/api/jsonapi/node/page/1948d086-84ae-473c-ad15-45ca5f8520b8'></Block>
              </article>
            </>
          )}
          {page === 'skills' && (
            <>
              <article className="content">
                <span className="close" onClick={() => setContent('close')}>
                  ✕
                </span>
                <Block endpoint="https://nicklz.com/v5/api/jsonapi/node/page/2f99cec1-6013-4cb0-95ec-4e53d0cc6fb3"></Block>
              </article>
            </>
          )}
          {page === 'portfolio' && (
            <>
              <article className="content">
                <span className="close" onClick={() => setContent('close')}>
                  ✕
                </span>
                <Listing endpoint="https://nicklz.com/v5/api/jsonapi/node/portfolio?include=field_portfolio_image&sort=created"></Listing>
              </article>
            </>
          )}
        </main>
      </div>

    </>
  )
}
export default App;
