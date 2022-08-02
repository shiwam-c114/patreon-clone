import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon, EditIcon, Search2Icon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, IconButton, Img, chakra, Text, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FiUpload } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";
import { Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React from "react";
import { useDisclosure } from '@chakra-ui/react'

function MyPage() {
    const { isOpen, onToggle, onOpen, onClose } = useDisclosure()

    return (
        <>
            <header>
                <Box
                    // backgroundRepeat="repeat"
                    // position="absolute"
                    height="40vh"
                    bgSize={"cover"}
                    backgroundImage='url("https://c10.patreonusercontent.com/4/patreon-media/p/campaign/9031616/1c30bff080214e249ce01ed6f65689b3/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/1.jpg?token-time=1662249600&token-hash=4p8r39VXeayAgk5sG4jRqhhyywiyrmTqB2COkdtYrH4%3D")'
                    backgroundPosition="center center"
                ></Box>
            </header>

            <div>
                <Img
                    width={"5rem"}
                    position="absolute"
                    left={"55%"}
                    top={"34%"}
                    borderRadius={"50%"}
                    src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/9031616/cdc57a37a3a64b7bb9a57640e5d31a37/eyJ3IjoyMDB9/1.jpg?token-time=2145916800&token-hash=JCnpYxmabRemCcftRVX4bAP9_Wjgrl85wXi5PqF030s%3D"
                ></Img>
                <Box>
                    <Flex justifyContent={"end"} gap={"10px"} padding={"10px"}>
                        <Button leftIcon={<EditIcon />} colorScheme={"facebook"}>
                            Create
                        </Button>
                        <IconButton icon={<FiUpload />} />
                        <IconButton icon={<HiDotsHorizontal />} />
                    </Flex>
                </Box>
            </div>
            <Box textAlign={"center"} p={2}>
                <Heading size={"md"}>john the creator</Heading>
                <Text color={"gray"}>Creating video</Text>
            </Box>

            <Box>
                <Tabs align="center" isLazy>
                    <TabList>
                        <Tab>Posts</Tab>
                        <Tab>Membership</Tab>
                    </TabList>
                    <TabPanels>
                        {/* initially mounted */}
                        <TabPanel textAlign={"left"} margin={"0 20rem"}>
                            <Box margin={"10px"}>

                            <Menu closeOnSelect={false}>
                                <MenuButton onClick={onToggle} borderRadius='md' borderWidth='1px' px={4} py={2} >
                                    Media type {!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
                                </MenuButton>
                                <MenuList minWidth="240px">
                                    <MenuOptionGroup defaultValue="asc" title="Filter by media type" type="radio">
                                        <MenuItemOption value="asc">Ascending</MenuItemOption>
                                        <MenuItemOption value="desc">Descending</MenuItemOption>
                                    </MenuOptionGroup>
                                </MenuList>
                            </Menu>
                            <Menu closeOnSelect={false}>
                                <MenuButton onClick={onToggle} borderRadius='md' borderWidth='1px' px={4} py={2} >
                                    Tier {!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
                                </MenuButton>
                                <MenuList minWidth="240px">
                                    <MenuOptionGroup defaultValue="asc" title="Filter by tier" type="radio">
                                        <MenuItemOption onClose={onClose} value="asc">Ascending</MenuItemOption>
                                        <MenuItemOption value="desc">Descending</MenuItemOption>
                                    </MenuOptionGroup>
                                </MenuList>
                            </Menu>
                            <Menu closeOnSelect={false}>
                                <MenuButton onClick={onToggle} borderRadius='md' borderWidth='1px' px={4} py={2} >
                                    Month {!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
                                </MenuButton>
                                <MenuList minWidth="240px">
                                    <MenuOptionGroup defaultValue="asc" title="Filter by month" type="radio">
                                        <MenuItemOption onClose={onClose} value="asc">Ascending</MenuItemOption>
                                        <MenuItemOption value="desc">Descending</MenuItemOption>
                                    </MenuOptionGroup>
                                </MenuList>
                            </Menu>
                            </Box>
                            <InputGroup >
                                <InputLeftElement
                                    zIndex={"-10"}
                                    children={<Search2Icon color='gray.500' />}
                                />
                                <Input placeholder="Search posts" type={"search"} ></Input>
                            </InputGroup>
                            <Box margin={"40px 0"}>
                            <Menu closeOnSelect={false}>
                                <MenuButton onClick={onToggle} borderRadius='md'  px={4} py={2} >
                                    Oldest to newest {!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
                                </MenuButton>
                                <MenuList minWidth="240px">
                                    <MenuOptionGroup defaultValue="asc" title="Sort by" type="radio">
                                        <MenuItemOption onClose={onClose} value="asc">Ascending</MenuItemOption>
                                        <MenuItemOption value="desc">Descending</MenuItemOption>
                                    </MenuOptionGroup>
                                </MenuList>
                            </Menu>
                            </Box>
                        </TabPanel>
                        {/* initially not mounted */}
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </>
    );
}

export default MyPage;
