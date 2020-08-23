import { requireNativeComponent } from 'react-native'

export default requireNativeComponent('MyView')

// Or in TypeScript:

/*
import { requireNativeComponent, ViewStyle } from 'react-native'

type MyViewProps = {
  style: ViewStyle
}

export default requireNativeComponent<MyViewProps>('MyView')
*/
