import ApolloClient from "apollo-boost"
import React from "react"
import { ApolloProvider } from "react-apollo"

const client = new ApolloClient({
	uri: process.env.REACT_APP_APOLLO_URL
})

const Apollo = ({children}) => (
	<ApolloProvider client={client}>
		{children}
  	</ApolloProvider>
)

export default Apollo