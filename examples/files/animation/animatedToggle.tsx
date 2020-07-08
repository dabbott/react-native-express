import React, { useRef, useState, useEffect } from 'react'
import { Animated, Button } from 'react-native'

export default function MyComponent() {
  const value = useRef(new Animated.Value(0))
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const nextValue = visible ? 1 : 0
    const animation = Animated.timing(value.current, { toValue: nextValue })
    animation.start()
  }, [visible])

  return (
    <>
      <Button
        title="Animate"
        onPress={() => {
          setVisible(!visible)
        }}
      />
      <Animated.Text style={{ opacity: value.current, fontSize: 42 }}>
        Hello!
      </Animated.Text>
    </>
  )
}
