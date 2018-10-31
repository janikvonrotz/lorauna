import React from 'react'
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
import HistoryIcon from '@material-ui/icons/History'
import SettingsIcon from '@material-ui/icons/Settings'
import InfoIcon from '@material-ui/icons/Info'
import PaperSheet from './PaperSheet'
import About from '../pages/About'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Settings from '../pages/Settings'
import Sauna from '../pages/Sauna'
import Saunas from '../pages/Saunas'
import Visitors from '../pages/Visitors'
import Index from '../pages/Index'
import CapacityMessage from '../pages/CapacityMessage'
import Notification from './Notification'

class AppRouter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {drawerOpen: false}
    }

    toggleDrawer = () => {
        this.setState({drawerOpen: !this.state.drawerOpen})
    }

    render() {

        return (
            <Router>
                <FlexboxGrid>
                    <Notification />
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
                    <Drawer open={this.state.drawerOpen}>
                        <MenuItem onClick={this.toggleDrawer}>
                            <ListItemIcon>
                                <CloseIcon />
                            </ListItemIcon>
                            <ListItemText>Close</ListItemText>
                        </MenuItem>
                        <Link to="/saunas">
                            <MenuItem onClick={this.toggleDrawer}>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText>Saunas</ListItemText>
                            </MenuItem>
                        </Link>
                        <Link to="/visitors">
                            <MenuItem onClick={this.toggleDrawer}>
                                <ListItemIcon>
                                    <HistoryIcon />
                                </ListItemIcon>
                                <ListItemText>Visitors</ListItemText>
                            </MenuItem>
                        </Link>
                        <Link to="/settings">
                            <MenuItem onClick={this.toggleDrawer}>
                                <ListItemIcon>
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText>Settings</ListItemText>
                            </MenuItem>
                            </Link>
                        <Link to="/about">
                            <MenuItem onClick={this.toggleDrawer}>
                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemText>About</ListItemText>
                            </MenuItem>
                        </Link>
                    </Drawer>
                    <PaperSheet>
                        <Route exact path="/" component={Index} />
                        <Route path="/saunas" component={Saunas} />
                        <Route path="/sauna/:id" component={Sauna} />
                        <Route path="/visitors" component={Visitors} />
                        <Route path="/about" component={About} />
                        <Route path="/settings" component={Settings} />
                        <Route path="/capacity_message/:id" component={CapacityMessage} />
                    </PaperSheet>
                </FlexboxGrid>
            </Router>
        )
    }
}

export default AppRouter