const indexFile = `import { View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { persistStore, autoRehydrate } from 'redux-persist'

// Import the reducer and create a store
import { reducer } from './todoListRedux'

// Add the autoRehydrate middleware to your redux store
const store = createStore(reducer, undefined, autoRehydrate())

// Enable persistence
persistStore(store)

// Import the App container component
import App from './App'

// Pass the store into the Provider
export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
`

const appFile = `import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { actionCreators } from './todoListRedux'
import List from './List'
import Input from './Input'
import Title from './Title'

const mapStateToProps = (state) => ({
  todos: state.todos,
})

class App extends Component {

  onAddTodo = (text) => {
    const {dispatch} = this.props

    dispatch(actionCreators.add(text))
  }

  onRemoveTodo = (index) => {
    const {dispatch} = this.props

    dispatch(actionCreators.remove(index))
  }

  render() {
    const {todos} = this.props

    return (
      <View>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
      </View>
    )
  }
}

export default connect(mapStateToProps)(App)
`

const files = [
  ['index.js', indexFile],
  ['todoListRedux.js', require('../examples/files/TodoListRedux').default],
  ['App.js', appFile],
  ['List.js', require('../examples/files/List').default],
  ['Input.js', require('../examples/files/Input').default],
  ['Title.js', require('../examples/files/Title').default],
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
    'redux-persist',
    'redux-persist',
    'https://cdnjs.cloudflare.com/ajax/libs/redux-persist/4.0.0-alpha7/redux-persist.js',
  ],
]

export default { files, vendorComponents }
