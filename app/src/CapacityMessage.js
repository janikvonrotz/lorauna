import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import CapacityMessageList from './CapacityMessageList'

const styles = theme => ({
  root: {
  }
})

const CapacityMessage = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant='h3' gutterBottom>
      Kapazitätsmeldungen
    </Typography>
    <Typography variant='subtitle1' gutterBottom>
      Auf dieser Seite können Sie die Kapazitätsmeldungen verwalten.
    </Typography>
    <CapacityMessageList />
  </div>
)

CapacityMessage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CapacityMessage)
