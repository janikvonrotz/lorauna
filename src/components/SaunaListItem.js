import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import EditIcon from '@material-ui/icons/Edit'
import gql from "graphql-tag"
import { Mutation } from 'react-apollo'
import { Link } from 'react-router-dom'
import Snackbar from '@material-ui/core/Snackbar';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
})

const CREATE_VISITOR = gql`
    mutation createVisitor($value: Int!, $sauna_id: String!) {
        createVisitor(value: $value, sauna_id: $sauna_id) {
            _id
        }
    }
`

const ALL_SAUNAS = gql`
{
    allSaunas {
        name
        max_seats
        current_seats
        _id
        capacity_message
    }
}
`

const SaunaListItem = ({ sauna, classes }) => (
    <div>
        <Typography variant="h4">
            {sauna.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
            Auslastung: {sauna.current_seats}/{sauna.max_seats}
        </Typography>
        <Typography variant="body1" gutterBottom>
            Statusnachricht: {sauna.capacity_message}
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
        <Link to={`/sauna/${sauna._id}`}>
            <Button variant="fab" color="secondary" aria-label="Edit" className={classes.button}>
                <EditIcon fontSize="small" />
            </Button>
        </Link>
    </div>
)

SaunaListItem.propTypes = {
    sauna: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SaunaListItem)