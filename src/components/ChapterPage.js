import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import mediaQuery from '../utils/mediaQuery'

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

const Footer = styled.div({
  marginTop: 20,
  padding: '60px',
  [mediaQuery.small]: {
    padding: '20px',
  },
  backgroundColor: 'rgb(250,250,250)',
})

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

  render() {
    const { children } = this.props
    const { showSidebar, showMenu } = this.state

    const slug = this.props['*']

    const isIntroduction = slug === ''
    const section = getSection(slug)

    if (!section) return `Could not find page: ${slug}`

    const { author = {} } = section

    const title = section.fullTitle || section.title
    const nextSection = getNextSection(slug)
    const previousSection = getPreviousSection(slug)

    const footer = (
      <>
        <NavigatorButtonContainer>
          <NavigatorButton
            nextSection={nextSection}
            previousSection={previousSection}
          />
        </NavigatorButtonContainer>
        {!isIntroduction && <BookBanner />}
        <Footer>
          {/* <Disqus title={title} identifier={slug} url={window.location.href} /> */}
        </Footer>
      </>
    )

    const contents = (
      <>
        <PageHeader
          title={title}
          author={author.name || '@dvnabbott'}
          authorURL={author.url || 'https://twitter.com/dvnabbott'}
        />
        {children}
      </>
    )

    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              // title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
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
                <Content>
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
        )}
      />
    )
  }
}

ChapterPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ChapterPage
