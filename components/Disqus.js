import React, { Component } from 'react'
import styled from 'styled-components'
import { DiscussionEmbed } from 'disqus-react'
import mediaQuery from '../utils/mediaQuery'

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

export default class Disqus extends Component {
  render() {
    if (typeof window === 'undefined') {
      return null
    }

    const url = window.location.href

    const prod = window.location.hostname.match('reactnativeexpress.com')
    const shortname = prod ? 'reactnativeexpress' : 'reactnativeexpress-staging'

    const { identifier, title } = this.props

    const config = { url, identifier, title }

    return (
      <Container>
        <DiscussionEmbed shortname={shortname} config={config} />
      </Container>
    )
  }
}
