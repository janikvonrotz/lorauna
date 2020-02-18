import React from 'react'
import { Query } from 'react-apollo'
import Error from '../Error'
import Loading from '../Loading'
import { ALL_VISITORS } from '../queries'
import { LineChart } from 'react-chartkick'

const VisitorList = () => (
  <Query query={ALL_VISITORS} variables={{ limit: 30 }}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />
      if (error) return <Error />

      // create chart data set
      const chartData = {}
      data.allVisitors.map((visitor) => {
        const date = new Date(Date.parse(visitor.created))
        chartData[date.toLocaleTimeString()] = visitor.current_seats
        return null
      })

      const options = {
        scales: {
          yAxes: [{
            stacked: true,
            ticks: {
              stepSize: 2
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

export default VisitorList
