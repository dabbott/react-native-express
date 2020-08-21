import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => {
          setCount(count + 1)
        }}
      >
        <Text style={styles.text}>Press me!</Text>
      </TouchableOpacity>
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
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'lightgreen',
  },
  text: {
    fontSize: 18,
    padding: 12,
  },
})
