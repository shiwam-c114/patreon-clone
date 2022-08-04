import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";

function Patrons() {
  return (
    <>
      <Box>
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
              <p>one!</p>
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
