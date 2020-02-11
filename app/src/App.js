import React from 'react'
import AppRouter from './AppRouter'
import Apollo from './Apollo'
import Theme from './Theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import FlexboxGrid from './FlexboxGrid'

function App () {
  return (
    <Apollo>
      <FlexboxGrid>
        <CssBaseline>
          <Theme>
            <AppRouter />
          </Theme>
        </CssBaseline>
      </FlexboxGrid>
    </Apollo>
  )
}

export default App
