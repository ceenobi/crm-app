import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import {
  Input,
} from '@chakra-ui/react'

export const FormInput = forwardRef(
  ({ type, name, required, label, placeholder, ...props }, ref) => {
    return (
      <>
        {label ? (
          <label htmlFor={name}>
            {label} <span> {required && '*'}</span>
          </label>
        ) : null}
        <Input
          {...props}
          name={name}
          id={name}
          placeholder={placeholder}
          type={type}
          ref={ref}
          bg='gray.300'
          mb={2}
        />
      </>
    )
  }
)

FormInput.propTypes = {
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
    'number',
    'radio',
    'url',
    'range'
  ]),
  register: PropTypes.func,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

FormInput.defaultProps = {
  type: 'text',
  name: 'text',
  label: '',
  placeholder: '',
}
