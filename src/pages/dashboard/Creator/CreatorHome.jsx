import { Box, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Patrons from '../../../components/Dashboard/Patrons'
import Sidebar from '../../../components/Dashboard/Sidebar'
import MyPage from '../../../components/Dashboard/MyPage'
import { SidebarContext } from '../../../context/SidebarContext'

function CreatorHome() {
  const [sidebarButtonValue] = useContext(SidebarContext)
  return (
    <Flex>
    <Sidebar />

    <Box width="100vw"  >
      {
       sidebarButtonValue==="My page"?
       <MyPage /> :
       sidebarButtonValue ==="Patrons"?
       <Patrons /> :
       <></>


      }


    </Box>
    </Flex>
  )
}

export default CreatorHome