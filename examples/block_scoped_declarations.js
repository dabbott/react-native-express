const code = `const a = 1
let b = 'foo'

// Not allowed!
// a = 2

// Ok!
b = 'bar'

if (true) {
  const a = 3
}`

const title = 'Using const and let'

export default { code, title }
