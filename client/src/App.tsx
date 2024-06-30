import React, { useState, useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import { Hexagon } from './components/Hexagon';
import { Block } from './components/Block';
import { Listing } from './components/Listing';

import './App.css';

// Extend the Window interface to include onSpotifyIframeApiReady
declare global {
  interface Window {
    onSpotifyIframeApiReady: (IFrameAPI: any) => void;
  }
}

function App() {
  const [page, setContent] = useState<string>('');

  useEffect(() => {
    // Set content to 'close' on mobile devices
    const checkMobile = () => {
      if (window.innerWidth > 800) {
        setContent('music');
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    // Load Spotify SDK
    const script = document.createElement("script");
    script.src = "https://open.spotify.com/embed-podcast/iframe-api/v1";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Wait for Spotify's API to load
      window.onSpotifyIframeApiReady = (IFrameAPI: any) => {
        const element = document.getElementById('spotify-embed');
        const options = {
          uri: 'spotify:artist:7MhFAqUQR638zLxShAWudg'
        };
        const callback = (EmbedController: any) => { /* do nothing */ };
        IFrameAPI.createController(element, options, callback);
      };
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
            Skills
          </button>
          <button onClick={() => setContent('portfolio')}>
            Projects
          </button>
          <button onClick={() => window.open("https://www.youtube.com/@NICKLZ22/videos", "_blank")}>
            Videos
          </button>
          <button onClick={() => window.open("https://open.spotify.com/artist/7MhFAqUQR638zLxShAWudg?si=BsVfCXySTP2_jeEoxrDOmA", "_blank")}>
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
          {page === 'music' && (
            <>
              <article className="content">
                <span className="close" onClick={() => setContent('close')}>
                  ✕
                </span>
                <div className="spotify-player">
                  <div id="spotify-embed"></div>
                </div>
              </article>
            </>
          )}
        </main>
      </div >
    </>
  )
}

export default App;
