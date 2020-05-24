const myDate = new Date()

console.log(myDate)

myDate.setUTCFullYear(2000, 0, 1)
myDate.setUTCHours(0, 0, 0, 0)

console.log(myDate)

// Milliseconds since 1970
const timestamp = Date.now()

console.log(timestamp)

// Parsing?
