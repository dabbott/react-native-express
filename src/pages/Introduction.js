import React, { Component } from 'react'
import { Link } from 'react-router'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import Page from './Page'
import styles from '../styles'
import { WebPlayer, GithubCorner, PageHeader } from '../components'

const code = `/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Project extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Project', () => Project);`

const buttonStyle = {
  padding: '10px 15px',
  color: 'white',
  borderRadius: 3,
  backgroundColor: 'rgb(54,203,170)',
  textAlign: 'center',
  display: 'block',
  marginTop: 40,
}

export default class extends Component {
  render() {
    const content = markdown(markdownOptions)`
React Native is a framework for building cross-platform apps.

Building with React Native is extremely efficient and highly addictive - but getting started can be a little tricky. You should use this guide as a companion to the official Facebook documentation for [getting started](https://facebook.github.io/react-native/docs/getting-started.html). The Facebook guide assumes some existing knowledge about React development for the web. If you run into topics that aren't covered thoroughly, e.g. how Babel works, play with the examples in this guide to quickly get up to speed. This guide also covers related topics, such as Redux, which are beyond the scope of the React Native docs.

I hope you enjoy learning React Native. Reach out to me, [@devinaabbott](https://twitter.com/devinaabbott), with comments or questions you have along the way. Some pages are written by other authors (listed at top of each page), so feel free to contact them too.

# Hello World

When you create a new React Native app, it will look like this:

<WebPlayer code={code} />

You may notice the code doesn't look like the JavaScript you write currently. This is because it uses new language features (ES6 imports, classes, block-scoped variable declarations) and the JSX language extension. In the following sections, I'll give a brief background on each of these topics. If you're already familiar with a topic, feel free to skip ahead. Most of the sections in this guide are independent from one another.

But first, let's set up our React Native development environment!
`

    return (
      <Page
        footer={this.props.footer}
        title={'React Native Express'}
        subtitle={'Learn React Native, the cross-platform app framework'}
        logo={'//cdn.rawgit.com/dabbott/react-native-express/master/static/logo'}
        logoWidth={256}
        logoHeight={296}
        bannerHeight={560}
        shouldUpdatePageTitle={false}
      >
        <GithubCorner />
        <PageHeader
          title={'Learning React Native'}
          author={'@devinaabbott'}
          authorURL={'https://twitter.com/devinaabbott'}
        />
        {content}
        <Link to={'environment'} style={buttonStyle}>
          Let's get started!
        </Link>
      </Page>
    )
  }
}
