import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import Page from './Page'
import { WebPlayer, PageHeader } from '../components'

const simpleQuery = `import React, { Component } from 'react'
import { AppRegistry, Image, View, ActivityIndicator, StyleSheet } from 'react-native'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider, graphql } from 'react-apollo'

import gql from 'graphql-tag'

// Initialize the Apollo Client
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/ciwce5xw82kh7017179gwzn7q',
  }),
})

// Define query types
const FeedQuery = gql\`
  query posts {
    allPosts {
      id
      imageUrl
      description
    }
  }
\`

class Feed extends Component {

  renderPost = ({id, imageUrl}) => {
    return (
      <Image
        key={id}
        style={styles.image}
        source={{uri: imageUrl}}
      />
    )
  }

  render() {

    // Apollo injects the \`data\` prop, containing the result of our query,
    // and a loading indicator to tell us when the data is ready.
    const {data} = this.props
    const {loading, allPosts} = data

    // If we're loading, show a spinner.
    if (loading) {
      return <ActivityIndicator />
    }

    return (
      <View style={styles.feed}>
        {allPosts.map(this.renderPost)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  feed: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    margin: 15,
  },
})

// Inject query response as \`this.props.data\`
const FeedWithData = graphql(FeedQuery)(Feed)

// ApolloProvider lets us use Apollo Client in descendant components
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
[GraphQL](http://graphql.org) is a query language for efficient and expressive fetching of hierarchical data. To use GraphQL, we need both a GraphQL server and a GraphQL client.

GraphQL servers expose a typed API, called the GraphQL schema. It acts as an abstraction layer between the database and clients, exposing available queries (to fetch data) and mutations (to write data), as well as the input and output types for those operations.

Client applications communicate with GraphQL servers using either plain HTTP or a dedicated GraphQL client, such as [Apollo Client](http://dev.apollodata.com). Apollo provides a data cache, along with hooks into the component lifecycle for consistent data across components. We'll use Apollo in the example below. Another popular client is [Relay](https://facebook.github.io/relay/), which has a steeper learning curve and requires more server-side setup, but provides cache consistency and requires less manual effort for the client.

# Getting Started with GraphQL

To get started with GraphQL, we first need to set up a GraphQL server - the easiest way to do this is through [Graphcool](https://graph.cool). Graphcool allows us to set up a powerful, easy-to-use, hosted GraphQL server in minutes. The API provides essential features, such as authentication and realtime subscriptions, allowing us to iterate rapidly on our React Native apps.

Let's see how that would work for an Instagram clone. We want to display several posts with a description and image url in a feed. So we add a \`Post\` type to our GraphQL schema:

${<pre><code>{
`type Post {
  id: ID!
  description: String!
  imageUrl: String!
}`
}</code></pre>}

Graphcool automatically generates queries and mutations based on the available model types. We can explore the API using [GraphiQL](https://github.com/graphql/graphiql), as demonstrated in the GIF below. You can try it out for yourself [here](https://api.graph.cool/simple/v1/ciwce5xw82kh7017179gwzn7q)!

![](graphql-autocompletion.gif)

We can use this query to list all \`Posts\`:

${<pre><code>{
`query posts {
  allPosts {
    imageUrl
    description
  }
}`
}</code></pre>}

The [GraphQL documentation](http://graphql.org/learn) provides additional info about the query syntax. GraphQL queries are highly flexible: the client decides which fields to include in the response. Query parameters can be used for even more control, e.g the client can specify filtering and ordering parameters, as in [this query](https://api.graph.cool/simple/v1/ciwce5xw82kh7017179gwzn7q?query=query%20%7B%0A%20%20allPosts(filter%3A%20%7B%0A%20%20%20%20description_contains%3A%20%22%23nature%22%0A%20%20%7D)%20%7B%0A%20%20%20%20description%0A%20%20%20%20imageUrl%0A%20%20%20%20comments(orderBy%3A%20text_ASC)%20%7B%0A%09%09%09text%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D):

${<pre><code>{
`query {
  allPosts(filter: {
    description_contains: "#nature"
  }) {
    description
    imageUrl
    comments(orderBy: text_ASC) {
      text
    }
  }
}`
}</code></pre>}

You can read more about GraphQL query parameters [here](https://www.graph.cool/docs/tutorials/designing-powerful-apis-with-graphql-query-parameters-aing7uech3).

# Minimal Example

Let's use this query, along with the Apollo Client, to connect to the GraphQL server from our React Native app. We'll fetch the the \`Posts\`, and render them.

${
  <WebPlayer
    code={simpleQuery}
    vendorComponents={vendorComponents}
  />
}

For an in-depth GraphQL tutorial for React Native, follow the [Learn Apollo React Native](https://www.learnapollo.com/tutorial-react-native-exponent/rne-01).
`

export default props =>
  <Page {...props}>
    <PageHeader
      title={props.title}
      author={"@_marktani"}
      authorURL={'https://twitter.com/_marktani'}
    />
    {content}
  </Page>
