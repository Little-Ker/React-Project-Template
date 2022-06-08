import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './app.module.sass'
import clsx from 'clsx'

function App() {
  const [ state ] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <h1 className={clsx(styles.title, state && styles.hideTitle)}>Title</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code className='main-blue'>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
