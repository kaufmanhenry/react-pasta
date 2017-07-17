import React from 'react'
import Base from './Base'

const Card = (props) => (
  <Base {...props}
    className='card'
    baseStyle={{
      lineHeight: 1.6
    }} />
)

export default Card
