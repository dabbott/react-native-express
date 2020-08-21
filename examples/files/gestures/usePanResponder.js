import { useReducer, useRef } from 'react'
import { PanResponder } from 'react-native'

import { actionCreators, initialState, reducer } from './pan'

export default function usePanResponder() {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Should we claim the interaction lock when the user presses down on the square?
  const handleStartShouldSetPanResponder = (e, gestureState) => true

  // We were granted the interaction lock, so start the drag!
  const handlePanResponderGrant = (e, gestureState) => {
    dispatch(actionCreators.start())
  }

  // Every time the touch/mouse moves, update the drag.
  const handlePanResponderMove = (e, gestureState) => {
    dispatch(actionCreators.move({ x: gestureState.dx, y: gestureState.dy }))
  }

  // When the touch/mouse is lifted, end the drag.
  const handlePanResponderEnd = (e, gestureState) => {
    dispatch(actionCreators.end({ x: gestureState.dx, y: gestureState.dy }))
  }

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: handleStartShouldSetPanResponder,
      onPanResponderGrant: handlePanResponderGrant,
      onPanResponderMove: handlePanResponderMove,
      onPanResponderRelease: handlePanResponderEnd,
      onPanResponderTerminate: handlePanResponderEnd,
    })
  )

  return [state, panResponder.current.panHandlers]
}
