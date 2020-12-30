import { DiscussionEmbed } from 'disqus-react'
import React from 'react'
import { mediaQuery, PageLayout } from 'react-guidebook'
import styled from 'styled-components'

const Container = styled.div({
  backgroundColor: 'rgb(250,250,250)',
})

const isDev = process.env.NODE_ENV === 'development'

interface Props {
  identifier: string
  title: string
  shortname: string
  stagingShortname?: string
}

export default function Disqus({
  identifier,
  title,
  shortname,
  stagingShortname,
}: Props) {
  if (typeof window === 'undefined') return null

  const name = isDev ? stagingShortname : shortname

  if (!name) return null

  const url = window.location.href

  return (
    <Container>
      <PageLayout>
        <DiscussionEmbed shortname={name} config={{ url, identifier, title }} />
      </PageLayout>
    </Container>
  )
}
