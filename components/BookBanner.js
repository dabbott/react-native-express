import React from 'react'
import styled from 'styled-components'
import {
  Anchor,
  Paragraph,
  mediaQuery,
  Button,
  InlineCode,
  Spacer,
} from 'react-guidebook'

import bookImage from '../images/fsrn-book.png'
import bookImage2x from '../images/fsrn-book@2x.png'
import textStyles from '../styles/textStyles'

const MobileOnly = styled.div({
  display: 'none',
  [mediaQuery.small]: {
    display: 'flex',
  },
})

const DesktopOnly = styled.div({
  display: 'flex',
  [mediaQuery.small]: {
    display: 'none',
  },
})

const BOOK_URL = 'https://gumroad.com/a/567063667'

const Container = styled.div({
  display: 'column',
  flexDirection: 'row',
  alignItems: 'stretch',
  borderTop: '1px solid rgba(220,220,220,0.5)',
  borderBottom: '1px solid rgba(220,220,220,0.5)',
  paddingTop: '60px',
  paddingLeft: '60px',
  paddingRight: '60px',
  paddingBottom: '60px',
  [mediaQuery.small]: {
    padding: '20px',
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

const ButtonContainer = styled.div({
  display: 'flex',
  [mediaQuery.small]: {
    alignSelf: 'stretch',
    alignItems: 'stretch',
  },
})

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

const Heading = styled.h2({
  ...textStyles.heading1,
  marginBottom: '15px',
})

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
  <Container>
    <Content>
      <Details>
        <Heading>Want to learn React Native in-depth?</Heading>
        <Paragraph>
          If you like React Native Express, you'll love my new book,{' '}
          <Anchor href={BOOK_URL}>
            Fullstack React Native: The complete guide to React Native
          </Anchor>
          ! Throughout the book, we'll build 7 full apps, covering complex
          topics like navigation, gestures, and native modules. We don't assume
          any knowledge of React or newer JavaScript language features, so you
          can dive right in regardless of your experience level. The book comes
          in <InlineCode>PDF</InlineCode>, <InlineCode>EPUB</InlineCode> and{' '}
          <InlineCode>MOBI</InlineCode> formats.
        </Paragraph>
        <MobileOnly style={{ alignSelf: 'center' }}>
          <BookImage />
        </MobileOnly>
        <Spacer size={20} />
        <ButtonContainer>
          <Button href={BOOK_URL} title="Check it out!" responsive={true} />
        </ButtonContainer>
      </Details>
      <DesktopOnly style={{ alignSelf: 'flex-start' }}>
        <BookImage />
      </DesktopOnly>
    </Content>
  </Container>
)
