import React, { Component } from 'react'

import WebPlayer from './WebPlayer'

function codeHeight(code) {
  const headerHeight = 40
  const footerHeight = 40
  const lineHeight = 20
  const padding = 4
  const visualSpacer = 20 // To make things look nicer
  const codeHeight = code.split('\n').length * lineHeight
  return (
    headerHeight + padding + codeHeight + visualSpacer + padding + footerHeight
  )
}

export default class EditorConsole extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <WebPlayer
        fullscreen={true}
        playerTitle={'Console output'}
        showConsole={true}
        height={this.props.code ? codeHeight(this.props.code) : 400}
        {...this.props}
      />
    )
  }
}
