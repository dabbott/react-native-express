import React, { Component } from 'react'
import styled from 'styled-components'

import Author from './Author'

const Container = styled.div({
  fontSize: '20px',
  fontWeight: '300',
  marginTop: '15px',
  marginBottom: '15px',
})

export default class PageHeader extends Component {
  render() {
    const { title, author, authorURL } = this.props

    return (
      <Container>
        {title}
        <Author url={authorURL}>{author}</Author>
      </Container>
    )
  }
}
