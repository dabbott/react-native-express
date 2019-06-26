import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import mediaQuery from '../utils/mediaQuery'

const Container = styled.div({
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'flex',
  [mediaQuery.small]: {
    flexDirection: 'column-reverse',
    alignItems: 'stretch',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
})

const Item = styled.div({
  flex: '0 0 auto',
  padding: '10px 15px',
  backgroundColor: 'rgb(210,210,210)',
  color: 'white',
  borderRadius: '3px',
  textAlign: 'center',
  marginBottom: '0',
  [mediaQuery.small]: {
    marginBottom: '15px',
  },
})

// const NextItem = Item.extend({
//   backgroundColor: 'rgb(54,203,170)',
// })

const NextItem = styled.div({
  flex: '0 0 auto',
  padding: '10px 15px',
  backgroundColor: 'rgb(54,203,170)',
  color: 'white',
  borderRadius: '3px',
  textAlign: 'center',
  marginBottom: '0',
  cursor: 'pointer',
  [mediaQuery.small]: {
    marginBottom: '15px',
  },
})

// const styles = {
//   link: {
//     textDecoration: 'none',
//   },
// }

export default class extends React.Component {
  render() {
    const { nextSection, previousSection } = this.props
    return (
      <Container>
        {previousSection ? (
          <Link href={previousSection.slug}>
            <Item>Previous - {previousSection.title}</Item>
          </Link>
        ) : (
          <div />
        )}
        {nextSection && (
          <Link href={nextSection.slug}>
            <NextItem>Next - {nextSection.title}</NextItem>
          </Link>
        )}
      </Container>
    )
  }
}
