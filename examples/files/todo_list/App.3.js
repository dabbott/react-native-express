import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import store from './store'
import TodoList from './TodoList'

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TodoList />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 20,
  },
})
