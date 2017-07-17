import React from 'react'
import Base from './Base'

const Card = (props) => (
  <Base {...props}
    className='card'
    baseStyle={{
      border: 'solid 1px #ddd',
      borderRadius: 4,
      padding: 20
    }} />
)

export default Card
