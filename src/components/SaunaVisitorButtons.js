import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { Mutation } from 'react-apollo'
import { ALL_SAUNAS } from '../lib/queries'
import { CREATE_VISITOR } from '../lib/mutations'
import { ObjectId } from '../lib/helpers'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
})

const SaunaVisitorButtons = ({sauna, classes}) => (
    <div>
        <Mutation
        mutation={CREATE_VISITOR}
        variables={{ value: -1, sauna_id: sauna._id }}
        refetchQueries={[{query: ALL_SAUNAS}]}>

            {(createVisitor, { data, error, client }) => {
                
                if(error) {
                    client.writeData({ data: { notification: error.message, notification_id: ObjectId() } })          
                }

                if(data){
                    client.writeData({ data: { notification: "Besucher entfernt", notification_id: ObjectId() } })
                }

                return (
                    <Button 
                        variant="fab"
                        color="secondary"
                        aria-label="Entfernen"
                        className={classes.button}
                        onClick={() => createVisitor()}
                    >
                        <RemoveIcon fontSize="small" />
                    </Button>
                )
            }}
        </Mutation>
        <Mutation
        mutation={CREATE_VISITOR}
        variables={{ value: 1, sauna_id: sauna._id }}
        refetchQueries={[{query: ALL_SAUNAS}]}>

            {(createVisitor, { data, error, client }) => {

                if(error) {
                    client.writeData({ data: { notification: error.message, notification_id: ObjectId() } })          
                }

                if(data){
                    client.writeData({ data: { notification: "Besucher hinzugefügt", notification_id: ObjectId() } })
                }

                return (
                    <Button 
                        variant="fab"
                        color="primary"
                        aria-label="Hinzufügen"
                        className={classes.button}
                        onClick={() => createVisitor()
                    }>
                        <AddIcon fontSize="small" />
                    </Button>
                )
            }}
        </Mutation>
    </div>
)

SaunaVisitorButtons.propTypes = {
    sauna: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SaunaVisitorButtons)