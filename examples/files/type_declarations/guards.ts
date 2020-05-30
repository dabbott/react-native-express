const myValue: unknown = JSON.parse(`[ "a", "b", "c" ]`)

function isStringArray(array: unknown): array is string[] {
  if (!Array.isArray(array)) return false

  const hasNonStringElement = array.some(element => typeof element !== 'string')

  return !hasNonStringElement
}

if (isStringArray(myValue)) {
  console.log(myValue.join(''))
}

export {}
