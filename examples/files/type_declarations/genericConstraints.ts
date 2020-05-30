function length<T extends { length: number }>(value: T): number {
  return value.length
}

console.log(length(['a', 'b', 'c']))

console.log(length({ length: 42 }))

export {}
