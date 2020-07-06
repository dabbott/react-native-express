import React from 'react'
import { View, Text } from 'react-native'

const data = [
  { id: 'a', name: 'Devin' },
  { id: 'b', name: 'Gabe' },
  { id: 'c', name: 'Kim' },
]

export default function App() {
  return (
    <View>
      {data.map((item) => (
        <Text>{item.name}</Text>
      ))}
    </View>
  )
}
