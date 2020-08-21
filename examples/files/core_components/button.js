import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Button
        title={'Press me!'}
        onPress={() => {
          setCount(count + 1)
        }}
      />
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
  text: {
    fontSize: 18,
    padding: 12,
  },
})
