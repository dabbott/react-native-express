import React from 'react'
import styled from 'styled-components'
import ReactNativeWebPlayer from 'react-native-web-player'

import isMobile from '../utils/isMobile'

const playerStyles = {
  tab: {
    backgroundColor: 'rgb(250,250,250)',
  },
  header: {
    backgroundColor: 'rgb(250,250,250)',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 1px',
    zIndex: 10,
  },
  headerText: {
    color: '#AAA',
    fontWeight: 'normal',
  },
  transpilerHeader: {
    backgroundColor: 'rgb(240,240,240)',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 1px',
    zIndex: 10,
  },
  transpilerHeaderText: {
    color: '#888',
    fontWeight: 'normal',
  },
  tabText: {
    color: '#AAA',
  },
  tabTextActive: {
    color: '#000',
  },
}

const Container = styled.div({
  display: 'flex',
  marginBottom: '15px',
})

const styles = {
  player: {
    flex: '1 1 auto',
    minWidth: '0',
    minHeight: '0',
    marginRight: '-10px',
  },
}

export default class WebPlayer extends React.Component {
  static defaultProps = {
    height: 700,
    width: 260,
    scale: 0.75,
    showTranspiler: false,
    fullscreen: true,
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    const {
      showTranspiler,

      // Passthrough
      code,
      files,
      entry,
      title,
      height,
      width,
      scale,
      fullscreen,
      transpilerTitle,
      vendorComponents,
    } = this.props

    const params = {
      code,
      files,
      entry,
      title,
      width,
      scale,
      fullscreen,
      transpilerTitle,
      vendorComponents,
      styles: playerStyles,
    }

    if (isMobile) {
      params.panes = ['editor']
    } else {
      if (showTranspiler) {
        params.panes = ['editor', 'transpiler']
      } else {
        params.panes = ['editor', 'player']
      }
    }

    return (
      <Container>
        <ReactNativeWebPlayer
          style={{ ...styles.player, height }}
          {...params}
        />
      </Container>
    )
  }
}
