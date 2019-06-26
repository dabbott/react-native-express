import React, { Component } from 'react'
import { DiscussionEmbed } from 'disqus-react'

export default class Disqus extends Component {
  render() {
    if (typeof window === 'undefined' || window.location.pathname === '/') {
      return null
    }

    const url = window.location.href

    const prod = window.location.hostname.match('reactnativeexpress.com')
    const shortname = prod ? 'reactnativeexpress' : 'reactnativeexpress-staging'

    const { identifier, title } = this.props

    const config = { url, identifier, title }

    return <DiscussionEmbed shortname={shortname} config={config} />
  }
}
