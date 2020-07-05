import React from 'react'
import { Button, View } from 'react-native'

type Props = {
  title: string
  color?: string
}

function MyComponent({ title, color = 'purple' }: Props) {
  return (
    <View>
      <Button title={title} color="purple" />
    </View>
  )
}

export default function App() {
  return (
    <View>
      <MyComponent title="MyComponent 1" />
      <MyComponent title="MyComponent 2" />
    </View>
  )
}
