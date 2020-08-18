import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.large} />
      <ScrollView horizontal>
        <View style={styles.small} />
        <View style={styles.small} />
        <View style={styles.small} />
      </ScrollView>
      <View style={styles.large} />
      <View style={styles.small} />
      <View style={styles.large} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  small: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  large: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'steelblue',
  },
})
