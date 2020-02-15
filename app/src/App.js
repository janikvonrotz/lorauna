import React from 'react'
import Apollo from './Apollo'
import Theme from './Theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import FlexboxGrid from './FlexboxGrid'
import Router from 'react-router-dom/BrowserRouter'
import Routes from './Routes'
import Header from './Header'

function App () {
  return (
    <Apollo>
      <FlexboxGrid>
        <CssBaseline>
          <Theme>
            <Router>
              <Header />
              <Routes />
            </Router>
          </Theme>
        </CssBaseline>
      </FlexboxGrid>
    </Apollo>
  )
}

export default App
