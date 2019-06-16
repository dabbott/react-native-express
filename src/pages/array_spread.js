const title = 'Array spread'
const code = `const foo = ['a', 'b', 'c']
const bar = ['d', 'e', 'f']

console.log(...foo)
console.log([...foo, ...bar])
`

export default { title, code }
