import React from 'react'
import styled from 'styled-components'
import { query } from '../utils/mediaQuery'
import { useMediaQuery } from 'react-responsive'

export default function ShowAt({ breakpoint, ...rest }) {
  let isSmall = useMediaQuery(query.small)
  let isMedium = useMediaQuery(query.medium)
  let isLarge = useMediaQuery(query.large)

  if (breakpoint === 'small' && isSmall) {
    return <div {...rest} />
  }
  if (breakpoint === 'medium' && isMedium) {
    return <div {...rest} />
  }
  if (breakpoint === 'large' && isLarge) {
    return <div {...rest} />
  }
  return null
}
