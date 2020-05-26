let array1 = [1, 2, 3, 4]
let array2 = [1, 2, 3]

console.log(JSON.stringify(array1) === JSON.stringify(array2))

array2.push(4)

console.log(JSON.stringify(array1) === JSON.stringify(array2))
