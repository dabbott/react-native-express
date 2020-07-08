import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

const Screen1 = () => {
  const navigation = useNavigation<StackNavigationProp<RootParamList, 'Screen1'>>()
  const route = useRoute<RouteProp<RootParamList, 'Screen1'>>()

  // ...
}
