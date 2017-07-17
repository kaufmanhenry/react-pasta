import React from 'react'
import PropTypes from 'prop-types'
import BaseStyle from './BaseStyle'

const Base = (props) => {
  const {
    propertyType,
    baseStyle,
    children,
    href
  } = props

  const style = {
    ...BaseStyle,
    ...baseStyle
  }

  const Component = propertyType || 'div'

  return <Component href={href} style={style}>{children}</Component>
}

Base.propTypes = {
  propertyType: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  baseStyle: PropTypes.object,
  href: PropTypes.string
}

Base.defaultProps = {
  propertyType: 'div',
  baseStyle: {}
}

export default Base
