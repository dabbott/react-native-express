interface IPerson {
  name: string
  eat(food: string)
}

class Person implements IPerson {
  name: string
  constructor(name: string) {
    this.name = name
  }
  eat(food: string) {
    console.log(`${this.name} is now eating ${food}...`)
  }
}

const myPerson1: IPerson = new Person('Devin')

const myPerson2: IPerson = {
  name: 'Kevin',
  eat(food: string) {
    console.log(`${this.name} is now eating ${food}...`)
  },
}

const people: IPerson[] = [myPerson1, myPerson2]

people.forEach(person => person.eat('pizza'))

export {}
