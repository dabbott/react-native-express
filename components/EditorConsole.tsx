import React, { memo } from 'react'
import { WebPlayer, WebPlayerProps } from 'react-guidebook'
import { useTheme } from 'styled-components'

function getPaneType(pane): string {
  return typeof pane === 'string' ? pane : pane.type
}

function countPlaygroundWidgets(code): number {
  return (code.match(/console\.log/g) || []).length
}

function codeHeight(code): number {
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

interface Props {
  variant?: 'slides'
  width?: number
  height?: number
  code?: string
  prelude?: string
  modules?: WebPlayerProps['modules']
  panes?: WebPlayerProps['panes']
  workspaces?: WebPlayerProps['workspaces']
}

export default memo(
  function EditorConsole({
    variant,
    width,
    prelude,
    modules,
    panes = [
      'editor',
      {
        id: 'player',
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
  }: Props) {
    const theme = useTheme()

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
        backgroundColor: theme.colors.primary,
      },
      workspacesRowActive: {
        backgroundColor: theme.colors.primary,
        borderLeftColor: theme.colors.primary,
      },
      workspacesDescription: {
        backgroundColor: theme.colors.primary,
      },
      workspacesPane: {
        flex: '0 0 25%',
      },
      tabTextActive: {
        color: '#333',
        borderBottomColor: theme.colors.primary,
      },
    }

    const responsivePaneSets: WebPlayerProps['responsivePaneSets'] =
      panes.length > 1 && width !== 0
        ? [
            {
              maxWidth: 920,
              panes: [
                {
                  id: 'stack',
                  type: 'stack',
                  children: panes.map((pane, index) => {
                    const type = getPaneType(pane)

                    return {
                      id: `${type}-${index}`,
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
                    } as any // Improve JavaScript Playgrounds exported types to make this easier to type
                  }),
                },
              ],
            },
          ]
        : []

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
        responsivePaneSets={responsivePaneSets}
        {...rest}
      />
    )
  },
  () => true
)

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
