import React from 'react'
import PropTypes from 'prop-types'
import Base from './Base'

const Card = (props) => (
  <Base {...props}
    className='card'
    propertyType='p'
    baseStyle={{
      lineHeight: 1.6,
      maxWidth: props.measured ? '40rem' : 'auto'
    }} />
)

Card.propTypes = {
  measured: PropTypes.bool
}

export default Card
