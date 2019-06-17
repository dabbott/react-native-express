import Router, { withRouter } from 'next/router'
import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { chapters } from '../utils/Sections'

const SidebarTitle = styled.div(({ centered }) => ({
  textAlign: centered ? 'center' : 'left',
  margin: '0',
  borderBottom: '1px solid rgba(220,220,220,0.5)',
}))

const SidebarTitleText = styled.a(({ centered }) => ({
  paddingLeft: centered ? '0' : '35px',
  flex: '0 0 auto',
  fontSize: '18px',
  fontWeight: '300',
  lineHeight: '60px',
  color: '#263053',
  cursor: 'pointer',
  userSelect: 'none',
}))

const SidebarRowsContainer = styled.div(({ centered }) => ({
  overflowY: 'auto',
  paddingTop: '30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: centered ? 'center' : 'stretch',
  backgroundColor: 'white',
  outline: 'none',
}))

const SidebarRow = styled.div(({ small, centered }) => ({
  flex: '0 0 40px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: centered ? '0' : '35px',
  fontSize: small ? '13px' : '16px',
  fontWeight: '300',
  color: '#263053',
  margin: '0',
}))

const Numeral = styled.span(({ centered }) => ({
  flex: '0 0 50px',
  display: centered ? 'none' : 'initial',
}))

const DotContainer = styled.div({
  flex: '0 0 60px',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
})

const Dot = styled.div({
  flex: '0 0 auto',
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: '#DEDFE8',
})

const SidebarLinkText = styled.a(({ isActive }) =>
  Object.assign(
    { color: '#263053', cursor: 'pointer', userSelect: 'none' },
    isActive && {
      textDecoration: 'underline',
      fontWeight: '500',
    }
  )
)

const ExpandButton = styled.div(({ active }) => ({
  fontSize: '14px',
  fontWeight: 'bold',
  color: 'rgba(38,48,83,0.35)',
  padding: '1px 4px',
  backgroundColor: '#DEDFE8',
  textDecoration: 'none',
  borderRadius: '10px',
  alignSelf: 'center',
  lineHeight: '0px',
  height: '10px',
  marginLeft: '10px',
  cursor: 'pointer',
  opacity: active ? '0.5' : '1',
}))

class Sidebar extends Component {
  constructor(props) {
    super()

    this.state = this.buildState(props)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.currentSection !== this.props.currentSection) {
      this.setState(this.buildState(nextProps))
    }
  }

  buildState(props) {
    const { currentSection } = props
    const expanded = {}

    if (currentSection) {
      const { depth, slug, parent } = currentSection

      if (depth === 1) {
        expanded[slug] = true
      } else if (depth === 2) {
        expanded[parent] = true
      }
    }

    return { expanded }
  }

  onToggleSection = slug =>
    this.setState({
      expanded: {
        ...this.state.expanded,
        [slug]: !this.state.expanded[slug],
      },
    })

  renderRow = (
    { title, slug, depth, major, minor, patch, parent },
    i,
    list
  ) => {
    const { router, centered } = this.props
    const { expanded } = this.state

    if (depth === 2 && !expanded[parent]) {
      return null
    }

    let numeral = `${major}`

    if (depth >= 1) {
      numeral += `.${minor}`
    }

    if (depth >= 2) {
      numeral += `.${patch}`
    }

    const majorOrMinor = depth === 0 || depth === 1
    const hasChildSection =
      depth === 1 && list[i + 1] && list[i + 1].depth === 2

    return (
      <SidebarRow
        small={!majorOrMinor}
        centered={centered}
        key={`${major}.${minor}.${patch}`}
      >
        <Numeral centered={centered}>{majorOrMinor ? numeral : ''}</Numeral>

        <Link href={slug}>
          <SidebarLinkText isActive={router.asPath === `/${slug}`}>
            {title}
          </SidebarLinkText>
        </Link>

        {hasChildSection && (
          <ExpandButton
            active={expanded[slug]}
            onClick={this.onToggleSection.bind(this, slug)}
          >
            ...
          </ExpandButton>
        )}
      </SidebarRow>
    )
  }

  render() {
    const { centered } = this.props

    return (
      <>
        <SidebarTitle centered={centered}>
          <Link href={'/'}>
            <SidebarTitleText centered={centered}>
              React Native Express
            </SidebarTitleText>
          </Link>
        </SidebarTitle>
        <SidebarRowsContainer centered={centered} tabIndex="-1">
          {chapters.map(group => {
            return [
              group.map(this.renderRow),
              <DotContainer key={'dot-container'}>
                <Dot />
              </DotContainer>,
            ]
          })}
        </SidebarRowsContainer>
      </>
    )
  }
}

export default withRouter(Sidebar)
