import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
})

const PaperSheet = ({ children, classes }) => (
  <Paper className={classes.root} elevation={1}>
    {children}
  </Paper>
)

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PaperSheet)
