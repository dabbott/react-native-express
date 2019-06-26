const indexFile = `import { View } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

// Import the reducer and create a store
import { reducer } from './postsRedux'

// Add the thunk middleware to our store
const store = createStore(reducer, applyMiddleware(thunk))

// Import the App container component
import App from './App'

// Pass the store into the Provider
export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
`

const reduxFile = `export const types = {
  FETCH_POSTS_REQUEST: 'FETCH_POSTS_REQUEST',
  FETCH_POSTS_RESPONSE: 'FETCH_POSTS_RESPONSE',
  CLEAR_POSTS: 'CLEAR_POSTS',
}

export const actionCreators = {
  fetchPosts: () => async (dispatch, getState) => {
    dispatch({type: types.FETCH_POSTS_REQUEST})

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await response.json()

      dispatch({type: types.FETCH_POSTS_RESPONSE, payload: posts})
    } catch (e) {
      dispatch({type: types.FETCH_POSTS_RESPONSE, payload: e, error: true})
    }
  },

  // It's common for action creators to return a promise for easy chaining,
  // which is why this is declared async (async functions always return promises).
  clearPosts: () => async (dispatch, getState) => {
    if (getState().posts.length > 0) {
      dispatch({type: types.CLEAR_POSTS})
    }
  }
}

const initialState = {
  loading: true,
  error: false,
  posts: [],
}

export const reducer = (state = initialState, action) => {
  const {type, payload, error} = action

  switch (type) {
    case types.FETCH_POSTS_REQUEST: {
      return {...state, loading: true, error: false}
    }
    case types.FETCH_POSTS_RESPONSE: {
      if (error) {
        return {...state, loading: false, error: true}
      }

      return {...state, loading: false, posts: payload}
    }
    case types.CLEAR_POSTS: {
      return {...state, loading: false, posts: []}
    }
  }

  return state
}
`

const appFile = `import React, { Component } from 'react'
import { View, Text, ActivityIndicator, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { actionCreators } from './postsRedux'

const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error,
  posts: state.posts,
})

class App extends Component {

  componentWillMount() {
    const {dispatch} = this.props

    dispatch(actionCreators.fetchPosts())
  }

  refresh = async () => {
    const {dispatch} = this.props

    // We can await the completion of dispatch, so long as we returned a promise.
    await dispatch(actionCreators.clearPosts())

    dispatch(actionCreators.fetchPosts())
  }

  renderPost = ({id, title, body}, i) => {
    return (
      <View
        key={id}
        style={styles.post}
      >
        <View style={styles.postNumber}>
          {i + 1}
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
    const {posts, loading, error} = this.props

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
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          {posts.map(this.renderPost)}
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={this.refresh}
        >
          <Text>
            Refresh
          </Text>
        </TouchableOpacity>
      </View>
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
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  }
})

export default connect(mapStateToProps)(App)
`

const files = [
  ['index.js', indexFile],
  ['postsRedux.js', reduxFile],
  ['App.js', appFile],
]

const vendorComponents = [
  [
    'redux',
    'Redux',
    'https://cdnjs.cloudflare.com/ajax/libs/redux/3.7.2/redux.min.js',
  ],
  [
    'react-redux',
    'ReactRedux',
    'https://cdnjs.cloudflare.com/ajax/libs/react-redux/5.0.7/react-redux.min.js',
  ],
  [
    'redux-thunk',
    'https://cdnjs.cloudflare.com/ajax/libs/redux-thunk/2.1.0/redux-thunk.js',
  ],
]

export default { files, vendorComponents }
