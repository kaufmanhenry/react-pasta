import React from 'react'
import Container from '../src/Container'
import Heading from '../src/Heading'
import Card from '../src/Card'
import Text from '../src/Text'
import Link from '../src/Link'

const App = () => {
  const basic = {
    padding: '3rem 0'
  }

  return (
    <Container style={basic}>
      <Heading level={1}>
        react-pasta
      </Heading>
      <Card>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum orci nec dui gravida, at viverra lorem fringilla. Nam ac faucibus sapien, ullamcorper
          fermentum arcu. Integer placerat dui vel lacinia vestibulum.
        </Text>
        <Link href='#'>Hi</Link>
      </Card>
    </Container>
  )
}

export default App
