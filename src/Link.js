import React from 'react'
import Base from './Base'
import BaseStyle from './BaseStyle'

const Link = (props) => (
  <Base {...props}
    className='card'
    propertyType='a'
    baseStyle={{
      color: BaseStyle.baseColors.blue,
      textDecoration: 'none'
    }} />
)

export default Link
