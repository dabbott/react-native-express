import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import Page from './Page'
import { WebPlayer, PageHeader } from '../components'

const simpleInstagramApp = `import React, { Component } from 'react'
import { AppRegistry, Image, View, ActivityIndicator, StyleSheet } from 'react-native'
import { ApolloProvider, ApolloClient, createNetworkInterface, gql, graphql } from 'react-apollo'

// Initialize the Apollo Client
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://rn-express-pjxhoukqko.now.sh',
  }),
})

// Define query types
const FEED_QUERY = gql\`
  query feed {
    feed {
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
    const {loading, feed} = data

    // If we're loading, show a spinner.
    if (loading) {
      return <ActivityIndicator />
    }

    return (
      <View style={styles.feed}>
        {feed.map(this.renderPost)}
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
const FeedWithData = graphql(FEED_QUERY)(Feed)

// ApolloProvider lets us use Apollo Client in descendant components
const App = () => (
  <ApolloProvider client={client}>
    <FeedWithData />
  </ApolloProvider>
)

AppRegistry.registerComponent('App', () => App)
`

const vendorComponents = [
  ['react-apollo', 'https://gist.githubusercontent.com/dabbott/344ef01de49ab7e871774e773e1048bc/raw/498dd3756eeeffb697dfe0cd8fd0b359b81c0f5d/react-apollo.js']
]


const content = markdown(markdownOptions) `
[GraphQL](http://graphql.org/) is a *query language* for APIs. It enables declarative data fetching and thus ties in perfectly with React as a declarative framework for building user interfaces. GraphQL can either complement or entirely replace the usage of REST APIs.

The main difference between REST and GraphQL is that RESTful APIs have *multiple endpoints* that return *fixed data structures* whereas a GraphQL server only exposes a *single endpoint* and returns *flexible data structures*. This works because a client that needs data from the server also submits its precise data requirements in each request which allows the server to tailor the response exactly according to the client’s needs.

You can learn more about the differences between GraphQL and REST [here](https://www.howtographql.com/basics/1-graphql-is-the-better-rest/). To get a high-level overview and understand more about the architectural use cases of GraphQL, take a look at [this](https://www.howtographql.com/basics/3-big-picture/) article.

## Community & Resources

GraphQL has a rapidly growing community. To stay up-to-date about everything that’s happening in the GraphQL ecosystem, check out these resources:

* [GraphQL Weekly](https://www.graphqlweekly.com/): Weekly newsletter about GraphQL
* [GraphQL Radio](https://www.graphqlradio.com/): Podcast discussing real-world use cases of GraphQL
* [GraphQL Europe](https://www.graphql-europe.org/): Europe's biggest GraphQL conference
* [Prisma blog](https://blog.graph.cool/): Technical deep dives and tutorials all around GraphQL development

For an in-depth learning experience, visit the [How to GraphQL](https://www.howtographql.com/) fullstack tutorial website.


## Minimal Example

Here is a minimal example that demonstrates how to load data using [Prisma](https://www.prisma.io/), [\`graphql-yoga\`](https://github.com/graphcool/graphql-yoga) and [Apollo Client](https://www.apollographql.com/client). If you want to understand more about how it works, check out the following chapters.

Note that the example will throw an error if you have the Redux DevTools Chrome extension enabled!

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

