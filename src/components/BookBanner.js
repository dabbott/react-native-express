import React, { Component, PropTypes } from 'react'
import createStyles, { responsive } from 'react-styles-provider'

import styles from '../styles'
import Link from './Link'

const BOOK_URL = 'https://gumroad.com/a/567063667'

@responsive()
@createStyles(({responsive}) => {
  const mobile = responsive.match('mobile')
  const small = responsive.match('small')

  return {
    container: {
      display: 'column',
      flexDirection: 'row',
      alignItems: 'stretch',
      paddingLeft: mobile ? 20 : 60,
      paddingRight: mobile ? 20 : 60,
      paddingBottom: 40,
      borderTop: '1px solid rgba(220,220,220,0.5)',
      borderBottom: '1px solid rgba(220,220,220,0.5)',
    },
    content: {
      display: 'flex',
      flexDirection: 'row',
    },
    details: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    h3: styles.h3,
    imageLink: {
      alignSelf: small ? 'center' : 'flex-start',
    },
    image: {
      marginTop: small ? 20 : 60,
      marginLeft: small ? 0 : 20,
      alignSelf: small ? 'center' : 'flex-start',
    },
    button: {
      marginTop: 20,
      flex: 0,
      padding: '10px 35px',
      backgroundColor: 'rgb(54,203,170)',
      color: 'white',
      borderRadius: 3,
      textAlign: 'center',
      alignSelf: small ? 'stretch' : 'flex-start',
    },
  }
})
export default class BookBanner extends Component {
  render() {
    const {styles, onPress, responsive} = this.props

    const img = (
      <Link style={styles.imageLink} href={BOOK_URL}>
        <img
          style={styles.image}
          src={`fsrn-book.png`}
          srcSet={`fsrn-book.png 1x, fsrn-book@2x.png 2x`}
          height={250}
        />
      </Link>
    );

    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.details}>
            <div style={styles.h3}>Want to learn React Native in-depth?</div>
            <div style={styles.p}>
              If you like React Native Express, you'll love my new book, <Link href={BOOK_URL}>Fullstack React Native: The complete guide to React Native</Link>! Throughout the book, we'll build 7 full apps, covering complex topics like navigation, gestures, and native modules. We don't assume any knowledge of React or newer JavaScript language features, so you can dive right in regardless of your experience level. The book comes in <code>PDF</code>, <code>EPUB</code> and <code>MOBI</code> formats.
            </div>
            {responsive.match('small') && img}
            <Link
              style={styles.button}
              href={BOOK_URL}
            >
              Check it out!
            </Link>
          </div>
          {!responsive.match('small') && img}
        </div>
      </div>
    )
  }
}
