const myDate = new Date()

console.log(myDate.toString())

myDate.setFullYear(2000, 0, 1)
myDate.setHours(0, 0, 0, 0)

console.log(myDate.toString())

// Milliseconds since 1970
const timestamp = Date.now()

console.log(timestamp)

// Parsing?
