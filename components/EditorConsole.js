import React, { Component } from 'react'

import { WebPlayer } from 'react-guidebook'
import colors from '../styles/colors'

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

const paneNames = {
  editor: 'Code',
  player: 'Live Preview',
  transpiler: 'Transpiler Output',
  workspaces: 'Walkthrough',
}

export default class EditorConsole extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    let { variant, panes = ['editor', 'player'], height, ...rest } = this.props

    const style = {
      ...(variant === 'slides'
        ? { flex: '1' }
        : {
            height: height
              ? `${height}px`
              : rest.code
              ? codeHeight(rest.code)
              : 700,
          }),
      flex: '1 1 0%',
      minWidth: '0',
      minHeight: '0',
    }

    if (rest.workspaces && rest.workspaces.length > 0) {
      panes = ['workspaces', ...panes]
    }

    const baseStyles = {
      workspacesButtonWrapper: {
        backgroundColor: colors.primary,
      },
      workspacesRowActive: {
        backgroundColor: colors.primary,
        borderLeftColor: colors.primary,
      },
      workspacesDescription: {
        backgroundColor: colors.primary,
      },
      workspacesPane: {
        overflowY: 'auto',
        width: '25%',
      },
      tabTextActive: {
        color: '#333',
        borderBottomColor: colors.primary,
      },
    }

    return (
      <WebPlayer
        containerStyle={{ marginBottom: '15px', flex: '1' }}
        fullscreen={true}
        platform={'ios'}
        width={260}
        scale={0.75}
        style={style}
        styles={{
          ...baseStyles,
          playerPane:
            rest.width === 0
              ? {
                  display: 'none',
                }
              : {
                  overflow: 'hidden',
                  // background: 'rgba(0,0,0,0.02)',
                  background: 'rgb(250, 250, 250)',
                  marginLeft: '0',
                  marginRight: '0',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  ...(panes.length === 1 &&
                    panes[0] === 'player' && { flex: 1, paddingTop: '12px' }),
                },
        }}
        playground={{ enabled: true }}
        // typescript={{ enabled: true }}
        workspaceCSS={variant === 'slides' ? slidesCSS : workspaceCSS}
        panes={panes}
        responsivePaneSets={
          panes.length > 1 && rest.width !== 0
            ? [
                {
                  maxWidth: 920,
                  panes: [
                    {
                      type: 'stack',
                      children: panes.map((pane) => ({
                        type: pane,
                        title: paneNames[pane] || pane,
                        ...(pane === 'workspaces' && {
                          style: {
                            overflowY: 'auto',
                            width: 'inherit',
                          },
                        }),
                      })),
                    },
                  ],
                },
              ]
            : []
        }
        {...rest}
      />
    )
  }
}

const workspaceCSS = `
.cm-s-react {
  color: #777;
}

.cm-s-react span.cm-def, .cm-s-react span.cm-attribute {
  color: #333;
}

.cm-s-react span.cm-keyword {
  color: ${colors.primary};
}

.cm-s-react span.cm-string, .cm-s-react span.cm-string-2, .cm-s-react span.cm-tag {
  color: #2e9f74;
}

.cm-s-react span.cm-bracket {
  color: #555;
}
`

// This doesn't work for players with a small height, since the player pane covers the entire iframe
// const workspaceCSS = `
// @media (max-width: 600px) {
//   #react-root > div > div {
//     flex-direction: column;
//   }
// }
// `

const slidesCSS = `
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
