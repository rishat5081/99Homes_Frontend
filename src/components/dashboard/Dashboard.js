import React from "react";
import { Stack } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Properties from "../../components/dashboard/Properties";
import Addproperty from "../../components/dashboard/ListingForm";
import ChangePassword from "./ChangePassword";
import AdminHome from "./AdminHome";

const Dashboard = () => {
  return (
    <Stack width={"100%"} p={{ base: 1, md: 20 }}>
      <Tabs
        orientation={"horizontal"}
        variant="soft-rounded"
        colorScheme="green"
      >
        <Stack>
          <TabList flexWrap={"wrap"}>
            <Tab
              fontSize={"sm"}
              _focus={{
                boxShadow: "green",
                border: "1px solid green",
              }}
              fontWeight={"700"}
            >
              Dashboard
            </Tab>
            <Tab
              fontSize={"sm"}
              _focus={{
                boxShadow: "green",
                border: "1px solid green",
              }}
            >
              My Properties
            </Tab>
            <Tab
              fontSize={"sm"}
              _focus={{
                boxShadow: "green",
                border: "1px solid green",
              }}
            >
              Add Property
            </Tab>
            <Tab
              fontSize={"sm"}
              _focus={{
                boxShadow: "green",
                border: "1px solid green",
              }}
            >
              Change Password
            </Tab>
          </TabList>
        </Stack>

        <Stack>
          <TabPanels>
            <TabPanel>
              <AdminHome />
            </TabPanel>
            <TabPanel>
              <Properties />
            </TabPanel>
            <TabPanel>
              <Addproperty />
            </TabPanel>
            <TabPanel>
              <ChangePassword />
            </TabPanel>
          </TabPanels>
        </Stack>
      </Tabs>
    </Stack>
  );
};

export default Dashboard;
