import Router, { withRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import mediaQuery from '../utils/mediaQuery'

import MarkdownProvider from './MarkdownProvider'
import Page from './Page'
import HideAt from './HideAt'
import ShowAt from './ShowAt'
import Sidebar from './Sidebar'
import PageHeader from './PageHeader'
import NavigatorButton from './NavigatorButton'
import HamburgerButton from './HamburgerButton'
import Disqus from './Disqus'
import BookBanner from './BookBanner'
import {
  getSection,
  getNextSection,
  getPreviousSection,
} from '../utils/Sections'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  minWidth: '0',
  minHeight: '0',
})

const Inner = styled.div({
  flex: '1 1 auto',
  flexDirection: 'row',
  alignItems: 'stretch',
  display: 'flex',
  minWidth: '0',
  minHeight: '0',
})

const Content = styled.div({
  flex: '1 1 auto',
  display: 'flex',
  position: 'relative',
  minWidth: '0',
  minHeight: '0',
  overflowY: 'auto',
  // overflowY: 'scroll',
})

const SidebarContainer = styled.div({
  flex: '0 0 280px',
  borderRight: '1px solid rgba(220,220,220,0.5)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  minWidth: '0',
  minHeight: '0',
  outline: 'none',
})

const MenuContainer = styled.div({
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  zIndex: '10000',
  backgroundColor: 'white',
  overflowY: 'auto',
})

const NavigatorButtonContainer = styled.div({
  padding: '0 60px 40px 60px',
  [mediaQuery.small]: {
    padding: '10px 0',
  },
})

const MenuButtonContainer = styled.div({
  position: 'absolute',
  top: '10px',
  left: '10px',
  zIndex: 12000,
})

const Footer = styled.div({})

class ChapterPage extends React.Component {
  state = {
    showSidebar: true,
    showMenu: false,
  }

  toggleSidebar = () => {
    const { showSidebar } = this.state

    this.setState({ showSidebar: !showSidebar })
  }

  toggleMenu = () => {
    const { showMenu } = this.state

    this.setState({ showMenu: !showMenu })
  }

  // Hide the menu on mobile after clicking a link
  componentWillReceiveProps(nextProps) {
    const { showMenu } = this.state

    if (showMenu && nextProps.router.pathname !== this.props.router.pathname) {
      this.setState({ showMenu: false })
    }
  }

  render() {
    const { children } = this.props
    const { showSidebar, showMenu } = this.state

    const slug = this.props.router.pathname.slice(1)

    const isIntroduction = slug === ''
    const section = getSection(slug)

    if (!section) return `Could not find page: ${slug}`

    const { author = {} } = section

    const title = section.fullTitle || section.title
    const nextSection = getNextSection(slug)
    const previousSection = getPreviousSection(slug)

    const footer = (
      <Footer>
        <NavigatorButtonContainer>
          <NavigatorButton
            nextSection={nextSection}
            previousSection={previousSection}
          />
        </NavigatorButtonContainer>
        {!isIntroduction && <BookBanner />}
        {!isIntroduction && <Disqus title={title} identifier={slug} />}
      </Footer>
    )

    const contents = (
      <>
        <PageHeader
          title={title}
          author={author.name || '@dvnabbott'}
          authorURL={author.url || 'https://twitter.com/dvnabbott'}
        />
        <MarkdownProvider>{children}</MarkdownProvider>
      </>
    )

    return (
      <>
        <Helmet title={title}>
          <html lang="en" />
        </Helmet>
        <Container>
          <Inner>
            {showSidebar && (
              <HideAt
                style={{
                  flex: '0 0 280px',
                }}
                breakpoint="small"
                flex
              >
                <SidebarContainer>
                  <Sidebar currentSection={section} />
                </SidebarContainer>
              </HideAt>
            )}
            <Content key={slug}>
              <MenuButtonContainer>
                <HideAt breakpoint="small">
                  <HamburgerButton onPress={this.toggleSidebar} />
                </HideAt>
                <ShowAt breakpoint="small">
                  <HamburgerButton onPress={this.toggleMenu} />
                </ShowAt>
              </MenuButtonContainer>
              {isIntroduction ? (
                <Page
                  title={'React Native Express'}
                  subtitle={
                    'Learn React Native, the cross-platform app framework'
                  }
                  footer={footer}
                  bannerHeight={560}
                  showLogo
                >
                  {contents}
                </Page>
              ) : (
                <Page title={title} footer={footer}>
                  {contents}
                </Page>
              )}
            </Content>
          </Inner>
          {showMenu && (
            <ShowAt breakpoint="small">
              <MenuContainer tabIndex="-1">
                <Sidebar currentSection={section} centered />
              </MenuContainer>
            </ShowAt>
          )}
        </Container>
      </>
    )
  }
}

ChapterPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withRouter(ChapterPage)
