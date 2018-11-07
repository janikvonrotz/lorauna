import React from 'react'
import { Query } from 'react-apollo'
import Typography from '@material-ui/core/Typography'
import Error from './Error'
import Loading from './Loading'
import { SAUNA, ALL_SAUNAS } from '../lib/queries'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { UPDATE_SAUNA } from '../lib/mutations'
import { Mutation } from 'react-apollo'
import { ObjectId } from '../lib/helpers'

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

const SaunaEditContainer = ({id, classes}) => (
    <Query variables={{id}} query={SAUNA}>
        {({ loading, error, data }) => {

            if (loading) return <Loading />
            if (error) return <Error />

            return (
                <SaunaEdit sauna={data.sauna} classes={classes} />                
            )
        }}
    </Query>
)

class SaunaEdit extends React.Component {

    state = this.props.sauna

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        })
    }
    
    render () {
        const { name, max_seats } = this.state
        const { classes, sauna } = this.props

        return (

            <form>
                <Typography variant="h5" gutterBottom>
                    Bearbeiten: {sauna.name}
                </Typography>
                <TextField
                    label="Name"
                    className={classes.textField}
                    value={name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                />
                <br />
                <TextField
                    label="Maximale Anzahl Plätze"
                    className={classes.textField}
                    value={max_seats}
                    onChange={this.handleChange('max_seats')}
                    type="number"
                    margin="normal"
                />
                <br />
                <Mutation mutation={UPDATE_SAUNA} variables={{id: sauna._id, name: name, max_seats: Number(max_seats) }} refetchQueries={[{query: ALL_SAUNAS}]}>
                {(updateSauna, { data, errors, client }) => {

                    if(data){
                        client.writeData({ data: { notification: "Sauna gespeichert", notification_id: ObjectId() } })
                    }

                   return (
                        <Link to="/saunas">
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={() => updateSauna()}
                            >
                                Speichern
                            </Button>
                        </Link>
                    )

                }}
                </Mutation>
                <Link to="/saunas">
                    <Button variant="contained" color="secondary" className={classes.button}>
                        Abbrechen
                    </Button>
                </Link>
            </form>
        )
    }
}

export default withStyles(styles)(SaunaEditContainer)