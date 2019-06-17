import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import SectionHeader from './SectionHeader'
import Paragraph from './Paragraph'

// import { Link, SectionHeader } from '../components'

export default function MarkdownProvider({ children }) {
  return (
    <MDXProvider
      components={{
        p: Paragraph,
        h1: SectionHeader,
        h2: props => <div {...props} style={styles.h2} />,
        strong: props => <strong {...props} style={styles.strong} />,
        em: props => <em {...props} style={styles.em} />,
        table: props => <table {...props} className={'table'} />,
        // a: Link,
        img: props => <img alt="" style={styles.img} {...props} />,
        pre: props => <pre {...props} style={styles.pre} />,
        blockquote: props => (
          <blockquote {...props} style={styles.blockquote} />
        ),
      }}
    >
      {children}
    </MDXProvider>
  )
}

const styles = {
  // h3: {
  //   fontSize: '16px',
  //   fontWeight: '500',
  //   marginTop: '40px',
  //   marginBottom: '15px',
  // },
  h2: {
    fontSize: '14px',
    fontWeight: '500',
    marginTop: '35px',
    marginBottom: '15px',
  },
  strong: {
    fontWeight: 'bold',
  },
  em: {
    fontStyle: 'italic',
  },
  blockquote: {
    borderLeft: '4px solid #DEDFE8',
    paddingLeft: '10px',
  },
  img: {
    maxWidth: '100%',
  },
  pre: {
    marginBottom: '15px',
  },
}
