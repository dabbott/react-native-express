import React from 'react'
import styled from 'styled-components'
import mediaQuery from '../utils/mediaQuery'

const HideAtLarge = styled.div({
  [mediaQuery.small]: {
    display: 'block',
  },
  [mediaQuery.medium]: {
    display: 'block',
  },
  [mediaQuery.large]: {
    display: 'none',
  },
})

const HideAtMedium = styled.div({
  [mediaQuery.small]: {
    display: 'block',
  },
  [mediaQuery.medium]: {
    display: 'none',
  },
  [mediaQuery.large]: {
    display: 'block',
  },
})

const HideAtSmall = styled.div({
  [mediaQuery.small]: {
    display: 'none',
  },
  [mediaQuery.medium]: {
    display: 'block',
  },
  [mediaQuery.large]: {
    display: 'block',
  },
})

const HideAtLargeFlex = styled.div({
  [mediaQuery.small]: {
    display: 'flex',
  },
  [mediaQuery.medium]: {
    display: 'flex',
  },
  [mediaQuery.large]: {
    display: 'none',
  },
})

const HideAtMediumFlex = styled.div({
  [mediaQuery.small]: {
    display: 'flex',
  },
  [mediaQuery.medium]: {
    display: 'none',
  },
  [mediaQuery.large]: {
    display: 'flex',
  },
})

const HideAtSmallFlex = styled.div({
  [mediaQuery.small]: {
    display: 'none',
  },
  [mediaQuery.medium]: {
    display: 'flex',
  },
  [mediaQuery.large]: {
    display: 'flex',
  },
})

export default function HideAt({ breakpoint, flex, ...rest }) {
  switch (breakpoint) {
    case 'small':
      return flex ? <HideAtSmallFlex {...rest} /> : <HideAtSmall {...rest} />
    case 'medium':
      return flex ? <HideAtMediumFlex {...rest} /> : <HideAtMedium {...rest} />
    case 'large':
      return flex ? <HideAtLargeFlex {...rest} /> : <HideAtLarge {...rest} />
    default:
      throw new Error('Invalid HideAt breakpoint')
  }
}
