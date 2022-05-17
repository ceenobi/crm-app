import React from 'react'
import { Flex } from '@chakra-ui/react'

export default function StatusDisplay({ status }) {
  const getColor = (status) => {
    let color
    switch (status) {
      case 'done':
        color = 'pallete.pink'
        break
      case 'working on it':
        color = 'pallete.lightBlue'
        break
      case 'stuck':
        color = 'pallete.palePink'
        break
      default:
        color = 'pallete.lightTeal'
    }
    return color
  }

  return (
    <Flex justify='center' bgColor={getColor(status)} className='link'>
      {status}
    </Flex>
  )
}
