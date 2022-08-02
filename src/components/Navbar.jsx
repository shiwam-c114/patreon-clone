import React from 'react'
// import {Link} from "react-router-dom";
// import { ReactNode } from 'react';
import {useNavigate} from "react-router-dom"
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  background,
  color,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Input,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  InputGroup,
   InputLeftElement,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon, ChevronDownIcon, ExternalLinkIcon, RepeatIcon, EditIcon, SearchIcon } from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <div style={{ position: "sticky", top: "0" }}>
        <Box bg={'white'} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton

              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Box style={{ display: "flex", alignItems: "top" }}>
                <div style={{ width: "4.22px", height: "23.02px", backgroundColor: "rgb(255, 66, 77)" }}></div>
                <div style={{ width: "17.26px", height: "17.26px", backgroundColor: "rgb(255, 66, 77)", marginLeft: "3px", borderRadius: "50%" }}></div>
              </Box>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                {/* <select name="product">
                <option value=""></option>
              </select> */}
                <Menu trigger={'hover'} >
                  <MenuButton onMouseOver={onOpen} as={Button} rightIcon={<ChevronDownIcon />} bg={'white'}>
                    Product
                  </MenuButton>
                  <MenuList>
                    <MenuItem icon={<AddIcon />} >
                      <h4>Lite</h4>
                      <div>Simple Tools To setup recurring support from your fans</div>
                    </MenuItem>
                    <MenuItem icon={<ExternalLinkIcon />}>
                      <h4>Pro</h4>
                      <div>All The tools to build and grow a thriving membership business</div>
                    </MenuItem>
                    <MenuItem icon={<RepeatIcon />} >
                      Open Closed Tab
                    </MenuItem>
                    <MenuItem icon={<EditIcon />}>
                      <h4>Premium</h4>
                      <div>For established creators and creative businesses</div>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
              <HStack>
                <Menu trigger={'hover'}>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg={'white'}>
                    For Creators
                  </MenuButton>
                  <MenuList>
                    <MenuItem icon={<AddIcon />} >
                      Podcasters
                    </MenuItem>
                    <MenuItem icon={<ExternalLinkIcon />}>
                      Video creators
                    </MenuItem>
                    <MenuItem icon={<RepeatIcon />} >
                      Musicians
                    </MenuItem>
                    <MenuItem icon={<EditIcon />}>
                      Visual Artists
                    </MenuItem>
                    <MenuItem icon={<EditIcon />}>
                      Communities
                    </MenuItem>
                    <MenuItem icon={<EditIcon />}>
                      Writers and Journalists
                    </MenuItem>
                    <MenuItem icon={<EditIcon />}>
                      Gaming Creators
                    </MenuItem>
                    <MenuItem icon={<EditIcon />}>
                      Nonprofits
                    </MenuItem>
                    <MenuItem icon={<EditIcon />}>
                      Tutorials and Education
                    </MenuItem>
                    <MenuItem icon={<EditIcon />}>
                      Local Businesses
                    </MenuItem>
                    <MenuItem icon={<EditIcon />}>
                      Creators-of-all-kinds
                    </MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
              <HStack>
                <span>Pricing</span>
              </HStack>
              <HStack>
                <Menu trigger={'hover'}>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg={'white'}>
                    Resources
                  </MenuButton>
                  <MenuList>
                    <MenuItem icon={<AddIcon />} >
                      Blog
                    </MenuItem>
                    <MenuItem icon={<ExternalLinkIcon />}>
                      Creator Community
                    </MenuItem>
                    <MenuItem icon={<RepeatIcon />} >
                      Events
                    </MenuItem>
                    <MenuItem icon={<EditIcon />}>
                      Patreon U
                    </MenuItem>
                    <MenuItem icon={<EditIcon />}>
                      App Directory
                    </MenuItem>
                    <MenuItem icon={<EditIcon />}>
                      Help Center and FAQ
                    </MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
              <HStack>
                <span>Starter Kits </span>
              </HStack>
            </HStack>
            <Stack spacing={4} style={{ width: "21%" , padding:"2%", marginRight:"0", marginLeft:"178px"}}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<SearchIcon color='gray.300' />}
                            />
                            <Input type='tel' placeholder='Search For Patreons' style={{ borderRadius: "25px", backgroundColor: "rgb(245, 244, 242)" }} />
                        </InputGroup>
            </Stack>
            <span onClick={()=> navigate("/footer")} style={{marginRight:"0", fontWeight:"500"}}>Log In</span>
            <Button style={{borderRadius:"25px", backgroundColor:"rgb(255, 66, 77)", color:"white", marginLeft:"0", marginRight:"4px"}}>Create on Patreon</Button>
          </Flex>

        </Box>

    </div>
  );
}

