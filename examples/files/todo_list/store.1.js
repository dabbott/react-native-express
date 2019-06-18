import { createStore } from 'redux'

// We're going to hardcode some data to get started
const reducer = () => {
  return {
    items: [
      { label: 'Eat lunch', completed: true },
      { label: 'Do laundry', completed: false },
    ],
  }
}

// Create a store with our placeholder reducer
const store = createStore(reducer)

export default store
