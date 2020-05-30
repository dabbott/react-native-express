class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  sayHello() {
    console.log(`I'm ${this.name}, an animal`)
  }
}

class Cat extends Animal {
  #whiskers: number

  constructor(name: string, whiskers: number) {
    super(name)
    
    this.#whiskers = whiskers
  }

  sayHello() {
    super.sayHello()

    console.log(`I'm also a cat`)
  }
}

const myCat = new Cat('nyan', 8)

myCat.sayHello()

export {}
