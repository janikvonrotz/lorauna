import React from 'react'
import SaunaEdit from './SaunaEdit'

const Sauna = ({ match }) => (
  <div>
    <SaunaEdit id={match.params.id} />
  </div>
)

export default Sauna
