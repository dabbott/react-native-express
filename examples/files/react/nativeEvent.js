import React from 'react'
import { Button } from 'react-native'

export default function App() {
  return (
    <Button
      title="Press me"
      onPress={() => {
        console.log('Pressed!')
      }}
    />
  )
}
