import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import QuoteForm from './QuoteForm'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_QUOTE, ALL_QUOTES } from '../queries'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1, 1, 1, 0)
  }
}))

const QuoteCreate = ({ handleClose }) => {
  const classes = useStyles()

  // Set default values
  const quote = { quote: '', author: '' }

  const [createQuote] = useMutation(CREATE_QUOTE, {
    refetchQueries: [{
      query: ALL_QUOTES
    }]
  })

  const handleSubmit = (quote) => {
    createQuote({ variables: quote })
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

QuoteCreate.propTypes = {
  handleClose: PropTypes.func
}

export default QuoteCreate
