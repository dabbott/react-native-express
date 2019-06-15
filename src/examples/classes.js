const classTitle = 'Using class'
const classCode = `class Calculator {
  constructor(value1, value2) {
    this.value1 = value1
    this.value2 = value2
  }

  static multiply(value1, value2) {
    return value1 * value2
  }

  sum() {
    return this.value1 + this.value2
  }
}

const calc = new Calculator(2, 3)

console.log(calc.sum())
console.log(Calculator.multiply(2, 3))`

export const classExample = {
  title: classTitle,
  code: classCode,
}

const extendsTitle = 'Inheritance'
const extendsCode = `class SquareCalculator {
  constructor(value) {
    this.value = value
  }

  calculate() {
    return this.value * this.value
  }
}

class CubeCalculator extends SquareCalculator {
  calculate() {
    return this.value * super.calculate()
  }
}

const cuber = new CubeCalculator(3)
console.log(cuber.calculate())`

export const extendsExample = {
  title: extendsTitle,
  code: extendsCode,
}
