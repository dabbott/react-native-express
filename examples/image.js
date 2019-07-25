const code = `import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <Image
        style={styles.image}
        source={{uri: 'http://www.reactnativeexpress.com/static/logo.png'}}
      />
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
})
`

export default { code }
