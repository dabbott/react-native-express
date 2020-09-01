import React, { memo, useState } from 'react'
import { Button, Text } from 'react-native'

function Label({ title }) {
  console.log(`Rendered: ${title}`)
  return <Text>{title}</Text>
}

const LabelMemo = memo(Label)

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button
        title={`Pressed ${count} times`}
        onPress={() => {
          setCount(count + 1)
        }}
      />
      <LabelMemo title="Label with memo" />
      <Label title="Label" />
    </>
  )
}
