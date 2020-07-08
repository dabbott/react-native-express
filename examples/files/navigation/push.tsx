const Screen1 = ({ navigation }: Screen1Props) => {
  return (
    <Button
      onPress={() => {
        navigation.push('Screen2', { paramA: 'Hello!' })
      }}
    />
  )
}
