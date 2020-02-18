import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import 'typeface-roboto'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#007A81'
    },
    secondary: {
      main: '#000'
    }
  }
})

const Theme = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
)

export default Theme
