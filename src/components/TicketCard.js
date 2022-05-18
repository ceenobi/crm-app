import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import AvatarDisplay from './AvatarDisplay'
import StatusDisplay from './StatusDisplay'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import DeleteBlock from './DeleteBlock'

export default function TicketCard({ color, ticket }) {
  return (
    <Flex w='100%'>
      <Box w='15px' m={2} bgColor={color}></Box>
      <Flex w='100%'>
        <Flex
          as={Link}
          to={`/ticket/${ticket.documentId}`}
          w='100%'
          flexWrap={{ base: 'wrap', lg: 'nowrap' }}
        >
          <Box
            textStyle='h2'
            textAlign='center'
            className='link'
            display='flex'
            justifyContent='center'
          >
            {ticket.title}
          </Box>

          <AvatarDisplay ticket={ticket} />
          <StatusDisplay status={ticket.status} />
          <PriorityDisplay priority={ticket.priority} />
          <ProgressDisplay progress={ticket.progress} />
        </Flex>
        <DeleteBlock documentId={ticket.documentId} />
      </Flex>
    </Flex>
  )
}
