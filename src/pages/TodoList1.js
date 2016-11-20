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

export default class TodoList1 extends Component {
  render() {
    return (
      <Page title={'App Layout'}>
        <div style={styles.well}>
          <div style={containerStyle}>
            <div style={contentStyle}>
              <div style={styles.h3}> App layout </div>
              <div style={styles.p}>
                The goal of this step is to get the header and footer in place, with a placeholder for the input and list content.
              </div>
              <div style={styles.h4}> Tasks </div>
              <ul>
                <li style={styles.li}> Complete the Title.js component to render a given title as seen at the top of the app. </li>
                <li style={styles.li}> Complete the Footer.js component with a clickable 'Remove completed items' element that shouldn't yet do anything. </li>
                <li style={styles.li}> Write the <code>render</code> function of App.js to render the Title, Footer, and a placeholder List section </li>
              </ul>
              <div style={styles.h4}> Hints </div>
              <ul>
                <li style={styles.li}> <code>ScrollView</code> stretches to fill unused space on the screen. </li>
              </ul>
            </div>
            <div style={{border: '1px solid black'}}>
              <img
                width={280}
                src={'todo-screenshot.png'}
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
