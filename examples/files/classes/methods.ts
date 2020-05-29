class Cat {
  name: string
  children: Cat[] = []

  constructor(name: string) {
    this.name = name
  }

  addChild(child: Cat) {
    this.children.push(child)
  }

  static familyNames(cat: Cat): string[] {
    return [cat.name, ...cat.children.map(child => child.name)]
  }
}

const myCat = new Cat('nyan')

myCat.addChild(new Cat('whiskers'))
myCat.addChild(new Cat('meowth'))

console.log(Cat.familyNames(myCat))

export {}
