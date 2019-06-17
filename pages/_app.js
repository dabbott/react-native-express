import '../styles/reset.css'
import '../styles/main.css'

import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import ChapterPage from '../components/ChapterPage'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head />
        <ChapterPage>
          <Component {...pageProps} />
        </ChapterPage>
      </Container>
    )
  }
}
