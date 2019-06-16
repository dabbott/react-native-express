import React from 'react'

const styles = {
  player: {
    flex: '1 1 auto',
    overflow: 'hidden',
    background: '#fafafa',
    border: '1px solid rgba(0,0,0,.16)',
    borderRadius: 4,
    height: 512,
  },
}

export default class SnackPlayer extends React.Component {
  componentDidMount() {
    window.ExpoSnack && window.ExpoSnack.initialize()
  }

  render() {
    const { id, platform, preview } = this.props

    return (
      <>
        <script src="https://snack.expo.io/embed.js" />
        <div
          data-snack-id={id}
          data-snack-platform={platform || 'ios'}
          data-snack-preview={preview || 'true'}
          style={styles.player}
        />
      </>
    )
  }
}
