import React, { useRef } from 'react'
import { Animated } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'

export default function MyComponent() {
  const translationY = useRef(new Animated.Value(0))

  const event = useRef(
    Animated.event([{ nativeEvent: { translationY: translationY.current } }], {
      useNativeDriver: true,
    })
  )

  return (
    <PanGestureHandler
      onGestureEvent={event.current}
      onHandlerStateChange={(event) => {
        if (event.nativeEvent.state === State.ACTIVE) {
          // Do something
        }
      }}
    >
      <Animated.View
        style={{ transform: [{ translateY: translationY.current }] }}
      />
    </PanGestureHandler>
  )
}
