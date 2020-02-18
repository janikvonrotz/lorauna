import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { ALL_SAUNAS } from '../queries'
import { CREATE_VISITOR } from '../mutations'
import { useMutation } from '@apollo/react-hooks'

const styles = theme => ({
  button: {
    margin: theme.spacing(1)
  }
})

const SaunaVisitorButtons = ({ sauna, classes }) => {

  const [createVisitor, { error }] = useMutation(CREATE_VISITOR, {
    refetchQueries: [{
      query: ALL_SAUNAS
    }]
  })

  // if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  // client.writeData({ data: { notification: error.message, notification_id: ObjectId() } })
  // client.writeData({ data: { notification: 'Besucher entfernt', notification_id: ObjectId() } })

  return (
    <>
      <Button
        variant='contained'
        color='secondary'
        aria-label='Entfernen'
        className={classes.button}
        onClick={() => createVisitor({ variables: { value: -1, sauna_id: sauna._id } })}
      >
        <RemoveIcon fontSize='small' />
      </Button>
      <Button
        variant='contained'
        color='primary'
        aria-label='Hinzufügen'
        className={classes.button}
        onClick={() => createVisitor({ variables: { value: 1, sauna_id: sauna._id } })}
      >
        <AddIcon fontSize='small' />
      </Button>
      <br />
      <Button
        variant='contained'
        color='secondary'
        aria-label='Entfernen'
        className={classes.button}
        onClick={() => createVisitor({ variables: { value: -5, sauna_id: sauna._id } })}
      >
        -5
      </Button>
      <Button
        variant='contained'
        color='primary'
        aria-label='Hinzufügen'
        className={classes.button}
        onClick={() => createVisitor({ variables: { value: 5, sauna_id: sauna._id } })}
      >
        +5
      </Button>
    </>
  )
}

SaunaVisitorButtons.propTypes = {
  sauna: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SaunaVisitorButtons)
