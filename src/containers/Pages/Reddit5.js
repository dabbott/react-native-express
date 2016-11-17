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

export default class Reddit5 extends Component {
  render() {
    return (
      <Page title={'Display Posts'}>
        <div style={styles.well}>
          <div style={containerStyle}>
            <div style={contentStyle}>
              <div style={styles.h3}> Display Posts </div>
              <div style={styles.p}>
                We have all the data we need, so now all that's left to do is render it!
              </div>
              <div style={styles.h4}> Tasks </div>
              <ul>
                <li style={styles.li}>
                  Implement the <code>Post.js</code> component to render the "hot" posts in <code>Posts.js</code>. We'll also use this to render the first "t3" object
                  returned from "random." in the <code>Random.js</code> scene.
                </li>
                <li style={styles.li}>
                  Implement the <code>Comment.js</code> component to render the comments, or "t1" posts underneath the first "t3" post in our response from "random."
                  Add these to <code>Random.js</code>
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
