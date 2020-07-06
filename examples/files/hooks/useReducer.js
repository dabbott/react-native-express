import React, { useReducer } from 'react'
import { View, Text, TextInput } from 'react-native'

function reducer(state, action) {
  switch (action.type) {
    case 'first':
      return { ...state, first: action.value }
    case 'last':
      return { ...state, last: action.value }
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { first: '', last: '' })

  return (
    <View>
      <TextInput
        style={{ fontSize: 32 }}
        placeholder="First"
        value={state.first}
        onChangeText={(text) => {
          dispatch({ type: 'first', value: text })
        }}
      />
      <TextInput
        style={{ fontSize: 32 }}
        placeholder="Last"
        value={state.last}
        onChangeText={(text) => {
          dispatch({ type: 'last', value: text })
        }}
      />
      <Text style={{ fontSize: 32 }}>
        Hello {state.first} {state.last}
      </Text>
    </View>
  )
}
