import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import ReactChartkick from 'react-chartkick'
import Chart from 'chart.js'
import 'typeface-roboto'

ReactChartkick.addAdapter(Chart)

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
})

const Theme = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
)

export default Theme
