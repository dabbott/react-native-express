import React from 'react'
import styled from 'styled-components'
import GithubCorner from './GithubCorner'

const Container = styled.div(({ height }) => ({
  position: 'relative',
  height: `${height || 200}px`,
  backgroundImage: `url(//cdn.rawgit.com/dabbott/react-native-express/master/images/background-compressed.jpg)`,
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}))

export default ({ children, height }) => (
  <Container height={height}>
    <GithubCorner />
    {children}
  </Container>
)
