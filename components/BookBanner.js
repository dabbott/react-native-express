import React from 'react'
import styled from 'styled-components'
import mediaQuery from '../utils/mediaQuery'
import HideAt from './HideAt'
import ShowAt from './ShowAt'
import Paragraph from './Paragraph'
import Heading3 from './Heading3'

import bookImage from '../images/fsrn-book.png'
import bookImage2x from '../images/fsrn-book@2x.png'

const BOOK_URL = 'https://gumroad.com/a/567063667'

const Container = styled.div({
  display: 'column',
  flexDirection: 'row',
  alignItems: 'stretch',
  paddingLeft: '60px',
  paddingRight: '60px',
  paddingBottom: '60px',
  borderTop: '1px solid rgba(220,220,220,0.5)',
  borderBottom: '1px solid rgba(220,220,220,0.5)',
  [mediaQuery.small]: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
})

const Content = styled.div({
  display: 'flex',
  flexDirection: 'row',
})

const Details = styled.div({
  display: 'flex',
  flex: '1',
  flexDirection: 'column',
  alignItems: 'flex-start',
})

const Image = styled.img(({ height }) => ({
  alignSelf: 'flex-start',
  marginTop: '60px',
  marginLeft: '20px',
  height: `${height}px`,
  [mediaQuery.small]: {
    alignSelf: 'center',
    marginTop: '20px',
    marginLeft: '0',
  },
}))

const Button = styled.a({
  marginTop: '20px',
  padding: '10px 35px',
  flex: '0',
  backgroundColor: 'rgb(54,203,170)',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '3px',
  textAlign: 'center',
  alignSelf: 'flex-start',
  [mediaQuery.small]: {
    alignSelf: 'stretch',
  },
  ':active': {
    color: 'white',
    textDecoration: 'none',
  },
  ':visited': {
    color: 'white',
    textDecoration: 'none',
  },
  ':hover': {
    color: 'white',
    textDecoration: 'none',
  },
})

export default class BookBanner extends React.Component {
  render() {
    const linkImage = (
      <a href={BOOK_URL}>
        <Image
          src={bookImage2x}
          srcSet={`${bookImage} 1x, ${bookImage2x} 2x`}
          height={250}
        />
      </a>
    )

    return (
      <Container>
        <Content>
          <Details>
            <Heading3>Want to learn React Native in-depth?</Heading3>
            <Paragraph>
              If you like React Native Express, you'll love my new book,{' '}
              <a href={BOOK_URL}>
                Fullstack React Native: The complete guide to React Native
              </a>
              ! Throughout the book, we'll build 7 full apps, covering complex
              topics like navigation, gestures, and native modules. We don't
              assume any knowledge of React or newer JavaScript language
              features, so you can dive right in regardless of your experience
              level. The book comes in <code>PDF</code>, <code>EPUB</code> and{' '}
              <code>MOBI</code> formats.
            </Paragraph>
            <ShowAt style={{ alignSelf: 'center' }} breakpoint="small">
              {linkImage}
            </ShowAt>
            <Button href={BOOK_URL}>Check it out!</Button>
          </Details>
          <HideAt style={{ alignSelf: 'flex-start' }} breakpoint="small">
            {linkImage}
          </HideAt>
        </Content>
      </Container>
    )
  }
}
