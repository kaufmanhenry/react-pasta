import test from 'ava'
import React from 'react'
import ReactTestRenderer from 'react-test-renderer'

import { baseColors } from '../src/BaseStyle'

import Button from '../src/Button'

test('basic button', (t) => {
  const basicButton = ReactTestRenderer.create(<Button>Basic Button</Button>)
  const json = basicButton.toJSON()
  t.is(json.type, 'button')
  t.is(json.props.style.backgroundColor, baseColors.midgray)
  t.is(json.children.indexOf('Basic Button'), 0)
})

test('focus button', (t) => {
  const focusButton = ReactTestRenderer.create(<Button buttonType='blue' focus>Focus Button</Button>)
  const json = focusButton.toJSON()
  t.is(json.type, 'button')
  t.is(json.props.style.border, `solid 1px ${baseColors.darkblue}`)
  t.is(json.children.indexOf('Focus Button'), 0)
})

test('large button', (t) => {
  const largeButton = ReactTestRenderer.create(<Button large>Large Button</Button>)
  const json = largeButton.toJSON()
  t.is(json.type, 'button')
  t.is(json.props.style.padding, `16px 20px`)
  t.is(json.children.indexOf('Large Button'), 0)
})
