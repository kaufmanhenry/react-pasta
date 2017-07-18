import React from 'react'
import PropTypes from 'prop-types'
import Base from './Base'
import { typeScale } from './BaseStyle'

const Heading = (props) => {
  const { level } = props

  return (
    <Base
      {...props}
      className={`Heading${level}`}
      propertyType={`h${level}`}
      baseStyle={{
        fontSize: typeScale[level - 1]
      }}
    />)
}

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired
}

export default Heading
