let myArray = [1, 2, 3, 4, 5]

function isEven(number: number): boolean {
  return number % 2 === 0
}

let evens = myArray.filter(isEven)

console.log(evens)
