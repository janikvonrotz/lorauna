import React from 'react'
import { Query } from 'react-apollo'
import Typography from '@material-ui/core/Typography'
import Error from './Error'
import Loading from './Loading'
import { SAUNA } from '../lib/queries'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
})

class SaunaEdit extends React.Component {

    state = {
      name: 'Cat in the Hat',
      max_seats: 100,
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        })
    }
    
    render () {
        const { name, max_seats } = this.state
        const { classes, id } = this.props

        return (
            <Query variables={{id}} query={SAUNA}>
                {({ loading, error, data }) => {

                    if (loading) return <Loading />
                    if (error) return <Error />

                    const { sauna } = data

                    return (
                        <form>
                            <Typography variant="body1" gutterBottom>
                                Bearbeiten: {sauna.name}
                            </Typography>
                            <TextField
                                id={sauna._id}
                                label="Name"
                                className={classes.textField}
                                value={name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                            />
                            <br />
                            <TextField
                                id={sauna._id}
                                label="Maximale Anzahl Plätze"
                                className={classes.textField}
                                value={max_seats}
                                onChange={this.handleChange('max_seats')}
                                margin="normal"
                            />
                            <br />
                            <Button variant="contained" color="primary" className={classes.button}>
                                Primary
                            </Button>
                            <Button variant="contained" color="secondary" className={classes.button}>
                                Secondary
                            </Button>
                        </form>
                    )
                }}
            </Query>
        )
    }
}

export default withStyles(styles)(SaunaEdit)