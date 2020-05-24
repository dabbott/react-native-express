const myString = 'hello'

console.log(typeof myString)

if (typeof myString === 'string') {
  // ...
}

if (typeof myVariableThatDoesNotExist === 'undefined') {
  // ...
}

// But this is only useful for primitives
console.log(typeof [], typeof {}, typeof null)
