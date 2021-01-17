import React from 'react'
import EditorConsole from '../components/EditorConsole'
import example from '../examples/files/helloWorld'

export default function Playgrounds() {
  return <EditorConsole height={'100vh'} code={example} />
}

Playgrounds.title = 'Playgrounds'
