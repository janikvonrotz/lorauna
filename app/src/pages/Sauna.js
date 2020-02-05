import React from 'react'
import SaunaEdit from '../components/SaunaEdit'

const Sauna = ({ match }) => (
    <div>
        <SaunaEdit id={ match.params.id } />
    </div>
)

export default Sauna