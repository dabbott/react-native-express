import React, { useRef } from 'react'
import { Animated } from 'react-native'

export default function MyComponent() {
  const value = useRef(new Animated.Value(0))

  // ...
}
