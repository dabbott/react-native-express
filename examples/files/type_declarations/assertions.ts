const myValue: unknown = JSON.parse(`[ "a", "b", "c" ]`)

const myStringArrayValue = myValue as string[]

console.log(myStringArrayValue.join(''))

export {}
