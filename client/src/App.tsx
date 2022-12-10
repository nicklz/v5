import React, { useState } from 'react';
import logo from './logo.svg';
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
          <img src={logo} className="app-logo" alt="logo" />
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
            Portfolio
          </button>
          <button onClick={() => window.location.replace("https://www.linkedin.com/in/nicklz/")}>
            Contact
          </button>
          <button onClick={() => window.location.replace("https://nicklz.com/resume/resume2022.pdf")}>
            Resume
          </button>

          <code className="footer">Powered by Drupal 9 + React (Typescript)<br />NICKLZ © 2022</code>
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
