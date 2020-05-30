const myValue: unknown = JSON.parse(`"a b c"`)

if (typeof myValue === 'string') {
  console.log(myValue.split(' '))
}

// More on type refinement next!

export {}
