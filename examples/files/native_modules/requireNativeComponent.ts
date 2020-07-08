import { requireNativeComponent, ViewStyle } from 'react-native'

type MyViewProps = {
  style: ViewStyle
}

const MyView = requireNativeComponent<MyViewProps>('MyView')

export default MyView
