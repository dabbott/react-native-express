import React, { useState } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        underlayColor="#FAB"
        onPress={() => {
          setCount(count + 1)
        }}
      >
        <Text style={styles.text}>Press me!</Text>
      </TouchableHighlight>
      <Text style={styles.text}>{`Pressed ${count} times`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 40,
    borderRadius: 4,
    backgroundColor: '#F88',
  },
  text: {
    fontSize: 18,
    padding: 12,
  },
})
