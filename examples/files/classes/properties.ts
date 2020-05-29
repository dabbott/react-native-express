class Cat {
  #name: string
  human?: string
  children: Cat[] = []

  constructor(name: string) {
    this.#name = name
  }

  get collarTag(): string {
    return `Hi! I'm ${this.#name}`
  }

  static species = 'Felis catus'
}

const myCat = new Cat('nyan')

console.log(myCat.collarTag)

console.log(myCat.children)

console.log(Cat.species)

export {}