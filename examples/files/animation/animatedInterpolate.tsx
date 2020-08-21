import React, { useRef } from 'react'
import { Animated, Button } from 'react-native'

export default function MyComponent() {
  const value = useRef(new Animated.Value(0.1))

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
      <Animated.Text
        style={{
          opacity: value.current,
          fontSize: 42,
          transform: [
            {
              translateY: value.current.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 400],
              }),
            },
          ],
        }}
      >
        Hello!
      </Animated.Text>
    </>
  )
}
