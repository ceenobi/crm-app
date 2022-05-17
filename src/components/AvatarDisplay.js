import React from 'react'
import { Flex, Box, Image } from '@chakra-ui/react'

const blankAvatar = 'https://res.cloudinary.com/ceenobi/image/upload/v1652448096/icons/user_v0yarf.svg'

export default function AvatarDisplay({ticket}) {
  return (
    <Flex justify='center' className='link'>
      <Box boxSize='50px' borderRadius='full' overflow='hidden'>
        <Image
          src={ticket.avatar ? ticket.avatar : blankAvatar}
          alt={'photo of' + ticket.owner}
          boxSize='100%'
        />
      </Box>
    </Flex>
  )
}
