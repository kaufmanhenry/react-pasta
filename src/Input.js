import React from 'react'
import Base from './Base'
import { baseColors } from './BaseStyle'

const Input = (props) => (
  <Base {...props}
    className='form-input'
    propertyType='input'
    baseStyle={{
      color: baseColors.black,
      padding: '8px 12px',
      fontSize: 16,
      border: `solid 1px ${baseColors.gray}`,
      borderRadius: 4
    }} />
)

export default Input
