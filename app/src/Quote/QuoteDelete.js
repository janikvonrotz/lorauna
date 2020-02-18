
import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { useMutation } from '@apollo/react-hooks'
import { DELETE_QUOTE, ALL_QUOTES } from '../queries'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const QuoteDelete = ({ open, quote, handleClose }) => {

  const [deleteQuote] = useMutation(DELETE_QUOTE, {
    refetchQueries: [{
      query: ALL_QUOTES
    }]
  })

  const onDelete = () => {
    deleteQuote({ variables: quote })
    handleClose()
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>Diesen Spruch wirklich löschen?</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Bitte die Löschung dieses Spruchs bestätigen.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Abrechen
        </Button>
        <Button onClick={onDelete} color='primary' autoFocus>
          Löschen
        </Button>
      </DialogActions>
    </Dialog>
  )
}

QuoteDelete.propTypes = {
  open: PropTypes.bool,
  quote: PropTypes.object.isRequired
}

export default QuoteDelete
