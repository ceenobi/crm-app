import React from 'react'
import {
  Flex,
  VStack,
  Icon,
  // Drawer,
  // DrawerOverlay,
  // DrawerContent,
  // DrawerHeader,
  // DrawerBody,
  // useDisclosure,
  // Spacer,
  // Link,
  Avatar,
} from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
import {TiPlus} from 'react-icons/ti'
import {AiFillBackward} from 'react-icons/ai'

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <Flex
      position='sticky'
      top={0}
      zIndex={2}
      align='center'
      justify='space-between'
      direction='column'
      h='100vh'
      p={3}
      bg='pallete.lightBlue'
    >
      <Flex justify='flex-start' align='center' direction='column'>
        <Avatar
          size='sm'
          name='Dan Abrahmov'
          src='https://res.cloudinary.com/ceenobi/image/upload/v1652448096/icons/user_v0yarf.svg'
          onClick={() => navigate('/')}
           cursor='pointer'
        />
      </Flex>
      <VStack spacing='12px'>
        <Icon
          as={TiPlus}
          onClick={() => navigate('/ticket')}
          cursor='pointer'
        />
        <Icon
          as={AiFillBackward}
          onClick={() => navigate('/')}
          cursor='pointer'
        />
      </VStack>
    </Flex>
  )
}
