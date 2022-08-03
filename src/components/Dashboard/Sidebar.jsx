import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Button,
} from '@chakra-ui/react';
import {
  FiHome,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiMail
} from 'react-icons/fi';

import { IoPeopleOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgInsights } from "react-icons/cg";
import { HiOutlineDatabase } from "react-icons/hi";
import { useContext, useState } from 'react';
import { SidebarContext } from '../../context/SidebarContext';
import CreateButton from './CreateButton';
import { FaRegEdit } from 'react-icons/fa';


const LinkItems = [
  { name: 'My page', icon: FiHome },
  { name: 'Patrons', icon: IoPeopleOutline },
  { name: 'Insights', icon:CgInsights },
  { name: 'Payouts', icon: HiOutlineDatabase },
  { name: 'Messages', icon: FiMail },
  { name: 'Notifications', icon: IoIosNotificationsOutline },
  { name: 'Settings', icon: FiSettings },
];

export default function Sidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} >
        {children}
      </Box>
    </Box>
  );
}


const SidebarContent = ({ onClose, ...rest }) => {
  const [openBox, setOpenBox] = useState(false)

  const [,ToggleSidebarButtonValue] = useContext(SidebarContext)
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">

      <Box cursor={"pointer"} _hover={{opacity:"80%"}}>
        <svg fill='#ff424d' width={"1em"} viewBox="0 0 569 546" xmlns="http://www.w3.org/2000/svg"><title>Patreon logo</title><g><circle cx="362.589996" cy="204.589996" data-fill="1" r="204.589996"></circle><rect data-fill="1" height="545.799988" width="100" x="0" y="0"></rect></g></svg>
      </Box>

        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Box>
      {LinkItems.map((link) => (
        <NavItem onClick={()=>{ToggleSidebarButtonValue(link.name)}} key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
       <Box textAlign="center">
        <Button leftIcon={<FaRegEdit fill='black' />} colorScheme="whiteAlpha" margin="0 20px" width="12rem"  color="black" fontSize={"sm"} textAlign="center" variant={"outline"} onClick={()=>setOpenBox(!openBox)}>Create</Button>
      </Box>
      <CreateButton  props={{openBox, setOpenBox}} />
      </Box>
    </Box>
  );
};


const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="2"
        m="2"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'gray.100',
         
        }}
        _selected={false}

        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};


const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 0, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};