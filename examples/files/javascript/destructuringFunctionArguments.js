const myObject = {
  name: 'Devin',
  age: 29,
}

function myFunction({ name, age }) {
  return `${name}: ${age}`
}

console.log(myFunction(myObject))

export {}
