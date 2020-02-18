import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import HeaderDrawer from './HeaderDrawer'
import { useToggle } from '../hooks'

// Styles for menu bar and drawer
const useStyles = makeStyles(theme => ({
  buttonMenu: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    textDecoration: 'none'
  }
}))

const Header = () => {
  const classes = useStyles()

  // Hooks
  const [open, toggleDrawer] = useToggle(false)

  return (
    <AppBar position='static'>

      <Toolbar>
        <IconButton
          onClick={toggleDrawer}
          edge='start'
          className={classes.buttonMenu}
          color='inherit'
          aria-label='menu'
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h5' className={classes.title}>
          Lorauna
        </Typography>
      </Toolbar>
      <HeaderDrawer open={open} toggleDrawer={toggleDrawer} />
    </AppBar>
  )
}

export default Header
