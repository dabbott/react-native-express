import { requireNativeComponent, ViewStyle } from 'react-native'

type MyViewProps = {
  style: ViewStyle
  myInt: number
  myColor: string
  myArray: number[]
}

const MyView = requireNativeComponent<MyViewProps>('MyView')

export default MyView
