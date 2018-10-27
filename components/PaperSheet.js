import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
})

function PaperSheet({children, classes}) {

    return (
        <div>
            <Paper className={classes.root} elevation={1}>
                {children}
            </Paper>
        </div>
    )
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PaperSheet)