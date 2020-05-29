type UnionType = number | string | (number | string)[]

function sum(value: UnionType): number {
  if (Array.isArray(value)) {
    return value.map(Number).reduce((result, number) => result + number, 0)
  } else {
    return sum([value])
  }
}

let myValue: UnionType = ['1', 2, '3', 4]

console.log(sum(myValue))

export {}
