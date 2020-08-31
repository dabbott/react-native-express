import React from 'react'
import { Button, View } from 'react-native'

interface Props {
  title: string
  color?: string
}

function MyComponent({ title, color = '#1ACDA5' }: Props) {
  return (
    <View>
      <Button title={title} color={color} />
    </View>
  )
}

export default function App() {
  return (
    <View>
      <MyComponent title="MyComponent 1" />
      <MyComponent title="MyComponent 2" color="rgb(59, 108, 212)" />
    </View>
  )
}
