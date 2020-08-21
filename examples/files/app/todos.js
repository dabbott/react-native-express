const randomId = () => Math.random().toString()

const createItem = (title) => ({ id: randomId(), title })

const types = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
}

export const actionCreators = {
  add: (title) => ({ type: types.ADD, payload: createItem(title) }),
  remove: (id) => ({ type: types.REMOVE, payload: id }),
}

export const initialState = {
  items: [
    createItem('Click to remove'),
    createItem('Learn React Native'),
    createItem('Write Code'),
    createItem('Ship App'),
  ],
}

export function reducer(state, action) {
  switch (action.type) {
    case types.ADD:
      return { ...state, items: [...state.items, action.payload] }
    case types.REMOVE:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      }
  }
}
