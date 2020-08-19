import React, { useReducer } from 'react'
import { View } from 'react-native'

import List from './List'
import Input from './Input'
import Title from './Title'
import { reducer, initialState } from './reducer'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <View>
      <Title>To-Do List</Title>
      <Input
        placeholder={'Type a todo, then hit enter!'}
        onSubmitEditing={(text) => dispatch({ type: 'add', value: text })}
      />
      <List
        items={state.items}
        onPressItem={(id) => dispatch({ type: 'remove', value: id })}
      />
    </View>
  )
}
