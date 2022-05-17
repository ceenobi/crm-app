import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import {
  Input,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
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
          //   _placeholder={{ color: 'paint.100' }}
          //   color='paint.100'
          type={type}
          ref={ref}
          //focusBorderColor='paint.100'
          bg='gray.300'
          mb={2}
        />
      </>
    )
  }
)

export const RangeInput = forwardRef(
  ({ name, type, required, label, placeholder, ...props }, ref) => {
    return (
      <>
        {label ? (
          <label htmlFor={name}>
            {label} <span> {required && '*'}</span>
          </label>
        ) : null}
        <RangeSlider
          aria-label={['min', 'max']}
          colorScheme='pink'
          defaultValue={[0, 100]}
          {...props}
          name={name}
          id={name}
          type={type}
          ref={ref}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
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
