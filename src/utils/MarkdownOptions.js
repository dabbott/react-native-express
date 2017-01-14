import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from '../pages/styles'

export default {
  p: (props) => <div {...props} style={styles.p} />,
  h1: (props) => <h1 {...props} style={styles.h3} />,
  a: (props) => {
    if (props.href.match(/^https?:/)) {
      return <a {...props} />
    } else {
      return <Link to={props.href}>{props.children}</Link>
    }
  },
}
