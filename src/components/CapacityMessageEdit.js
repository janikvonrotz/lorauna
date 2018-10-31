import React from 'react'
import { Query } from 'react-apollo'
import Typography from '@material-ui/core/Typography'
import Error from './Error'
import Loading from './Loading'
import { CAPACITY_MESSAGE, ALL_CAPACITY_MESSAGES } from '../lib/queries'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { UPDATE_CAPACITY_MESSAGE } from '../lib/mutations'
import { Mutation } from 'react-apollo'

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

const CapacityMessageEditContainer = ({id, classes}) => (
    <Query variables={{id}} query={CAPACITY_MESSAGE}>
        {({ loading, error, data }) => {

            if (loading) return <Loading />
            if (error) return <Error />

            return (
                <CapacityMessageEdit capacityMessage={data.capacityMessage} classes={classes} />                
            )
        }}
    </Query>
)

class CapacityMessageEdit extends React.Component {

    state = this.props.capacityMessage

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        })
    }
    
    render () {
        const { message } = this.state
        const { classes, capacityMessage } = this.props

        return (

            <form>
                <Typography variant="h5" gutterBottom>
                    Bearbeiten: {capacityMessage.message}
                </Typography>
                <TextField
                    label="Nachricht"
                    className={classes.textField}
                    value={message}
                    onChange={this.handleChange('message')}
                    margin="normal"
                />
                <br />
                <Mutation mutation={UPDATE_CAPACITY_MESSAGE} variables={{id: capacityMessage._id, message: message }} refetchQueries={[{query: ALL_CAPACITY_MESSAGES}]}>
                {(updateCapacityMessage, { data, client }) => {

                    if(data){
                        client.writeData({ data: { notification: "Nachricht gespeichert", notification_id: capacityMessage._id } })
                    }

                   return (
                        <Link to="/settings">
                            <Button 
                                variant="contained"
                                color="primary" className={classes.button}
                                onClick={() => updateCapacityMessage()}
                            >
                                Speichern
                            </Button>
                        </Link>
                    )
                }}
                </Mutation>
                <Link to="/settings">
                    <Button variant="contained" color="secondary" className={classes.button}>
                        Abbrechen
                    </Button>
                </Link>
            </form>
        )
    }
}

export default withStyles(styles)(CapacityMessageEditContainer)