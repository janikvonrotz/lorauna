import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
        paddingBottom: theme.spacing.unit * 20,
    },
})

const About = ({classes}) => (
    <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
            Settings
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
            On this page you can manage the capacity settings.
        </Typography>
    </div>
)

About.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(About)