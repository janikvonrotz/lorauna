import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { Mutation } from 'react-apollo'
import { Link } from 'react-router-dom'
import Snackbar from '@material-ui/core/Snackbar'
import Divider from '@material-ui/core/Divider'
import { ALL_SAUNAS } from '../lib/queries'
import { CREATE_VISITOR } from '../lib/mutations'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    divider: {
        marginTop:  theme.spacing.unit,
        marginBottom:  theme.spacing.unit,
    }
})

const SaunaListItem = ({ sauna, classes }) => (
    <div>
        <Divider light className={classes.divider} />
        <Typography variant="h4">
            {sauna.name}
        </Typography>
        <Link to={`/sauna/${sauna._id}`}>
            <Typography variant="body1" gutterBottom>
                Bearbeiten
            </Typography>
        </Link>
        <Typography variant="body1" gutterBottom>
            Auslastung: {sauna.current_seats}/{sauna.max_seats}
        </Typography>
        <Typography variant="body1" gutterBottom>
            Statusnachricht: {sauna.capacity_message}
        </Typography>
        <Typography variant="body1" gutterBottom>
            Ein- und Ausgang der Besucher registrieren:
        </Typography>
        <Mutation mutation={CREATE_VISITOR} variables={{ value: 1, sauna_id: sauna._id }} refetchQueries={[{query: ALL_SAUNAS}]}>
            {(createVisitor, { data }) => (
                <span>
                    <Button variant="fab" color="primary" aria-label="Add" className={classes.button} onClick={() => createVisitor()}>
                        <AddIcon fontSize="small" />
                    </Button>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        open={Boolean(data)}
                        autoHideDuration={6000}
                        message="Visitor added!"
                    />
                </span>
            )}
        </Mutation>
        <Mutation mutation={CREATE_VISITOR} variables={{ value: -1, sauna_id: sauna._id }} refetchQueries={[{query: ALL_SAUNAS}]}>
            {(createVisitor, { data }) => (
                <span>
                    <Button variant="fab" color="secondary" aria-label="Remove" className={classes.button} onClick={() => createVisitor()}>
                        <RemoveIcon fontSize="small" />
                    </Button>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        open={Boolean(data)}
                        autoHideDuration={6000}
                        message="Visitor removed!"
                    />
                </span>
            )}
        </Mutation>
    </div>
)

SaunaListItem.propTypes = {
    sauna: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SaunaListItem)