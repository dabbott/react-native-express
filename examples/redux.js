const minimalRedux = `import { Text } from 'react-native'
import { createStore } from 'redux'

// Define action types
const types = {
  INCREMENT: 'INCREMENT',
}

// Define a reducer
const reducer = (state, action) => {
  if (action.type === types.INCREMENT) {
    return {count: state.count + 1}
  }
  return state
}

// Define the initial state of our store
const initialState = {count: 0}

// Create a store, passing our reducer function and our initial state
const store = createStore(reducer, initialState)


/// We're done! Redux is all set up. Here's how we can use it:


// Now we can dispatch actions, which are understood by our store/reducer
store.dispatch({type: types.INCREMENT})
store.dispatch({type: types.INCREMENT})
store.dispatch({type: types.INCREMENT})

// Calling \`store.getState()\` returns our state object
export default function App() {
  return (
    <Text style={{fontSize: 100}}>
      {store.getState().count}
    </Text>
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

import { actionCreators } from './todoListRedux'
import List from './List'
import Input from './Input'
import Title from './Title'

import store from './store'

export default class App extends React.Component {

  state = {}

  componentWillMount() {
    const {todos} = store.getState()
    this.setState({todos})

    this.unsubscribe = store.subscribe(() => {
      const {todos} = store.getState()
      this.setState({todos})
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onAddTodo = (text) => {
    store.dispatch(actionCreators.add(text))
  }

  onRemoveTodo = (index) => {
    store.dispatch(actionCreators.remove(index))
  }

  render() {
    const {todos} = this.state

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
`

const files = [
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
]

export const minimalExample = {
  code: minimalRedux,
  vendorComponents: vendorComponents,
}

export const advancedExample = {
  files: files,
  vendorComponents: vendorComponents,
}
