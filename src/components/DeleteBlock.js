import React from 'react'
import {Flex, Icon} from '@chakra-ui/react'
import {RiDeleteBin5Fill} from 'react-icons/ri'
import axios from 'axios'

export default function DeleteBlock({documentId}) {
  
  const deleteHandler = async() => {
   const response = await axios.delete(`http://localhost:8000/tickets/${documentId}`)
   const success = response.status === 200
   if (success) window.location.reload()
   console.log('deleted');
   }
   
  return (
    <Flex justify='center' align='center' bg='pallete.lightTeal' m='2px' p='30px'>
      <Icon as={RiDeleteBin5Fill} w={6} h={6} onClick={deleteHandler} cursor='pointer'/>
    </Flex>
  )
}
