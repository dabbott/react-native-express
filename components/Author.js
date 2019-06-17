import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div({
  fontSize: '12px',
  fontWeight: '400',
  fontStyle: 'italic',
  paddingBottom: '15px',
})

export default class Author extends Component {
  render() {
    const { children, url } = this.props

    return (
      <Container>
        By <a href={url}>{children}</a>
      </Container>
    )
  }
}
