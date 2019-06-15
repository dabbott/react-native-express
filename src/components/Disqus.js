import React, { Component } from 'react'
import { DiscussionEmbed } from 'disqus-react'

const prod = window.location.hostname.match('reactnativeexpress.com')
const shortname = prod ? 'reactnativeexpress' : 'reactnativeexpress-staging'

export default class Disqus extends Component {
  render() {
    const { identifier, title, url } = this.props

    const config = { url, identifier, title }

    return <DiscussionEmbed shortname={shortname} config={config} />
  }
}
