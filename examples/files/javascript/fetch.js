const fetchData = async () => {
  const response = await fetch('https://randomuser.me/api/')
  const data = await response.json()
  return data
}

const printData = async () => {
  try {
    const data = await fetchData()
    console.log('Data', data)
  } catch (error) {
    console.error('Problem', error)
  }
}

printData()

export {}
