const people = {
  name: 'Devin',
  age: 29,
  hairColor: undefined,
  eyeColor: 'blue',
  location: {
    city: 'San Francisco',
  },
}

const {
  name: myName,
  hairColor = 'brown',
  location: { city },
  ...otherProperties
} = people

console.log(myName, hairColor, city, otherProperties)

export {}
