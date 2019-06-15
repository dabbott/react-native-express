const code = `const foo = () => 'bar'

const baz = (x) => {
  return x + 1
}

const squareSum = (...args) => {
  const squared = args.map(x => Math.pow(x, 2))
  return squared.reduce((prev, curr) => prev + curr)
}

this.items.map(x => this.doSomethingWith(x))`

const title = 'Fat arrow functions'

export default { code, title }
