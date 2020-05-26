import React, { Component } from 'react'

import WebPlayer from './WebPlayer'

function countPlaygroundWidgets(code) {
  return (code.match(/console\.log/g) || []).length
}

function codeHeight(code) {
  const headerHeight = 40
  const footerHeight = 40
  const lineHeight = 20
  const padding = 4
  const visualSpacer = 20 // To make things look nicer
  const widgetHeight = 30
  const widgetsHeight = countPlaygroundWidgets(code) * widgetHeight
  const codeHeight = code.split('\n').length * lineHeight

  return (
    headerHeight +
    padding +
    codeHeight +
    widgetsHeight +
    visualSpacer +
    padding +
    footerHeight
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
        height={this.props.code ? codeHeight(this.props.code) : 400}
        playground={{ enabled: true }}
        width={0}
        typescript={{ enabled: true }}
        {...this.props}
      />
    )
  }
}
