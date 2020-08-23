import { requireNativeComponent, ViewStyle } from 'react-native'

export default requireNativeComponent('MyView')

// Or in TypeScript:

/*
type MyViewProps = {
  style: ViewStyle
  myInt: number
  myColor: string
  myArray: number[]
}

export default requireNativeComponent<MyViewProps>('MyView')
*/
