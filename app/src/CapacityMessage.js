import React from 'react'
import CapacityMessageEdit from './CapacityMessageEdit'

const CapacityMessage = ({ match }) => (
  <div>
    <CapacityMessageEdit id={match.params.id} />
  </div>
)

export default CapacityMessage
