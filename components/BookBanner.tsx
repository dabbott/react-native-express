import React from 'react'
import { Anchor, InlineCode, mediaQuery, Promotion } from 'react-guidebook'
import styled from 'styled-components'
import bookImage from '../images/fsrn-book.png'
import bookImage2x from '../images/fsrn-book@2x.png'

const BOOK_URL = 'https://gumroad.com/a/567063667'

const Image = styled.img(({ height }) => ({
  alignSelf: 'flex-start',
  marginLeft: '20px',
  height: `${height}px`,
  [mediaQuery.small]: {
    alignSelf: 'center',
    marginTop: '20px',
    marginLeft: '0',
  },
}))

const BookImage = () => (
  <Anchor href={BOOK_URL}>
    <Image
      src={bookImage2x}
      srcSet={`${bookImage} 1x, ${bookImage2x} 2x`}
      height={250}
    />
  </Anchor>
)

export default () => (
  <Promotion
    title="Want to learn React Native in-depth?"
    url={BOOK_URL}
    buttonTitle="Check it out!"
    image={<BookImage />}
  >
    If you like React Native Express, you'll love my new book,{' '}
    <Anchor href={BOOK_URL}>
      Fullstack React Native: The complete guide to React Native
    </Anchor>
    ! Throughout the book, we'll build 7 full apps, covering complex topics like
    navigation, gestures, and native modules. We don't assume any knowledge of
    React or newer JavaScript language features, so you can dive right in
    regardless of your experience level. The book comes in{' '}
    <InlineCode>PDF</InlineCode>, <InlineCode>EPUB</InlineCode> and{' '}
    <InlineCode>MOBI</InlineCode> formats.
  </Promotion>
)
