import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  GridContainer: {
    width: '100%',
    margin: '0'
  },
  GridItem: {
    padding: '0!important'
  }
}))

const FlexBoxGrid = ({ children }) => {
  const classes = useStyles()

  return (
    <Grid container spacing={1} className={classes.GridContainer}>
      <Grid item xs={12} sm={1} md={2} className={classes.GridItem} />
      <Grid item xs={12} sm={10} md={8} className={classes.GridItem}>
        {children}
      </Grid>
      <Grid item xs={12} sm={1} md={2} className={classes.GridItem} />
    </Grid>
  )
}

FlexBoxGrid.propTypes = {
  children: PropTypes.any.isRequired
}

export default FlexBoxGrid
