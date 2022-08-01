import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../../../components/Dashboard/Sidebar'
import Wall from '../../../components/Dashboard/Wall'

function CreatorHome() {
  return (
    <Flex>
    <Sidebar />

    <Box width="100vw" border="red 2px solid" >
      <Wall />
    </Box>
    </Flex>
  )
}

export default CreatorHome