import test from 'ava'
import React from 'react'
import ReactTestRenderer from 'react-test-renderer'

import Link from '../src/Link'

test('basic link', (t) => {
  const basicLink = ReactTestRenderer.create(<Link href='http://google.com'>Basic Link</Link>)
  const json = basicLink.toJSON()
  t.is(json.type, 'a')
  t.is(json.children.indexOf('Basic Link'), 0)
  t.is(json.props.href, 'http://google.com')
})
