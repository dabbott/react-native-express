const randomId = () => Math.random().toString()

const createItem = (title) => ({ id: randomId(), title })

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
    case 'add':
      return { ...state, items: [...state.items, createItem(action.value)] }
    case 'remove':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.value),
      }
  }
}
