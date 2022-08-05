import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
function Insights({ userData }) {
  console.log(userData);
  return (
    <>
      <Box fontSize={"sm"} margin={"70px"}>
        <Heading size={"lg"}>Insights</Heading>

        <Tabs isLazy>
          <TabList>
            <Tab>Membership</Tab>
            <Tab>Earnings</Tab>
            <Tab>Posts</Tab>
          </TabList>
          <TabPanels>
            {/* initially mounted */}
            <TabPanel>
              <>
                <Flex
                  justifyContent={"space-between"}
                  margin={"30px 0"}
                  gap={"10px"}>
                  <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                      Past 30 days
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Download</MenuItem>
                      <MenuItem>Create a Copy</MenuItem>
                      <MenuItem>Mark as Draft</MenuItem>
                      <MenuItem>Delete</MenuItem>
                      <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                  </Menu>
                  <p>last updated at {"time"}</p>
                </Flex>

                <Box marginTop={"60px"}>
                  <Tabs isFitted>
                    <TabList>
                      <Tab>
                        <Stat>
                          <StatLabel>Acitve patrons</StatLabel>
                          <StatNumber>0</StatNumber>
                          <StatHelpText>
                            <StatArrow type="increase" />
                            0%
                          </StatHelpText>
                        </Stat>
                      </Tab>
                      <Tab>
                        <Stat>
                          <StatLabel>Active</StatLabel>
                          <StatNumber>0</StatNumber>
                          <StatHelpText>
                            <StatArrow type="increase" />
                            0%
                          </StatHelpText>
                        </Stat>
                      </Tab>
                      <Tab>
                        <Stat>
                          <StatLabel>cancelled</StatLabel>
                          <StatNumber>0</StatNumber>
                          <StatHelpText>
                            <StatArrow type="increase" />
                            0%
                          </StatHelpText>
                        </Stat>
                      </Tab>
                    </TabList>

                    <TabPanels>
                      <TabPanel>
                        <>active users</>
                      </TabPanel>
                      <TabPanel>
                        <p>two!</p>
                      </TabPanel>
                      <TabPanel>
                        <p>three!</p>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </Box>
              </>
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

export default Insights;
