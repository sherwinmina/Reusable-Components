import React, { Component } from 'react'
import { Button } from './commons/Buttons'

import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hello</p>
        </header>

        <Button>Hello</Button>
      </div>
    )
  }
}

export default App
