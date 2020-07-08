import { createStackNavigator } from '@react-navigation/stack'

type RootParamList = {
  Screen1: undefined
  Screen2: { paramA: string }
  Screen3: { paramB: string; paramC: number }
}

const Root = createStackNavigator<RootParamList>()
