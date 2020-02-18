import React from 'react'
import QuoteTable from './QuoteTable'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import QuoteCreate from './QuoteCreate'
import { useToggle } from '../hooks'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1, 1, 1, 0)
  }
}))

const Quotes = () => {
  const classes = useStyles()

  const [open, toggle] = useToggle(false)

  return (
    <>
      <Typography variant='h3' gutterBottom>
        Sprüche
      </Typography>
      <Typography variant='body1' gutterBottom>
        Übersicht der Sauna Sprüche.
      </Typography>
      {!open && (
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={toggle}
        >
          Hinzufügen
        </Button>
      )}
      {open && <QuoteCreate handleClose={toggle} />}
      <QuoteTable />
    </>
  )
}

export default Quotes
