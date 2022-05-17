import React from 'react'
import {Box, Progress} from '@chakra-ui/react'

export default function ProgressDisplay({progress}) {
  return (
    <Box className='link' >
      <Progress value={progress} mt={4}/>
    </Box>
  )
}
