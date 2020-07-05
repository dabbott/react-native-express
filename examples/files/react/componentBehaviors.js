import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'

export default function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCount((count) => count + 1), 1000)

    return () => clearTimeout(id)
  }, [])

  return <Text style={{ fontSize: 120 }}>{count}</Text>
}
