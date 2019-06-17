const code = `import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Counter extends Component {

  state = {count: 0}

  componentDidMount() {
    setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
  }

  render() {
    const {count} = this.state
    const {color, size} = this.props

    return (
      <Text style={{color, fontSize: size}}>
        {count}
      </Text>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter color={'lightblue'} size={16} />
        <Counter color={'skyblue'} size={32} />
        <Counter color={'steelblue'} size={80} />
        <Counter color={'darkblue'} size={140} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
`

export default { code }
