import React, { Component } from 'react'
import './App.css'
import AppRouter from './AppRouter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppRouter />
        </header>
      </div>
    )
  }
}

export default App
