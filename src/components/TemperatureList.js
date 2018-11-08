import React from 'react'
import { Query } from 'react-apollo'
import { ALL_TEMPERATURES } from '../lib/queries'
import Error from './Error'
import Loading from './Loading'
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)

const TemperatureList = () => (
    <Query query={ALL_TEMPERATURES}>
    {({ loading, error, data }) => {

        if (loading) return <Loading />
        if (error) return <Error />

        // create chart data set
        let chartData = {}
        data.allTemperatures.map((temperature) => {
            let date = new Date(Date.parse(temperature.created))
            chartData[date.toLocaleTimeString()] = temperature.value
            return null
        })

        return (
            <LineChart data={chartData} discrete={true} />
        )
    }}
</Query>
)

export default TemperatureList