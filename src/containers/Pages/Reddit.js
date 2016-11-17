import React, { Component } from 'react'
import { Link } from 'react-router'

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

export default class Reddit extends Component {
  render() {
    return (
      <Page title={'Reddit Client'}>
        <div style={styles.well}>
          <div style={containerStyle}>
            <div style={contentStyle}>
              <div style={styles.h3}> Overview </div>
              <div style={styles.p}>
                This exercise will be a basic Reddit clone. This exercise will include some more complex elements such as <code>fetch</code>, <code>AsyncStorage</code>, and authentication.
              </div>
              <div style={styles.h4}> Download </div>
              <div style={styles.p}>
                Download the basic project template <a href={'https://raw.githubusercontent.com/gabergg/ReactNativeTodoList/starting-point/boilerplate/TodoList.zip'}>here</a> to begin.
              </div>
              <div style={styles.h4}> Completed </div>
              <div style={styles.p}>
                View the source code for the completed project <a href={'https://github.com/gabergg/ReactNativeTodoList'}>here</a>.
              </div>
              <div style={styles.h4}> Sections </div>
              <ul>
                <li style={styles.li}> <Link to={'todo_list_1'}> Step 1 - Setup Router </Link> </li>
                <li style={styles.li}> <Link to={'todo_list_2'}> Step 2 - Reddit OAuth </Link> </li>
                <li style={styles.li}> <Link to={'todo_list_3'}> Step 3 - Persisting Token with AsyncStorage </Link> </li>
                <li style={styles.li}> <Link to={'todo_list_4'}> Step 4 - Fetch and Display Reddit Posts </Link> </li>
              </ul>
            </div>
            <div style={{border: '1px solid black'}}>
              <img
                width={280}
                src={'reddit-screenshot.png'}
              />
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
