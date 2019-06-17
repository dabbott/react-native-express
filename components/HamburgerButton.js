import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div({
  padding: '15px 12px',
  width: '40px',
  height: '40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  cursor: 'pointer',
})

const Bar = styled.div(({ pressed }) => ({
  height: '2px',
  backgroundColor: 'rgb(38, 48, 83)',
  opacity: pressed ? '0.3' : '0.8',
  transition: 'opacity 0.1s',
}))

export default class HamburgerButton extends Component {
  static defaultProps = {
    barCount: 3,
    onPress: () => {},
  }

  state = { pressed: false }

  onMouseDown = () => this.setState({ pressed: true })

  onMouseUp = () => this.setState({ pressed: false })

  render() {
    const { barCount, onPress } = this.props
    const { pressed } = this.state

    const elements = []

    for (let i = 0; i < barCount; i++) {
      elements.push(<Bar key={i} pressed={pressed} />)
    }

    return (
      <Container
        onClick={onPress}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
      >
        {elements}
      </Container>
    )
  }
}
