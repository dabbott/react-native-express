const title = 'React Native Animatable'

const code = `import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native'

import * as Animatable from 'react-native-animatable'

const colors = ['#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F']
const animations = ['fadeIn', 'shake', 'rubberBand', 'zoomOut']

export default class App extends Component {

  state = {animation: animations[0]}

  nextAnimation = () => {
    const {animation} = this.state
    const nextIndex = (animations.indexOf(animation) + 1) % animations.length

    this.setState({animation: animations[nextIndex]})
  }

  renderItem = (color, i) => {
    const {animation} = this.state

    return (
      <Animatable.View
        key={i}
        animation={animation}
        delay={i * 100}
        style={[styles.button, {backgroundColor: color}]}
      >
        <Text style={styles.text}>Tap me {i}</Text>
      </Animatable.View>
    )
  }

  render() {
    const {animation} = this.state

    return (
      <TouchableOpacity
        // use key to force a re-render when we switch animations
        key={animation}
        onPress={this.nextAnimation}
      >
        {colors.map(this.renderItem)}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
})
`

const vendorComponents = [
  [
    'react-native-animatable',
    'https://cdn.rawgit.com/dabbott/8335f232c8c90ef056ac5912e6cd4b38/raw/88841a962dc104b02b9e9919c5ad7a46c6c382d9/react-native-animatable.js',
  ],
]

export default { code, title, vendorComponents }
