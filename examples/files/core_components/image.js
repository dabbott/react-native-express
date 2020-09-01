import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function App() {
  return (
    <Image
      style={styles.image}
      source={{ uri: 'https://www.reactnative.express/static/logo.png' }}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
})
