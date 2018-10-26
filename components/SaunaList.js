import { Query } from "react-apollo"
import gql from "graphql-tag"

const SaunaList = () => (
    <Query
        query={gql`
            {
                allSaunas {
                    name
                    _id
                }
            }
        `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error :(</p>

            return data.allSaunas.map((sauna) => (
                <p>{ sauna.name }</p>
            ))
        }}
    </Query>
)

export default SaunaList