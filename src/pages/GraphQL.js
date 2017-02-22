import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'
import { WebPlayer } from '../components'

const simpleQuery = `import { AppRegistry, Image, View } from 'react-native'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider, graphql } from 'react-apollo'

import gql from 'graphql-tag'

// Initialize Apollo Client
const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/ciwce5xw82kh7017179gwzn7q'}),
})

// Define query types
const FeedQuery = gql\`query posts { allPosts { id imageUrl description } }\`

// Define plain React component
const Feed = (props) => {
  // render loading state before data has arrived
  if (props.data.loading) {
    return (<div>Loading...</div>)
  }

  const listItems = props.data.allPosts.map((post) => {
    const imageUrl = post.imageUrl
    const image = {uri: imageUrl}

    return (
      <Image
        style={{width: 150, height: 150, margin: 15}}
        source={image}
      />
    )}
  )

  // render posts when the query has finished
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {listItems}
    </View>
  )
}

// inject query response as props.data
const FeedWithData = graphql(FeedQuery)(Feed)

// ApolloProvider makes Apollo client capabilities available to inner components
const App = () => (
  <ApolloProvider client={client}>
    <FeedWithData />
  </ApolloProvider>
)

AppRegistry.registerComponent('App', () => App)
`

const vendorComponents = [
  ['apollo-client', 'https://cdn.rawgit.com/dabbott/665a982d2de9b7eea22114e266b1474b/raw/e289e526f402989f0c42668dcefe2b15127ca3a1/apollo-client.js'],
  ['react-apollo', 'https://cdn.rawgit.com/dabbott/c1dcec0ac74dc7d14e5a3a78d5c7fdd3/raw/f20b6af16aac7bff1808fea76eb9f815e41f8e96/react-apollo.js'],
  ['graphql-tag', 'https://gist.githubusercontent.com/dabbott/bf832015419ee30344ac573705c2cbeb/raw/6bfcd7294d324aeaf117f6b8bde40715bc89ec78/graphql-tag']
]

const content = markdown(markdownOptions)`
[GraphQL](http://graphql.org) is a query language that allows the efficient fetching or hierarchical data. Client applications simply state their data requirements which are then fulfilled by the GraphQL server. This dramatically speeds up app development time and decreases the coupling between front and backend.

# Fetching Data with GraphQL

GraphQL servers expose a typed schema that includes the different models we're working with and lists the queries (to fetch data) and mutations (to write data) available. For an Instagram clone, we might add a Post model to our schema:

\`\`\`
type Post {
  description: String!
  imageUrl: String!
}
\`\`\`

Typically in an application like this, queries to fetch one or multiple posts are available. Try to run the following query in [this playground](https://api.graph.cool/simple/v1/ciwce5xw82kh7017179gwzn7q?query=query%20posts%20%7B%0A%20%20allPosts%20%7B%0A%20%20%20%20id%0A%20%20%20%20imageUrl%0A%20%20%20%20description%0A%20%20%7D%0A%7D%0A) to list all posts:

\`\`\`
query posts {
  allPosts {
    id
    imageUrl
    description
  }
}
\`\`\`

# Minimal Example

We can use GraphQL clients like [Apollo](http://dev.apollodata.com) or [Relay](https://facebook.github.io/relay/) to interact with GraphQL servers or even use plain HTTP calls. Let's see how to fetch data from a React Native component using Apollo Client.

${
  <WebPlayer
    code={simpleQuery}
    vendorComponents={vendorComponents}
  />
}

# Getting Started with GraphQL

The easiest way to get started using GraphQL is [Graphcool](https://graph.cool), a powerful backend platform with an easy to use API. Features like realtime subscriptions, permission rules and flexible data filters help you to quickly iterate on your mobile application.

For an in-depth GraphQL tutorial for React Native follow the [Learn Apollo React Native](https://www.learnapollo.com/tutorial-react-native-exponent/rne-01) guide using Apollo Client and Graphcool.
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
