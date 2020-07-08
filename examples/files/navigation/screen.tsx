import { StackScreenProps } from '@react-navigation/stack'

type Screen1Props = StackScreenProps<RootParamList, 'Screen1'>

const Screen1 = ({ navigation, route }: Screen1Props) => {
  return <Text>Screen1</Text>
}
