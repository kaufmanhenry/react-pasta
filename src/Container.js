import React from 'react'
import Base from './Base'

const Container = props => (
  <Base
    {...props}
    className='Container'
    baseStyle={{
      maxWidth: '1200px',
      width: '90%',
      margin: 'auto'
    }}
  />
)

export default Container
