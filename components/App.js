import FlexboxGrid from './FlexboxGrid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import CloseIcon from '@material-ui/icons/Close'
import HomeIcon from '@material-ui/icons/Home'
import SettingsIcon from '@material-ui/icons/Settings'
import InfoIcon from '@material-ui/icons/Info'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {drawerOpen: false};
    }

    toggleDrawer = () => {
        this.setState({drawerOpen: !this.state.drawerOpen})
    }

    render() {
        const { children } = this.props

        return (
            <FlexboxGrid>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Lorauna
                        </Typography>
                    </Toolbar>
                </AppBar>
                {children}
                <Drawer open={this.state.drawerOpen}>
                    <MenuItem onClick={this.toggleDrawer}>
                        <ListItemIcon>
                            <CloseIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Close" />
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText inset>Saunas</ListItemText>
                    </MenuItem>
                    <MenuItem href="/settings">
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Settings" />
                    </MenuItem>
                    <MenuItem href="/about">
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="About" />
                    </MenuItem>
                </Drawer>
            </FlexboxGrid>
        )
    }
}

export default App