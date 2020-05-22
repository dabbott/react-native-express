const myString = 'hello'

console.log(typeof myString)

if (typeof myString === 'hello') {
  console.log("it's a string!")
}

// But this only really works with primitives
const myArray = []
const myObject = {}
const myNull = null

console.log(typeof myArray)
console.log(typeof myObject)
console.log(typeof myNull)
