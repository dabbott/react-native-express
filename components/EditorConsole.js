import React, { Component } from 'react'

import { WebPlayer } from 'react-guidebook'
import { colors } from '../styles/theme'

function getPaneType(pane) {
  return typeof pane === 'string' ? pane : pane.type
}

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
  transpiler: 'Babel Output',
  workspaces: 'Walkthrough',
  console: 'Console Output',
}

export default class EditorConsole extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    let {
      variant,
      width,
      prelude,
      modules,
      panes = [
        'editor',
        {
          type: 'player',
          platform: 'ios',
          width: width ?? 260,
          scale: 0.75,
          prelude,
          modules,
        },
      ],
      height,
      ...rest
    } = this.props

    const style = {
      minWidth: '0',
      minHeight: '0',
      ...(variant === 'slides'
        ? {
            flex: '1',
            height: '100%',
          }
        : {
            flex: '1 1 0%',
            height: height
              ? typeof height === 'number'
                ? `${height}px`
                : height
              : rest.code
              ? codeHeight(rest.code)
              : 700,
          }),
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
        flex: '0 0 25%',
      },
      tabTextActive: {
        color: '#333',
        borderBottomColor: colors.primary,
      },
    }

    return (
      <WebPlayer
        preset="react-native"
        containerStyle={{ marginBottom: '15px', flex: '1' }}
        fullscreen={true}
        style={style}
        styles={{
          ...baseStyles,
          playerPane:
            width === 0
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
                    getPaneType(panes[0]) === 'player' && {
                      flex: 1,
                      paddingTop: '12px',
                    }),
                },
        }}
        css={variant === 'slides' ? slidesCSS : undefined}
        panes={panes}
        responsivePaneSets={
          panes.length > 1 && width !== 0
            ? [
                {
                  maxWidth: 920,
                  panes: [
                    {
                      type: 'stack',
                      children: panes.map((pane) => {
                        const type = getPaneType(pane)

                        return {
                          title: paneNames[type] || type,
                          ...(typeof pane === 'string' ? { type } : pane),
                          ...(type === 'workspaces' && {
                            style: {
                              flex: '1 1 0%',
                              width: 'inherit',
                            },
                          }),
                          ...(type === 'player' && {
                            style: {
                              paddingLeft: '0px',
                              paddingRight: '0px',
                            },
                          }),
                        }
                      }),
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
