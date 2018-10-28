import React from 'react'
import SaunaEdit from '../components/SaunaEdit'

const Sauna = ({ match }) => (
    <SaunaEdit id={ match.params.id } />
)

export default Sauna