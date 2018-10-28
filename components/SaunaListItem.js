import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import EditIcon from '@material-ui/icons/Edit'
import gql from "graphql-tag"
import { ApolloConsumer } from 'react-apollo'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
})

const createVisitorMutation = gql`
    mutation createVisitor($value: String!, $sauna_id: String!) {
        createVisitor(value: $value, sauna_id: $sauna_id) {
            _id
        }
    }
`

const createVisitor = () => {
    console.log("Add Visitor")
}

const SaunaListItem = ({ sauna, classes }) => {
    return (
        <ApolloConsumer>
            {client => (
            <div>
                <Typography variant="h4" component="h4">
                    {sauna.name}
                </Typography>
                <Typography gutterBottom component="p">
                    Auslastung: {sauna.current_seats}/{sauna.max_seats}
                </Typography>
                <Button variant="fab" color="primary" aria-label="Add" className={classes.button} onClick={() => createVisitor(1, sauna._id, client)}>
                    <AddIcon fontSize="small" />
                </Button>
                <Button variant="fab" color="secondary" aria-label="Remove" className={classes.button} onClick={() => createVisitor(-1, sauna._id, client)}>
                    <RemoveIcon fontSize="small" />
                </Button>
                <Button variant="fab" color="secondary" aria-label="Edit" className={classes.button}>
                    <EditIcon fontSize="small" />
                </Button>
            </div>)}
        </ApolloConsumer>
    )
}

SaunaListItem.propTypes = {
    sauna: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SaunaListItem)