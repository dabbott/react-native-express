import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import usePanResponder from './usePanResponder'

export default function App() {
  const [state, panHandlers] = usePanResponder()

  const { dragging, initialY, initialX, offsetY, offsetX } = state

  const style = {
    backgroundColor: dragging ? '#2DC' : '#0BA',
    transform: [
      { translateX: initialX + offsetX },
      { translateY: initialY + offsetY },
    ],
  }

  return (
    <View style={styles.container}>
      <View
        // Put all panHandlers into the View's props
        {...panHandlers}
        style={[styles.square, style]}
      >
        <Text style={styles.text}>DRAG ME</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  square: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
})
