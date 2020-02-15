import React from 'react'
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
import ToysIcon from '@material-ui/icons/Toys'
import HistoryIcon from '@material-ui/icons/History'
import SettingsIcon from '@material-ui/icons/Settings'
import InfoIcon from '@material-ui/icons/Info'
import PaperSheet from './PaperSheet'
import About from './About'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Settings from './Settings'
import Sauna from './Sauna'
import Saunas from './Saunas'
import Visitors from './Visitors'
import CapacityMessage from './CapacityMessage'
// import Notification from './Notification'
import Temperatures from './Temperatures'

class AppRouter extends React.Component {

  constructor(props) {
    super(props)
    this.state = { drawerOpen: false }
  }

  toggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }

  render() {

    return (
      <Router>
        {/* <Notification /> */}
        <AppBar position='static'>
          <Toolbar>
            <IconButton color='inherit' aria-label='Menu' onClick={this.toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit'>
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
          <Link to='/saunas'>
            <MenuItem onClick={this.toggleDrawer}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Saunas</ListItemText>
            </MenuItem>
          </Link>
          <Link to='/visitors'>
            <MenuItem onClick={this.toggleDrawer}>
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText>Besucher</ListItemText>
            </MenuItem>
          </Link>
          <Link to='/temperatures'>
            <MenuItem onClick={this.toggleDrawer}>
              <ListItemIcon>
                <ToysIcon />
              </ListItemIcon>
              <ListItemText>Temperaturen</ListItemText>
            </MenuItem>
          </Link>
          <Link to='/settings'>
            <MenuItem onClick={this.toggleDrawer}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText>Einstellungen</ListItemText>
            </MenuItem>
          </Link>
          <Link to='/about'>
            <MenuItem onClick={this.toggleDrawer}>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText>Über</ListItemText>
            </MenuItem>
          </Link>
        </Drawer>
        <PaperSheet>
          <Route exact path='/' component={Saunas} />
          <Route path='/saunas' component={Saunas} />
          <Route path='/sauna/:id' component={Sauna} />
          <Route path='/visitors' component={Visitors} />
          <Route path='/temperatures' component={Temperatures} />
          <Route path='/about' component={About} />
          <Route path='/settings' component={Settings} />
          <Route path='/capacity_message/:id' component={CapacityMessage} />
        </PaperSheet>
      </Router>
    )
  }
}

export default AppRouter