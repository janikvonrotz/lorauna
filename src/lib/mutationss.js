import gql from 'graphql-tag'

const CREATE_VISITOR = gql`
mutation createVisitor($value: Int!, $sauna_id: String!) {
    createVisitor(value: $value, sauna_id: $sauna_id) {
        _id
    }
}
`

export {
    CREATE_VISITOR,
}