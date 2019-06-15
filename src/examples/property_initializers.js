const propertyTitle = 'Property initializers'
const propertyCode = `class Cat {
  name = 'Tom'
  state = {
    running: true
  }
  constructor() {
    console.log(this.name, this.state.running)
  }
}

new Cat()`

export const propertyExample = { title: propertyTitle, code: propertyCode }

const functionTitle = 'Function property initializers'
const functionCode = `class Cat {
  constructor(name) {
    this.name = name
  }
  printName = () => {
    console.log(this.name)
  }
}

const cat = new Cat('Tom')
const printName = cat.printName

// 'this' is still bound to our Cat instance, so even
// though our calling context changed, the function
// executes in its original context.
printName()
`

export const functionExample = { title: functionTitle, code: functionCode }
