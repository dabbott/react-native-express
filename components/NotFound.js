import React from 'react'
import styled from 'styled-components'
import { Anchor, InlineCode, Spacer } from 'react-guidebook'
import { useRouter } from 'next/router'

const Banner = styled.div(({ theme }) => ({
  flex: '1 1 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  background: `linear-gradient(to bottom, ${theme.colors.banner.top}, ${theme.colors.banner.bottom})`,
}))

const Subtitle = styled.span(({ theme }) => theme.textStyles.subtitle)

const IndexLink = styled.span(({ theme }) => ({
  ...theme.textStyles.subtitle,
  color: '#337ab7',
}))

export default () => {
  const router = useRouter()
  const path = router.asPath

  return (
    <Banner>
      <Subtitle>
        Page <InlineCode>{path}</InlineCode> not found
      </Subtitle>
      <Spacer size={20} />
      <Anchor href="/">
        <IndexLink>Go to site index</IndexLink>
      </Anchor>
    </Banner>
  )
}
