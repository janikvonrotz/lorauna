import React from 'react'
import SaunaList from '../components/SaunaList'
import Typography from '@material-ui/core/Typography'

const Saunas = () => (
    <div>
        <Typography variant="h2">
            Saunas
        </Typography>
        <Typography variant="body1" gutterBottom>
            Verwaltung der Saunalandschaften.
        </Typography>
        <SaunaList />
    </div>
)

export default Saunas