import React, { Component } from 'react'

import WebPlayer from './WebPlayer'

export const ThemeContext = React.createContext('normal')

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
        flex={this.context === 'slides' ? '1' : undefined}
        height={this.props.code ? codeHeight(this.props.code) : 400}
        playground={{ enabled: true }}
        width={0}
        typescript={{ enabled: true }}
        workspaceCSS={this.context === 'slides' ? workspaceCSS : undefined}
        {...this.props}
        title={undefined}
      />
    )
  }
}

EditorConsole.contextType = ThemeContext

const workspaceCSS = `
.CodeMirror {
  background-color: rgb(250,250,250);
}

.CodeMirror-lines {
  padding-top: 20px;
  padding-bottom: 20px;
}

.cm-s-react {
  font-size: 18px;
  line-height: 26px;
}

.cm-s-react .CodeMirror-linenumber {
  // padding: 0;
  // font-size: 0px;
  // line-height: 0px;
  display: none;
}

.cm-s-react .CodeMirror-gutters {
  background: rgb(250,250,250);
  padding-left: 12px;
  padding-right: 0px;
  border-left: 0px;
  border-right: 0px;
}
`

// .cm-s-react {
//   font-family: 'source-code-pro', Menlo, 'Courier New', Consolas, monospace;
//   font-size: 13px;
//   line-height: 20px;
//   color: #484848;
// }

// .cm-s-react .CodeMirror-linenumber {
//   color: #d8d8d8;
//   padding: 0 3px 0 3px;
//   font-size: 10px;
//   line-height: 22px;
// }

// .cm-s-react .CodeMirror-gutters {
//   background: white;
//   border-left: 4px solid rgba(238, 238, 238, 1);
//   border-right: 0px;
// }
