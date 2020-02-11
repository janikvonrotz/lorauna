import React from 'react'
import TemperatureList from './TemperatureList'
import Typography from '@material-ui/core/Typography'

const Temperatures = () => (
  <div>
    <Typography variant='h3' gutterBottom>
      Temperaturen
    </Typography>
    <Typography variant='body1' gutterBottom>
      Übersicht der Sauna Temperaturen.
    </Typography>
    <TemperatureList />
  </div>
)

export default Temperatures
