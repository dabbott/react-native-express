import { DiscussionEmbed } from 'disqus-react'
import React from 'react'
import { mediaQuery } from 'react-guidebook'
import styled from 'styled-components'

const Container = styled.div({
  backgroundColor: 'rgb(250,250,250)',
  padding: '60px',
  paddingTop: '40px',
  [mediaQuery.small]: {
    flexDirection: 'column-reverse',
    alignItems: 'stretch',
    padding: '20px',
  },
})

const isDev = process.env.NODE_ENV === 'development'

export default function Disqus({
  identifier,
  title,
  shortname,
  stagingShortname,
}) {
  if (typeof window === 'undefined') return null

  const name = isDev ? stagingShortname : shortname

  if (!name) return null

  const url = window.location.href

  return (
    <Container>
      <DiscussionEmbed shortname={name} config={{ url, identifier, title }} />
    </Container>
  )
}
