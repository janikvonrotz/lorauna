import { Query } from "react-apollo"
import gql from "graphql-tag"
import Typography from '@material-ui/core/Typography'
import SaunaListItem from './SaunaListItem'
import PaperSheet from './PaperSheet'

const SaunaList = () => (
    <Query
        query={gql`
            {
                allSaunas {
                    name
                    max_seats
                    current_seats
                    _id
                }
            }
        `}
    >
        {({ loading, error, data }) => {

            if (loading) return <p>Loading...</p>
            if (error) return <p>Error :(</p>

            return (
                <PaperSheet>
                    <Typography variant="h2">
                        Saunas
                    </Typography>
                    <Typography gutterBottom component="p">
                        Hier können die Saunalandschaften verwaltet werden.
                    </Typography>
                    {data.allSaunas.map((sauna) => (
                        <SaunaListItem key={sauna._id} sauna={sauna} />
                    ))}
                </PaperSheet>
            )
        }}
    </Query>
)

export default SaunaList