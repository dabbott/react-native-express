const classTitle = 'Using class'
const classCode = `class Animal {
  constructor(name) {
    this.name = name
  }

  static beProud() {
    console.log('I AM AN ANIMAL')
  }

  printName() {
    console.log(this.name)
  }
}

const animal = new Animal('Cat')
animal.printName() // Cat
Animal.beProud() // I AM AN ANIMAL`

export const classExample = {
  title: classTitle,
  code: classCode,
}

const extendsTitle = 'Inheritance'
const extendsCode = `class Animal {
  constructor(name) {
    this.name = name
  }

  printName() {
    console.log(this.name)
  }
}

class Cat extends Animal {
  printName() {
    super.printName()
    console.log(\`My name is \${this.name}\`)
  }
}

const cat = new Cat('Fido')
cat.printName()`

export const extendsExample = {
  title: extendsTitle,
  code: extendsCode,
}
