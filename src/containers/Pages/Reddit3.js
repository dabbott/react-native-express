import React, { Component } from 'react'

import Page from './Page'
import styles from './styles'

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
}

const contentStyle = {
  paddingRight: '30px',
  marginTop: '-15px',
}

export default class Reddit3 extends Component {
  render() {
    return (
      <Page title={'Persisting Token'}>
        <div style={styles.well}>
          <div style={containerStyle}>
            <div style={contentStyle}>
              <div style={styles.h3}> Persisting Token </div>
              <div style={styles.p}>
               Once we have the token we're going to want to keep it around on the device's local storage. To do this, we'll use React-Native's storage module <code>AsyncStorage</code>.
              </div>
              <div style={styles.h4}> Tasks </div>
              <ul>
                <li style={styles.li}>
                  Implement <code>Storage.js</code> as a wrapper for AsyncStorage. AsyncStorage is, as the name suggests, async so let's make the functions of <code>Storage.js</code> async as well.
                  <ul>
                    <li style={styles.li}>create methods to get, set, and clear token</li>
                    <li style={styles.li}>create methods to get, set, and clear expiration date of token — this can just be 30minutes from first time token was set.</li>
                  </ul>
                </li>
                <li style={styles.li}>
                  In <code>userRedux.js</code> we should store the token on the first time we authenticate.
                </li>
                <li style={styles.li}>
                  In <code>userRedux.js</code> we can now <code>await</code> on the token before making a call and if it exists, load the authenticated redux state and skip the network request.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
