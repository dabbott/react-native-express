import React from 'react'
import styled from 'styled-components'
import GithubCorner from './GithubCorner'

const Container = styled.div(({ height }) => ({
  position: 'relative',
  height: `${height || 200}px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  background:
    'linear-gradient(to bottom, rgba(104,43,255,0.1), rgba(104,43,255,0.02))',
}))

export default ({ children, height }) => (
  <Container height={height}>
    {/* <GithubCorner /> */}
    {children}
  </Container>
)
