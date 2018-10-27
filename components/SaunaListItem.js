import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import EditIcon from '@material-ui/icons/Edit'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
})

const SaunaListItem = ({ sauna, classes }) => {
    return (
        <div>
            <Typography variant="h4" component="h4">
                {sauna.name}
            </Typography>
            <Typography gutterBottom component="p">
                Auslastung: {sauna.current_seats}/{sauna.max_seats}
            </Typography>
            <Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
                <AddIcon fontSize="small" />
            </Button>
            <Button variant="fab" color="secondary" aria-label="Remove" className={classes.button}>
                <RemoveIcon fontSize="small" />
            </Button>
            <Button variant="fab" color="secondary" aria-label="Edit" className={classes.button}>
                <EditIcon fontSize="small" />
            </Button>
        </div>
    )
}

SaunaListItem.propTypes = {
    sauna: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SaunaListItem)