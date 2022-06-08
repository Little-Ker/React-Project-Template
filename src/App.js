import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import styles from './app.module.sass'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const PropTest = (props) => {
  const { name } = props
  return (
    <h1>{name}</h1>
  )
}

PropTest.propTypes = {
  name: PropTypes.string.isRequired
}

function App() {
  const [ state ] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <PropTest name='Vivi' />
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
  )
}

export default App
