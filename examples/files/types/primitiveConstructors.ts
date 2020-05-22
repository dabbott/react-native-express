// Uncommon
const myBoolean = new Boolean(true)

// Confusing behavior
console.log(myBoolean == true)
console.log(myBoolean === true)

// You can omit the `new` keyword...
const anotherBoolean = Boolean(true)
