const title = 'Async and await'
const code = `const fetchData = async () => {
  return fetch('https://randomuser.me/api/')
}

const printData = async () => {
  try {
    const data = await fetchData()
    const json = await data.json()
    console.log(json)
  } catch(e) {
    console.error("Problem", e)
  }
}

printData()`

export default { code, title, height: 400 }
