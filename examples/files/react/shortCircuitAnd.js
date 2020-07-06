import React from 'react'
import { View, Text, Button } from 'react-native'

const Card = ({ title, showButton }) => (
  <View>
    <Text style={{ fontSize: 60 }}>{title}</Text>
    {showButton && <Button title="Press me!" />}
  </View>
)

export default function App() {
  return (
    <View>
      <Card title="Title" showButton={false} />
      <Card title="Title with button" showButton={true} />
    </View>
  )
}
