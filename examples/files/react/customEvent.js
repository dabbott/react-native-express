import React, { useState } from 'react'
import { Button } from 'react-native'

function CounterButton({ title, onIncrement }) {
  return <Button title={title} onPress={onIncrement} />
}

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <CounterButton
      title={`Click HERE to increment: ${count}`}
      onIncrement={() => setCount(count + 1)}
    />
  )
}
