import { InputResolver } from '@phobase/site';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import siteConfig from './siteConfig.json';
import { BODY, HOME, TITLE } from './siteConfig'

const inputResolver = new InputResolver(siteConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {inputResolver.readInput<string>(HOME, BODY, TITLE).ok}
        </a>
      </header>
    </div>
  );
}

export default App;
