import React, { useEffect, useReducer } from 'react'
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import { actionCreators, initialState, reducer } from './posts'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    async function fetchPosts() {
      dispatch(actionCreators.loading())

      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        )
        const posts = await response.json()
        dispatch(actionCreators.success(posts))
      } catch (e) {
        dispatch(actionCreators.failure())
      }
    }

    fetchPosts()
  }, [])

  const { posts, loading, error } = state

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
        <Text>Failed to load posts!</Text>
      </View>
    )
  }

  return (
    <FlatList
      style={styles.container}
      keyExtractor={(post) => post.id}
      data={posts}
      renderItem={({ item: { id, title, body }, index }) => (
        <View key={id} style={styles.post}>
          <View style={styles.postNumber}>
            <Text>{index + 1}</Text>
          </View>
          <View style={styles.postContent}>
            <Text>{title}</Text>
            <Text style={styles.postBody}>{body}</Text>
          </View>
        </View>
      )}
    />
  )
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
