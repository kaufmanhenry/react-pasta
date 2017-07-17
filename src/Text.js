import React from 'react'
import Base from './Base'

const Card = (props) => (
  <Base {...props}
    className='card'
    propertyType='p'
    baseStyle={{
      lineHeight: 1.6
    }} />
)

export default Card
