import React from 'react'
import PropTypes from 'prop-types'
import { fontFamily } from './BaseStyle'

const Base = (props) => {
  const {
    propertyType,
    baseStyle,
    children,
    href,
    onClick
  } = props

  const style = {
    fontFamily,
    ...baseStyle
  }

  const Component = propertyType || 'div'

  return <Component href={href} style={style} onClick={onClick}>{children}</Component>
}

Base.propTypes = {
  propertyType: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  baseStyle: PropTypes.object,
  href: PropTypes.string,
  onClick: PropTypes.func
}

Base.defaultProps = {
  propertyType: 'div',
  baseStyle: {}
}

export default Base
