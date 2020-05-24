const myRegExp = /(\d{3})-(\d{3})-(\d{4})/

const match = '123-456-7890'.match(myRegExp)

console.log(match[0])

console.log(match.slice(1))
