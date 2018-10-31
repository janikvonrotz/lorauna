import React from 'react'
import CapacityMessageEdit from '../components/CapacityMessageEdit'
import Typography from '@material-ui/core/Typography'

const CapacityMessage = ({ match }) => (
    <div>
        <CapacityMessageEdit id={ match.params.id } />
    </div>
)

export default CapacityMessage