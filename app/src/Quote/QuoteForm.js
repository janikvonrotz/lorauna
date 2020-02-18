import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { useForm } from '../hooks'

const QuoteForm = ({ quote, onSubmit, children }) => {
  const [values, handleChange, handleSubmit] = useForm(onSubmit, quote)

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant='standard'
        margin='normal'
        required
        fullWidth
        id='quote'
        name='quote'
        label='Spruch'
        type='text'
        value={values.quote}
        onChange={handleChange}
        autoFocus
      />
      <TextField
        variant='standard'
        margin='normal'
        fullWidth
        id='author'
        name='author'
        label='Author'
        type='text'
        value={values.author}
        onChange={handleChange}
        autoFocus
      />
      {children}
    </form>
  )
}

QuoteForm.propTypes = {
  quote: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default QuoteForm
