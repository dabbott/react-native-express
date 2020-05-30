function find<T>(values: T[], predicate: (value: T) => boolean): T | undefined {
  for (let value of values) {
    if (predicate(value)) {
      return value
    }
  }
}

const fruit = ['apple', 'orange', 'peach']
const found = find(fruit, string => string.startsWith('a'))

console.log(found)
