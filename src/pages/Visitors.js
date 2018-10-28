import React from 'react'
import VisitorList from '../components/VisitorList'
import Typography from '@material-ui/core/Typography'

const Visitors = () => (
    <div>
        <Typography variant="h2">
            Besucher
        </Typography>
        <Typography variant="body1" gutterBottom>
            Liste aller Sauna Ein- und Ausgänge.
        </Typography>
        <VisitorList />
    </div>
)

export default Visitors