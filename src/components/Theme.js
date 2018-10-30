import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
})

const Theme = ({children}) => (
    <MuiThemeProvider theme={theme}>
        {children}
    </MuiThemeProvider>
)

export default Theme