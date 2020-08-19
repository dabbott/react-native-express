import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import Input from './Input'

const STORAGE_KEY = 'ASYNC_STORAGE_NAME_EXAMPLE'

export default function App() {
  const [name, setName] = useState('World')

  async function loadName() {
    try {
      const name = await AsyncStorage.getItem(STORAGE_KEY)

      if (name === null) return

      setName(name)
    } catch (e) {
      console.error('Failed to load name.')
    }
  }

  async function saveName(name) {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, name)
      setName(name)
    } catch (e) {
      console.error('Failed to save name.')
    }
  }

  useEffect(() => {
    loadName()
  }, [])

  return (
    <View>
      <Input
        placeholder={'Type your name, hit enter, and refresh!'}
        onSubmitEditing={(value) => {
          saveName(value)
        }}
      />
      <Text style={styles.text}>Hello {name}!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 15,
    backgroundColor: 'skyblue',
  },
})
