class Cat {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

const myCat = new Cat('nyan')

console.log(myCat)

console.log(`My name is ${myCat.name}`)

console.log(myCat instanceof Cat)

export {}
