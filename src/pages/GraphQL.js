import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import Page from './Page'
import { WebPlayer, PageHeader } from '../components'

const simpleInstagramApp = `import React, { Component } from 'react'
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
[GraphQL](http://graphql.org/) is a *query language* for APIs. It enables declarative data fetching and thus ties in perfectly with React as a declarative framework for building user interfaces. GraphQL can either complement or entirely replace the usage of REST APIs. 

The main difference between REST and GraphQL is that RESTful APIs have *multiple endpoints* that return *fixed data structures* whereas a GraphQL server only exposes a *single endpoint* and returns *flexible data structures*. This works because a client that needs data from the server also submits its precise data requirements in each request which allows the server to tailor the response exactly according to the client’s needs. 

You can learn more about the differences between GraphQL and REST [here](https://www.howtographql.com/basics/1-graphql-is-the-better-rest/). To get a high-level overview and understand more about the architectural use cases of GraphQL, take a look at [this](https://www.howtographql.com/basics/3-big-picture/) article.

## Community & Resources

GraphQL has a rapidly growing community. To stay up-to-date about everything that’s happening in the GraphQL ecosystem, check out these resources:

* [GraphQL Weekly](https://www.graphqlweekly.com/): Weekly newsletter about GraphQL
* [GraphQL Radio](https://www.graphqlradio.com/): Podcast discussing real-world use cases of GraphQL

For an in-depth learning experience, visit the [How to GraphQL](https://www.howtographql.com/) fullstack tutorial website.


## Minimal Example

Here is a minimal example that demonstrates how to load data using [Graphcool](https://www.graph.cool/) and [Apollo Client](http://dev.apollodata.com/react/). If you want to understand more about how it works, check out the following chapters.

${
  <WebPlayer
    code={simpleInstagramApp}
    vendorComponents={vendorComponents}
  />
  }
`

export default props =>
  <Page {...props}>
    <PageHeader
      title={props.title}
      author={"@nikolasburk"}
      authorURL={'https://twitter.com/nikolasburk'}
    />
    {content}
  </Page>

