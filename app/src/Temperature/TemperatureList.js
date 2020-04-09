import React from 'react'
import { Query } from 'react-apollo'
import { ALL_TEMPERATURES } from '../queries'
import Error from '../Error'
import Loading from '../Loading'
import { LineChart } from 'react-chartkick'
import 'chart.js'
import { groupBy } from '../helpers'

const TemperatureList = () => (
  <Query query={ALL_TEMPERATURES}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />
      if (error) return <Error />

      // Group data
      const temperature = groupBy(data.allTemperatures, 'sauna.name')

      // create chart data set
      const chartData = []
      Object.keys(temperature).map((key) => {
        const dataEntry = {
          name: key,
          data: {}
        }
        temperature[key].map((temperature) => {
          const date = new Date(Date.parse(temperature.created))
          dataEntry.data[date.toLocaleTimeString()] = temperature.value
        })
        chartData.push(dataEntry)
      })
      
      return (
        <LineChart
          data={chartData}
          library={{
            scales: {
              yAxes: [{
                ticks: {
                  stepSize: 10
                }
              }]
            }
          }}
        />
      )
    }}
  </Query>
)

export default TemperatureList
