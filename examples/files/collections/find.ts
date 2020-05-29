const fruit = ['apples', 'oranges', 'peaches', 'pears', 'cherries', 'peaches']

const pFruit = fruit.find(fruit => fruit.startsWith('p'))

const pFruitIndex = fruit.findIndex(fruit => fruit.startsWith('p'))

console.log(pFruit)

console.log(pFruitIndex)

export {}
