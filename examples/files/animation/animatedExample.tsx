import React, { useRef } from 'react'
import { Animated, Button } from 'react-native'

export default function MyComponent() {
  const value = useRef(new Animated.Value(0))

  return (
    <>
      <Button
        title="Animate"
        onPress={() => {
          const animation = Animated.timing(value.current, {
            toValue: 1,
            useNativeDriver: true,
          })

          animation.start()
        }}
      />
      <Animated.Text style={{ opacity: value.current, fontSize: 42 }}>
        Hello!
      </Animated.Text>
    </>
  )
}
