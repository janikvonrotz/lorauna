import React from 'react'
import CapacityMessageItemEdit from './CapacityMessageItemEdit'

const CapacityMessageItem = ({ match }) => (
  <>
    <CapacityMessageItemEdit id={match.params.id} />
  </>
)

export default CapacityMessageItem
