import React, { useState } from 'react'
import Error from '../Error'
import Loading from '../Loading'
import { ALL_QUOTES } from '../queries'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { useQuery } from '@apollo/react-hooks'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'
import QuoteDelete from './QuoteDelete'
import { useToggle } from '../hooks'
import QuoteUpdate from './QuoteUpdate'

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 300
  }
}))

const QuoteList = () => {
  const classes = useStyles()

  const [openUpdate, toggleUpdate] = useToggle(false)
  const [quoteUpdate, setQuoteUpdate] = useState({})
  const [quoteDelete, setQuoteDelete] = useState({})
  const [openDelete, toggleDelete] = useToggle(false)
  const { loading, error, data } = useQuery(ALL_QUOTES)

  if (loading) return <Loading />
  if (error) return <Error message={error.message} />

  const onDelete = (quote) => {
    setQuoteDelete(quote)
    toggleDelete()
  }

  const onUpdate = (quote) => {
    setQuoteUpdate(quote)
    toggleUpdate()
  }

  return (
    <>
      {openUpdate && (<QuoteUpdate quote={quoteUpdate} handleClose={toggleUpdate} />)}
      {openDelete && (<QuoteDelete open={openDelete} quote={quoteDelete} handleClose={toggleDelete} />)}
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              Spruch
            </TableCell>
            <TableCell>
              Author
            </TableCell>
            <TableCell>
              Edit
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.allQuotes.map(quote => (
            <TableRow key={quote._id}>
              <TableCell>
                {quote.quote}
              </TableCell>
              <TableCell>
                {quote.author}
              </TableCell>
              <TableCell>
                <IconButton
                  aria-label='Bearbeiten'
                  color='primary'
                  onClick={() => onUpdate(quote)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  aria-label='Löschen'
                  color='primary'
                  onClick={() => onDelete(quote)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default QuoteList
