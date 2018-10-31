import React from 'react'
import { Query } from 'react-apollo'
import { NOTIFICATION } from '../lib/queries'
import { withStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'

const styles = theme => ({

})

class Notification extends React.Component {

    state = {
        open: false,
        notification: "none",
        notification_id: null
    }

    toggleNotification = () => {
        this.setState({
            open: !this.state.open,
        })
    }
    
    render () {

        return (

            <Query query={NOTIFICATION}>
            {({ data }) => {

                console.log(data)

                if(data.notification && data.notification_id !== this.state.notification_id) {
                    this.setState({
                        open: true,
                        notification: data.notification,
                        notification_id: data.notification_id,
                    })
                }

                return (              
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        open={this.state.open}
                        onClose={this.toggleNotification}
                        autoHideDuration={3000}
                        message={this.state.notification}
                    />
                )
            }}
            </Query>
        )
    }
}

export default withStyles(styles)(Notification)