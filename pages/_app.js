import App, {Container} from 'next/app'
import React from 'react'
import withApolloClient from '../lib/with-apollo-client'
import { ApolloProvider } from 'react-apollo'
import LayoutProvider from '../components/LayoutProvider'

class MyApp extends App {
    render () {
        const {Component, pageProps, apolloClient} = this.props
        return <Container>
            <ApolloProvider client={apolloClient}>
                <LayoutProvider>
                    <Component {...pageProps} />
                </LayoutProvider>
            </ApolloProvider>
        </Container>
    }
}

export default withApolloClient(MyApp)