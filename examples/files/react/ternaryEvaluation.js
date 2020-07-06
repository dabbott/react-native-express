import React from 'react'
import { View, Text, Button } from 'react-native'

const Card = ({ title, buttonTitle }) => (
  <View>
    <Text style={{ fontSize: 60 }}>{title}</Text>
    {buttonTitle ? <Button title={buttonTitle} /> : null}
  </View>
)

export default function App() {
  return (
    <View>
      <Card title="Title" />
      <Card title="Title with button" buttonTitle="Press me!" />
    </View>
  )
}
