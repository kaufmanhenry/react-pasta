import React from 'react'
import Container from '../src/Container'
import Heading from '../src/Heading'

const App = () => {
  const basic = {
    padding: '3rem 0'
  }

  return (
    <Container style={basic}>
      <Heading level={1}>react-pasta</Heading>
    </Container>
  )
}

export default App
