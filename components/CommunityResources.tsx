import React from 'react'
import {
  Anchor,
  FlexSpacer,
  Heading3,
  List as ListItem,
  mediaQuery,
  PageLayout,
  Paragraph,
  UnorderedList,
} from 'react-guidebook'
import styled from 'styled-components'

const RN_NEWSLETTER_URL = 'https://reactnative.cc'
const RN_RADIO_URL = 'https://reactnativeradio.com'
const CHAIN_REACT_URL = 'https://cr.infinite.red'
const INFINITE_RED_URL = 'https://t.co/XsBweZ7ulU?amp=1'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  borderBottom: '1px solid rgba(220,220,220,0.5)',
  backgroundColor: 'rgb(250,250,250)',
})

const SectionContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  [mediaQuery.small]: {
    flexDirection: 'column',
  },
})

const Section = styled.div({
  display: 'flex',
  flex: '1',
  flexDirection: 'column',
  alignItems: 'flex-start',
})

const StyledHeading = styled(Heading3)({
  marginTop: 0,
})

export default function CommunityResources() {
  return (
    <Container>
      <PageLayout>
        <SectionContainer>
          <Section>
            <StyledHeading>Community Resources</StyledHeading>
            <UnorderedList>
              <ListItem>
                <Anchor href={RN_NEWSLETTER_URL}>
                  React Native Newsletter
                </Anchor>
              </ListItem>
              <ListItem>
                <Anchor href={RN_RADIO_URL}>React Native Radio Podcast</Anchor>
              </ListItem>
              <ListItem>
                <Anchor href={CHAIN_REACT_URL}>Chain React Conference</Anchor>
              </ListItem>
            </UnorderedList>
          </Section>
          <FlexSpacer size={20} />
          <Section>
            <StyledHeading>Looking for more help?</StyledHeading>
            <Paragraph>
              <Anchor href={INFINITE_RED_URL}>Infinite Red</Anchor> sponsors
              React Native Express and is the premier React Native agency.
              They're also the team behind the React Native newsletter, podcast,
              and conference listed here. Get in touch at{' '}
              <Anchor href={INFINITE_RED_URL}>infinite.red/react-native</Anchor>{' '}
              for a proposal on your next project!
            </Paragraph>
          </Section>
        </SectionContainer>
      </PageLayout>
    </Container>
  )
}
