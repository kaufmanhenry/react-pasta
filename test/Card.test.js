import test from 'ava'
import React from 'react'
import ReactTestRenderer from 'react-test-renderer'

import Card from '../src/Card'

test('basic card', (t) => {
  const basicCard = ReactTestRenderer.create(<Card>Hi Basic Card</Card>)
  const json = basicCard.toJSON()
  t.is(json.type, 'div')
  t.is(json.children.indexOf('Hi Basic Card'), 0)
})
