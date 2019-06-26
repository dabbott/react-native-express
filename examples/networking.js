const title = 'Networking with Fetch'
const code = `import React, { Component } from 'react'
import { View, Text, ActivityIndicator, ScrollView, StyleSheet } from 'react-native'

export default class App extends Component {

  state = {
    loading: true,
    error: false,
    posts: [],
  }

  componentWillMount = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await response.json()

      this.setState({loading: false, posts})
    } catch (e) {
      this.setState({loading: false, error: true})
    }
  }

  renderPost = ({id, title, body}, i) => {
    return (
      <View
        key={id}
        style={styles.post}
      >
        <View style={styles.postNumber}>
          <Text>
            {i + 1}
          </Text>
        </View>
        <View style={styles.postContent}>
          <Text>
            {title}
          </Text>
          <Text style={styles.postBody}>
            {body}
          </Text>
        </View>
      </View>
    )
  }

  render() {
    const {posts, loading, error} = this.state

    if (loading) {
      return (
        <View style={styles.center}>
          <ActivityIndicator animating={true} />
        </View>
      )
    }

    if (error) {
      return (
        <View style={styles.center}>
          <Text>
            Failed to load posts!
          </Text>
        </View>
      )
    }

    return (
      <ScrollView style={styles.container}>
        {posts.map(this.renderPost)}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  post: {
    flexDirection: 'row',
  },
  postNumber: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postContent: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingVertical: 25,
    paddingRight: 15,
  },
  postBody: {
    marginTop: 10,
    fontSize: 12,
    color: 'lightgray',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 15,
    backgroundColor: 'skyblue',
  },
})
`

export default { code, title }
