import React from 'react'
import Base from './Base'
import { baseColors } from './BaseStyle'

const Link = (props) => (
  <Base {...props}
    className='card'
    propertyType='a'
    baseStyle={{
      color: baseColors.blue,
      textDecoration: 'none'
    }} />
)

export default Link
