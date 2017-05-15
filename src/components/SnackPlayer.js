import React, { Component, PropTypes } from 'react'

export default class SnackPlayer extends Component {
  componentDidMount() {
    window.ExpoSnack && window.ExpoSnack.initialize();
  }

  render() {
    const {id, platform, preview} = this.props

    return (
      <div>
        <div
          data-snack-id={id}
          data-snack-platform={platform || "ios"}
          data-snack-preview={preview || "true"}
          style={{
            overflow: 'hidden',
            background: '#fafafa',
            border: '1px solid rgba(0,0,0,.16)',
            borderRadius: '4px',
            height: '505px',
            width: '100%',
          }}
        />
      </div>
    )
  }
}
