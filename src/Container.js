import React from 'react'
import PropTypes from 'prop-types'
import Base from './Base'

const Container = props => (
  <Base
    {...props}
    className='Container'
    baseStyle={{
      ...props.style,
      maxWidth: '1200px',
      width: '90%',
      margin: 'auto'
    }}
  />
)

Container.propTypes = {
  style: PropTypes.object
}

export default Container
