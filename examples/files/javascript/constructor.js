class Cat {
  constructor(name) {
    this.name = name
  }
}

const myCat = new Cat('nyan')

console.log(myCat)

console.log(`My name is ${myCat.name}`)

console.log(myCat instanceof Cat)

export {}
