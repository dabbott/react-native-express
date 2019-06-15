import React, { Component } from 'react'
import styled from 'styled-components'
import mediaQuery from '../utils/mediaQuery'

const Container = styled.div({
  fontSize: '20px',
  fontWeight: '300',
  marginTop: '60px',
  [mediaQuery.small]: {
    marginTop: '20px',
  },
  marginBottom: '15px',
})

export default class SectionHeader extends Component {
  render() {
    const { children } = this.props

    return <Container>{children}</Container>
  }
}
