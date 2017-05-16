import React, { Component, PropTypes } from 'react'
import createStyles from 'react-styles-provider'

@createStyles({
  player: {
    flex: '1 1 auto',
    overflow: 'hidden',
    background: '#fafafa',
    border: '1px solid rgba(0,0,0,.16)',
    borderRadius: 4,
    height: 512,
  },
})
export default class SnackPlayer extends Component {

  componentDidMount() {
    window.ExpoSnack && window.ExpoSnack.initialize()
  }

  render() {
    const {styles, id, platform, preview} = this.props

    return (
      <div
        data-snack-id={id}
        data-snack-platform={platform || "ios"}
        data-snack-preview={preview || "true"}
        style={styles.player}
      />
    )
  }
}
