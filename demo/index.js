import React from 'react'
import { render } from 'react-dom'
import Container from '../src/Container'
import Heading from '../src/Heading'

render(<Container>
  <Heading level={1}>react-pasta</Heading>
</Container>, document.getElementById('root'))
