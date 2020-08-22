import React, { useEffect, useReducer } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

import { getList } from './api/picsum'
import { actionCreators, initialState, reducer } from './reducers/photos'
import PhotoGrid from './components/PhotoGrid'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
