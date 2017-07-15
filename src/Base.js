import React from 'react'
import PropTypes from 'prop-types'
import BaseStyle from './BaseStyle'

const Base = (props) => {
  const {
    propertyType,
    baseStyle,
    children
  } = props

  const style = {
    ...BaseStyle,
    ...baseStyle
  }

  const Component = propertyType || 'div'

  return <Component style={style}>{children}</Component>
}

Base.propTypes = {
  propertyType: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  baseStyle: PropTypes.object
}

Base.defaultProps = {
  propertyType: 'div',
  baseStyle: {}
}

export default Base
