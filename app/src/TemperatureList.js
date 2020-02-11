import React from 'react'
import { Query } from 'react-apollo'
import { ALL_TEMPERATURES } from './queries'
import Error from './Error'
import Loading from './Loading'
import { LineChart } from 'react-chartkick'

const TemperatureList = () => (
  <Query query={ALL_TEMPERATURES}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />
      if (error) return <Error />

      // create chart data set
      const chartData = {}
      data.allTemperatures.map((temperature) => {
        const date = new Date(Date.parse(temperature.created))
        chartData[date.toLocaleTimeString()] = temperature.value
        return null
      })

      const options = {
        scales: {
          yAxes: [{
            stacked: true,
            ticks: {
              stepSize: 10
            }
          }]
        }
      }

      return (
        <LineChart data={chartData} library={options} />
      )
    }}
  </Query>
)

export default TemperatureList
