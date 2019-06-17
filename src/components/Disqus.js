import React, { Component } from 'react'
import { DiscussionEmbed } from 'disqus-react'

export default class Disqus extends Component {
  render() {
    const prod = window.location.hostname.match('reactnativeexpress.com')
    const shortname = prod ? 'reactnativeexpress' : 'reactnativeexpress-staging'

    const { identifier, title, url } = this.props

    const config = { url, identifier, title }

    return <DiscussionEmbed shortname={shortname} config={config} />
  }
}
