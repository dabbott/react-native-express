const appFile = `import React, { Component } from 'react'
import { View } from 'react-native'

import List from './List'
import Input from './Input'
import Title from './Title'

export default class App extends Component {

  state = {
    todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App'],
  }

  onAddTodo = (text) => {
    const {todos} = this.state

    this.setState({
      todos: [text, ...todos],
    })
  }

  onRemoveTodo = (index) => {
    const {todos} = this.state

    this.setState({
      todos: todos.filter((todo, i) => i !== index),
    })
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
  // ['index.js', require('!!raw!../examples/IndexRegisterApp')],
  ['App.js', appFile],
  ['List.js', require('../examples/files/List').default],
  ['Input.js', require('../examples/files/Input').default],
  ['Title.js', require('../examples/files/Title').default],
]

export default { files }
