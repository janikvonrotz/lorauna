import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import QuoteForm from './QuoteForm'
import { useMutation } from '@apollo/react-hooks'
import { UPDATE_QUOTE, ALL_QUOTES } from '../queries'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1, 1, 1, 0)
  }
}))

const QuoteUpdate = ({ quote, handleClose }) => {
  const classes = useStyles()

  const [updateQuote] = useMutation(UPDATE_QUOTE, {
    refetchQueries: [{
      query: ALL_QUOTES
    }]
  })

  const handleSubmit = (quote) => {
    updateQuote({ variables: quote })
    handleClose()
  }

  return (
    <QuoteForm quote={quote} onSubmit={handleSubmit}>
      <Button
        variant='outlined'
        color='secondary'
        className={classes.button}
        onClick={handleClose}
      >
        Abrechen
      </Button>
      <Button
        variant='contained'
        color='primary'
        type='submit'
        className={classes.button}
      >
        Speichern
      </Button>
    </QuoteForm>
  )
}

QuoteUpdate.propTypes = {
  quote: PropTypes.object.isRequired,
  handleClose: PropTypes.func
}

export default QuoteUpdate
