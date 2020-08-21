const types = {
  START: 'START',
  MOVE: 'MOVE',
  END: 'END',
}

export const actionCreators = {
  start: () => ({ type: types.START }),
  move: (point) => ({ type: types.MOVE, payload: point }),
  end: (point) => ({ type: types.END, payload: point }),
}

export const initialState = {
  dragging: false,
  initialY: 50,
  initialX: 50,
  offsetY: 0,
  offsetX: 0,
}

export function reducer(state, action) {
  switch (action.type) {
    case types.START: {
      return { ...state, dragging: true }
    }
    // Keep track of how far we've moved in total
    case types.MOVE: {
      const { x, y } = action.payload
      return {
        ...state,
        offsetY: y,
        offsetX: x,
      }
    }
    // The drag is finished. Set the initialY and initialX so that
    // the new position sticks. Reset offsetY and offsetX for the next drag.
    case types.END: {
      const { x, y } = action.payload
      return {
        ...initialState,
        initialY: state.initialY + y,
        initialX: state.initialX + x,
      }
    }
  }
}
