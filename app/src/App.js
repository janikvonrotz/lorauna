import React, { Component } from 'react'
import AppRouter from './components/AppRouter'
import Apollo from './components/Apollo'
import Theme from './components/Theme'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Apollo>
                        <Theme>
                            <AppRouter />
                        </Theme>
                    </Apollo>
                </header>
            </div>
        )
    }
}

export default App
