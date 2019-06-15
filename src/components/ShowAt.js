import React from 'react'
import styled from 'styled-components'
import mediaQuery from '../utils/mediaQuery'

const ShowAtLarge = styled.div({
  [mediaQuery.small]: {
    display: 'none',
  },
  [mediaQuery.medium]: {
    display: 'none',
  },
  [mediaQuery.large]: {
    display: 'block',
  },
})

const ShowAtMedium = styled.div({
  [mediaQuery.small]: {
    display: 'none',
  },
  [mediaQuery.medium]: {
    display: 'block',
  },
  [mediaQuery.large]: {
    display: 'none',
  },
})

const ShowAtSmall = styled.div({
  [mediaQuery.small]: {
    display: 'block',
  },
  [mediaQuery.medium]: {
    display: 'none',
  },
  [mediaQuery.large]: {
    display: 'none',
  },
})

export default function ShowAt({ breakpoint, ...rest }) {
  switch (breakpoint) {
    case 'small':
      return <ShowAtSmall {...rest} />
    case 'medium':
      return <ShowAtMedium {...rest} />
    case 'large':
      return <ShowAtLarge {...rest} />
    default:
      throw new Error('Invalid ShowAt breakpoint')
  }
}
