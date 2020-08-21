import React from 'react'
import { Paragraph, Anchor } from 'react-guidebook'

export default function Author({ name, url }) {
  return (
    <>
      <Paragraph style={{ marginTop: '0', marginBottom: '24px' }}>
        By <Anchor href={url}>{name}</Anchor>
      </Paragraph>
    </>
  )
}
