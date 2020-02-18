import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Divider from '@material-ui/core/Divider'
import SaunaVisitorButtons from './SaunaVisitorButtons'

const styles = theme => ({
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
})

const SaunaListItem = ({ sauna, classes }) => (
  <div>
    <Divider light className={classes.divider} />
    <Typography variant='h4'>
      {sauna.name}
    </Typography>
    <Link to={`/sauna/${sauna._id}`}>
      <Typography variant='body1' gutterBottom>
        Bearbeiten
      </Typography>
    </Link>
    <Typography variant='body1' gutterBottom>
      Auslastung: {sauna.current_seats}/{sauna.max_seats}
    </Typography>
    <Typography variant='body1' gutterBottom>
      Statusnachricht: {sauna.capacity_message}
    </Typography>
    <Typography variant='body1' gutterBottom>
      Ein- und Ausgang der Besucher registrieren:
    </Typography>
    <SaunaVisitorButtons sauna={sauna} />
  </div>
)

SaunaListItem.propTypes = {
  sauna: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SaunaListItem)
