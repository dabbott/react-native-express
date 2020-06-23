import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default () => (
  <View style={styles.container}>
    <Text style={styles.text}>Hello, world!</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddeeff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
})
