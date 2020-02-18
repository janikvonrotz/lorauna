import React from 'react'
import Link from 'react-router-dom/Link'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import SettingsIcon from '@material-ui/icons/Settings'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Divider from '@material-ui/core/Divider'
import PropTypes from 'prop-types'
import ToysIcon from '@material-ui/icons/Toys'
import HistoryIcon from '@material-ui/icons/History'
import InfoIcon from '@material-ui/icons/Info'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'

const drawerWidth = 240

// Styles for menu bar and drawer
const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  link: {
    textDecoration: 'none'
  }
}))

const HeaderDrawer = ({ open, toggleDrawer }) => {
  const classes = useStyles()

  return (
    <Drawer
      open={open}
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper
      }}
      onClick={toggleDrawer}
    >
      <MenuItem className={classes.drawerHeader}>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </MenuItem>
      <Divider />
      <Link to='/saunas' className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Saunas</ListItemText>
        </MenuItem>
      </Link>
      <Link to='/visitors' className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText>Besucher</ListItemText>
        </MenuItem>
      </Link>
      <Link to='/temperatures' className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <ToysIcon />
          </ListItemIcon>
          <ListItemText>Temperaturen</ListItemText>
        </MenuItem>
      </Link>
      <Link to='/capacity_messages' className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText>Kapazitätsmeldungen</ListItemText>
        </MenuItem>
      </Link>
      <Link to='/quotes' className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <FormatQuoteIcon />
          </ListItemIcon>
          <ListItemText>Sprüche</ListItemText>
        </MenuItem>
      </Link>
      <Link to='/about' className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText>Über</ListItemText>
        </MenuItem>
      </Link>
    </Drawer>
  )
}

HeaderDrawer.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func,
  user: PropTypes.object
}

export default HeaderDrawer
