import { Box, Button, Flex, Heading, Input, InputGroup, InputLeftAddon, InputLeftElement, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaSort } from "react-icons/fa";

function Patrons() {
  return (
    <>
      <Box fontSize={"sm"} margin={"70px"}>
        <Heading size={"lg"}>Patrons</Heading>

        <Tabs isLazy>
          <TabList>
            <Tab>Relationship manager</Tab>
            <Tab>Benefits</Tab>
            <Tab>Exit surveys</Tab>
            <Tab>Blocked users</Tab>
          </TabList>
          <TabPanels>
            {/* initially mounted */}
            <TabPanel>
              <>
                <Flex margin={"30px 0"} gap={"10px"}>
                  <InputGroup maxWidth={"max-content"}>
                    <InputLeftElement
                      children={<BsSearch />}></InputLeftElement>
                    <Input placeholder="Search for name or email"></Input>
                  </InputGroup>
                  <Button>Message</Button>
                  <Button>CSV</Button>
                  <Button>As of {"time"}</Button>
                </Flex>
                <Flex gap="10px">
                  <Button  colorScheme={"blue"}>
                    Active
                  </Button>
                  <Button color={"black"} colorScheme={"white"}>
                    New
                  </Button>
                  <Button color={"black"} colorScheme={"white"}>
                    Declined
                  </Button>
                  <Button color={"black"} colorScheme={"white"}>
                    cancelled
                  </Button>
                  <Button color={"black"} colorScheme={"white"}>
                    Filter - {"count"}
                  </Button>
                  <Button color={"facebook.300"} colorScheme={"white"}>
                    clear all
                  </Button>
                </Flex>
                <Box marginTop={"60px"}>
                  <Flex justifyContent={"space-between"}>
                    <Button
                      rightIcon={<FaSort />}
                      color={"black"}
                      colorScheme={"white"}>
                      Name
                    </Button>
                    <Button
                      rightIcon={<FaSort />}
                      color={"black"}
                      colorScheme={"white"}>
                      Email
                    </Button>
                    <Button
                      rightIcon={<FaSort />}
                      color={"black"}
                      colorScheme={"white"}>
                      Current Tier
                    </Button>
                    <Button
                      rightIcon={<FaSort />}
                      color={"black"}
                      colorScheme={"white"}>
                      Pledge
                    </Button>
                    <Button
                      rightIcon={<FaSort />}
                      color={"black"}
                      colorScheme={"white"}>
                      Lifetime
                    </Button>
                    <Button color={"black"} colorScheme={"white"}>
                      Status
                    </Button>
                    <Button
                      rightIcon={<FaSort />}
                      color={"black"}
                      colorScheme={"white"}>
                      Join Date
                    </Button>
                    <Button
                      rightIcon={<FaSort />}
                      color={"black"}
                      colorScheme={"white"}>
                      Last Charge
                    </Button>
                  </Flex>

                  <Box>things would render here</Box>
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

export default Patrons;
