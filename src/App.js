import React, { Component } from 'react'
import { Button } from './commons/Buttons'
import { Input } from './commons/Inputs'

import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hello</p>
        </header>
        <Input />
        <Button>Hello</Button>
      </div>
    )
  }
}

export default App
