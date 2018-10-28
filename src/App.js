import React, { Component } from 'react'
import './App.css'
import AppRouter from './components/AppRouter'
import Apollo from './components/Apollo'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Apollo>
                        <AppRouter />
                    </Apollo>
                </header>
            </div>
        )
    }
}

export default App
