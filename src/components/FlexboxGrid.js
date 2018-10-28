import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
})

const FlexBoxGrid = ({ classes, children }) => (
    <div className={classes.root}>
        <Grid container spacing={24}>
            <Grid item xs={12} sm={1} md={2}>
            </Grid>
            <Grid item xs={12} sm={10} md={8}>
                {children}
            </Grid>
            <Grid item xs={12} sm={1} md={2}>
            </Grid>
        </Grid>
    </div>
)

FlexBoxGrid.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FlexBoxGrid)