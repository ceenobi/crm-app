import React from 'react'
import { Flex, Icon } from '@chakra-ui/react'
import { AiFillStar } from 'react-icons/ai'

export default function PriorityDisplay({ priority }) {

  return (
    <Flex  justify='center' className='link'>
      <Flex>
        {Array(5)
          .fill('')
          .map((_, i) => (
            <Icon
              as={AiFillStar} w={6} h={6} 
              key={i}
              color={i < priority ? 'teal.500' : 'gray.700'}
            />
          ))}
      </Flex>
    </Flex>
  )
}
