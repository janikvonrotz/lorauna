import React from 'react'
import { Query } from 'react-apollo'
import Error from './Error'
import Loading from './Loading'
import { ALL_VISITORS } from '../lib/queries'
import { LineChart } from 'react-chartkick'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'
// import AddCircleIcon from '@material-ui/icons/AddCircle'
// import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
// import Typography from '@material-ui/core/Typography'

const VisitorList = () => (
    <Query query={ALL_VISITORS} variables={{limit: 30}}>
        {({ loading, error, data }) => {

            if (loading) return <Loading />
            if (error) return <Error />

            // create chart data set
            let chartData = {}
            data.allVisitors.map((visitor) => {
                let date = new Date(Date.parse(visitor.created))
                chartData[date.toLocaleTimeString()] = visitor.current_seats
                return null
            })

            let options = {
                scales: {
                    yAxes: [{      
                        stacked: true,
                        ticks: {
                            stepSize: 2,
                        }      
                    }]
                }
            }

            return (        
                <LineChart data={chartData} library={options} />  
                /* <Typography variant="body1" gutterBottom>
                    Besucher-Log:
                </Typography>          
                <List>
                    {data.allVisitors.map((visitor) => (
                        <ListItem key={visitor._id}>
                            {visitor.value === 1 ? <AddCircleIcon /> : <RemoveCircleIcon />}
                            <ListItemText primary={(new Date(visitor.created)).toString()} secondary={visitor.sauna.name} />
                        </ListItem>
                    ))}
                </List> */
            )
        }}
    </Query>
)

export default VisitorList