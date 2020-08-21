import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: '#3B6CD4',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
  },
})
