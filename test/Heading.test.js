import test from 'ava'
import React from 'react'
import ReactTestRenderer from 'react-test-renderer'

import Heading from '../src/Heading'

test('heading level 1', (t) => {
  const h1 = ReactTestRenderer.create(<Heading level={1}>Hello 1</Heading>)
  const json = h1.toJSON()
  t.is(json.type, 'h1')
  t.is(json.children.indexOf('Hello 1'), 0)
})

test('heading level 2', (t) => {
  const h2 = ReactTestRenderer.create(<Heading level={2}>Hello 2</Heading>)
  const json = h2.toJSON()
  t.is(json.type, 'h2')
  t.is(json.children.indexOf('Hello 2'), 0)
})

test('heading level 3', (t) => {
  const h3 = ReactTestRenderer.create(<Heading level={3}>Hello 3</Heading>)
  const json = h3.toJSON()
  t.is(json.type, 'h3')
  t.is(json.children.indexOf('Hello 3'), 0)
})

test('heading level 4', (t) => {
  const h4 = ReactTestRenderer.create(<Heading level={4}>Hello 4</Heading>)
  const json = h4.toJSON()
  t.is(json.type, 'h4')
  t.is(json.children.indexOf('Hello 4'), 0)
})

test('heading level 5', (t) => {
  const h5 = ReactTestRenderer.create(<Heading level={5}>Hello 5</Heading>)
  const json = h5.toJSON()
  t.is(json.type, 'h5')
  t.is(json.children.indexOf('Hello 5'), 0)
})

test('heading level 6', (t) => {
  const h6 = ReactTestRenderer.create(<Heading level={6}>Hello 6</Heading>)
  const json = h6.toJSON()
  t.is(json.type, 'h6')
  t.is(json.children.indexOf('Hello 6'), 0)
})
