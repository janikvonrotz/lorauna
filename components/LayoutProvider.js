import { MuiThemeProvider } from '@material-ui/core/styles'
import FlexboxGrid from './FlexboxGrid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'
import getPageContext from '../src/getPageContext'

class LayoutProvider extends React.Component {

    constructor(props) {
      super(props)
      this.pageContext = getPageContext()
    }
  
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles)
        }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
            <MuiThemeProvider
                theme={this.pageContext.theme}
                sheetsManager={this.pageContext.sheetsManager}
            >
                <CssBaseline />
                <FlexboxGrid>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit">
                                Lorauna
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    {this.props.children}
                </FlexboxGrid>
            </MuiThemeProvider>
        </JssProvider>
    )
  }
}

export default LayoutProvider