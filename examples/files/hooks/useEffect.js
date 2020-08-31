import React, { useState, useEffect } from 'react'
import { Button } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count % 3 == 0) {
      console.log(count)
    }
  }, [count])

  return (
    <Button
      title={`Increment ${count}`}
      onPress={() => {
        setCount(count + 1)
      }}
    />
  )
}
