import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Patrons from '../../../components/Dashboard/Patrons'
import Sidebar from '../../../components/Dashboard/Sidebar'
import Wall from '../../../components/Dashboard/Wall'

function CreatorHome() {
  return (
    <Flex>
    <Sidebar />

    <Box width="100vw"  >

      <Wall />
      {/* <Patrons /> */}

    </Box>
    </Flex>
  )
}

export default CreatorHome