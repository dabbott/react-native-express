import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import Page from './Page'
import { WebPlayer, PageHeader } from '../components'

const simpleQuery = `import { AppRegistry, Image, View, StyleSheet } from 'react-native'
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
        style={styles.image}
        source={image}
      />
    )}
  )

  // render posts when the query has finished
  return (
    <View
      style={styles.feed}
    >
      {listItems}
    </View>
  )
}

const styles = StyleSheet.create({
  feed: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    margin: 15
  },
})

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
# Overview

[GraphQL](http://graphql.org) is a query language for efficient and expressive fetching of hierarchical data. To use GraphQL, you need both a GraphQL server and a GraphQL client.

GraphQL servers expose a typed API, called the GraphQL schema. It acts as an abstraction layer between the database and clients and exposes available queries (to fetch data) and mutations (to write data) as well as input and output types for those operations.

Client applications communicate with GraphQL servers using plain HTTP or dedicated GraphQL clients, such as [Apollo Client](http://dev.apollodata.com) that comes with a cache and hooks into the component lifecycle for consistent data across components. Another popular choice is [Relay](https://facebook.github.io/relay/) which has additional requirements for the GraphQL server and takes a different approach for handling mutations. This results in a steep learning curve but cache consistency requires less manual work in the client.

# Getting Started with GraphQL

The easiest way to get started with GraphQL is [Graphcool](https://graph.cool) which allows you to setup a powerful GraphQL server in minutes. The powerful and easy to use API and features like realtime subscriptions and authentication enable you to quickly iterate your production-ready mobile applications.

Let's see how that would work for an Instagram clone. We want to display several posts with a description and image url in a feed. So we add a Post type to our GraphQL schema:

${<pre><code>{
`type Post {
  id: ID!
  description: String!
  imageUrl: String!
}`
}</code></pre>}

Graphcool automatically generates queries and mutations based on the available model types. We can explore the API using [GraphiQL](https://github.com/graphql/graphiql), as demonstrated in the GIF below.

![](graphql-autocompletion.gif)

Try it out yourself [here](https://api.graph.cool/simple/v1/ciwce5xw82kh7017179gwzn7q)! We can use this query to list all posts:

${<pre><code>{
`query posts {
  allPosts {
    imageUrl
    description
  }
}`
}</code></pre>}

The [GraphQL documentation](http://graphql.org/learn) provides additional resources about the query syntax that comes with high flexibility as the client decides which fields to include. Additionally, query arguments can be used for more control, for example in the form of filters and ordering, as in [this query](https://api.graph.cool/simple/v1/ciwce5xw82kh7017179gwzn7q?query=query%20%7B%0A%20%20allPosts(filter%3A%20%7B%0A%20%20%20%20description_contains%3A%20%22%23nature%22%0A%20%20%7D)%20%7B%0A%20%20%20%20description%0A%20%20%20%20imageUrl%0A%20%20%20%20comments(orderBy%3A%20text_ASC)%20%7B%0A%09%09%09text%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D):

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

Read this tutorial to find out more about [powerful query arguments](https://www.graph.cool/docs/tutorials/designing-powerful-apis-with-graphql-query-parameters-aing7uech3).

# Minimal Example

Now we can use this query with Apollo Client to connect to the GraphQL server and fetch all posts from within React Native component that also displays them.

${
  <WebPlayer
    code={simpleQuery}
    vendorComponents={vendorComponents}
  />
}

For an in-depth GraphQL tutorial for React Native follow the [Learn Apollo React Native](https://www.learnapollo.com/tutorial-react-native-exponent/rne-01) guide using Apollo Client and Graphcool.
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
