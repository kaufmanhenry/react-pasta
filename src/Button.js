import React from 'react'
import PropTypes from 'prop-types'
import Base from './Base'
import { baseColors, typeScale } from './BaseStyle'

const Button = (props) => (
  <Base {...props}
    className='btn'
    propertyType='button'
    baseStyle={{
      backgroundColor: baseColors[props.buttonType],
      color: baseColors.white,
      border: `solid 1px ${baseColors[props.focus ? 'dark' + props.buttonType : props.buttonType]}`,
      fontSize: typeScale[5],
      fontWeight: 500,
      borderRadius: 4,
      padding: props.large ? '16px 20px' : '12px 16px',
      cursor: 'pointer'
    }} />
)

Button.propTypes = {
  buttonType: PropTypes.string,
  large: PropTypes.bool,
  focus: PropTypes.bool
}

Button.defaultProps = {
  buttonType: 'blue',
  large: false,
  focus: false
}

export default Button
