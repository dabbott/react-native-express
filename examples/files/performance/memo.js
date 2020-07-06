import React, { useState, memo, useEffect, useRef } from 'react'
import { View, Text, Button } from 'react-native'

const Title = ({ title }) => {
  const renderCount = useRef(0)

  useEffect(() => {
    renderCount.current += 1

    console.log(`Rendered title: ${renderCount.current} times`)
  })

  return <Text style={{ fontSize: 36 }}>{title}</Text>
}

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View>
      <Title title="My Title" />
      <Button
        title={`Increment: ${count}`}
        onPress={() => {
          setCount(count + 1)
        }}
      />
    </View>
  )
}
