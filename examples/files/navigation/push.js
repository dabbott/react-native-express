const Screen1 = ({ navigation }) => {
  return (
    <Button
      onPress={() => {
        navigation.push('Screen2', { paramA: 'Hello!' })
      }}
    />
  )
}
