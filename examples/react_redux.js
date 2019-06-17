const indexFile = `import { View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Import the App container component
import App from './App'

// Import the store
import store from './store'

// Pass the store into the Provider
export default function AppWithStore() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
`

const storeFile = `import { createStore } from 'redux'
import { reducer } from './todoListRedux'

// Create a store with our reducer
const store = createStore(reducer)

export default store
`

const appFile = `import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { actionCreators } from './todoListRedux'
import List from './List'
import Input from './Input'
import Title from './Title'

const mapStateToProps = (state) => ({
  todos: state.todos,
})

class App extends React.Component {

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
  ['App.js', appFile],
  ['store.js', storeFile],
  ['todoListRedux.js', require('../examples/files/TodoListRedux').default],
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
]

export default { files, vendorComponents }
