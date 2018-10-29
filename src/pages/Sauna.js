import React from 'react'
import SaunaEdit from '../components/SaunaEdit'
import Typography from '@material-ui/core/Typography'

const Sauna = ({ match }) => (
    <div>
        <Typography variant="h3" gutterBottom>
            Sauna
        </Typography>
        <SaunaEdit id={ match.params.id } />
    </div>
)

export default Sauna