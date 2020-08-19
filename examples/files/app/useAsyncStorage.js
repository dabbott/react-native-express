export default function useItem(key) {
  const [item, setItem] = useState(defaultValue)

  async function getValue() {
    try {
      const newItem = await AsyncStorage.getItem(key)
      if (newItem !== item) {
        setItem(newItem)
      }
    } catch (e) {}
  }

  async function setItem(newItem) {
    try {
      if (newItem === null) {
        await AsyncStorage.removeItem(key)
      } else {
        await AsyncStorage.setItem(key, newItem)
        setItem(newItem)
      }
    } catch (e) {}
  }

  useEffect(() => {
    getValue()
  }, [item])

  return [item, setItem]
}
