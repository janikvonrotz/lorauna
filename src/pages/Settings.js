import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import CapacityMessageList from '../components/CapacityMessageList'

const styles = theme => ({
    root: {
    },
})

const About = ({classes}) => (
    <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
            Einstellungen
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
            Auf dieser Seite können Sie die Kapazitätsmeldungen verwalten.
        </Typography>
        <CapacityMessageList />
    </div>
)

About.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(About)