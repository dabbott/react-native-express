import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Anchor, InlineCode, Spacer } from 'react-guidebook'
import { useRouter } from 'next/router'

import legacyRoutes from '../utils/legacyRoutes'

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
  const slug = path.slice(1)
  const moved = slug in legacyRoutes
  const legacyRoute = moved ? '/' + legacyRoutes[slug] : undefined

  useEffect(() => {
    if (!moved) return

    setTimeout(() => {
      router.push(legacyRoute)
    }, 4000)
  }, [moved])

  return (
    <Banner>
      {moved ? (
        <>
          <Subtitle>
            The page <InlineCode>{path}</InlineCode>{' '}
            {legacyRoute === '/' ? 'was removed :(' : 'moved'}
          </Subtitle>
          <Spacer size={20} />
          <Anchor href={legacyRoute}>
            <IndexLink>
              Redirecting you to <InlineCode>{legacyRoute}</InlineCode> now...
            </IndexLink>
          </Anchor>
        </>
      ) : (
        <>
          <Subtitle>
            Page <InlineCode>{path}</InlineCode> not found
          </Subtitle>
          <Spacer size={20} />
          <Anchor href="/">
            <IndexLink>Go to site index</IndexLink>
          </Anchor>
        </>
      )}
    </Banner>
  )
}
