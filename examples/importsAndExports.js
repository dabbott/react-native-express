const index = `import myNumber from './myNumber'

console.log(myNumber)
`

export default {
  height: 300,
  width: 0,
  files: [
    ['index.js', index],
    ['myNumber.js', `export default 42\n`],
  ],
}
