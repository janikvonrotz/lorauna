import React from 'react'
import SaunaEdit from './SaunaEdit'

const Sauna = ({ match }) => (
  <>
    <SaunaEdit id={match.params.id} />
  </>
)

export default Sauna
