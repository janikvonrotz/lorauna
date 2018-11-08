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
        <Typography variant="h3" gutterBottom>
            About
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
            Besucherverwaltung für die Sauna Lorrainebad.
        </Typography>
    </div>
)

About.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(About)