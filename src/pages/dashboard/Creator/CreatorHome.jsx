import { Box, Center, CircularProgress, Flex } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Patrons from "../../../components/Dashboard/Patrons";
import Sidebar from "../../../components/Dashboard/Sidebar";
import MyPage from "../../../components/Dashboard/MyPage";
import { SidebarContext } from "../../../context/SidebarContext";
import Insights from "../../../components/Dashboard/Insights";
import Payouts from "../../../components/Dashboard/Payouts";

function CreatorHome() {
  const [sidebarButtonValue] = useContext(SidebarContext);
  const [userData, setUserData] = useState({});

  async function fetchUserData(id = 1) {
    let res = await fetch(`https://patreon-data.herokuapp.com/users/${id}`);
    let data = await res.json();
    console.log(data, "data");
    setUserData(data);
  }
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Flex>
      <Sidebar />

      <Box width="100vw">
        {!userData.id ? (
          <Center h="100vh">
          <CircularProgress isCentered isIndeterminate color="blue.600" />
          </Center>
        ) : sidebarButtonValue === "My page" ? (
          <MyPage userData={userData} />
        ) : sidebarButtonValue === "Patrons" ? (
          <Patrons userData={userData} />
        ) : sidebarButtonValue === "Insights" ? (
          <Insights userData={userData} />
        ) : sidebarButtonValue === "Payouts" ? (
          <Payouts userData={userData} />
        ) : (
          <></>
        )}
      </Box>
    </Flex>

  );
}

export default CreatorHome;
