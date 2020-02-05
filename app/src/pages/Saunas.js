import React from 'react'
import SaunaList from '../components/SaunaList'
import Typography from '@material-ui/core/Typography'

const Saunas = () => (
    <div>
        <Typography variant="h3" gutterBottom>
            Saunas
        </Typography>
        <Typography variant="body1" gutterBottom>
            Verwaltung der Saunalandschaften.
        </Typography>
        <SaunaList />
    </div>
)

export default Saunas