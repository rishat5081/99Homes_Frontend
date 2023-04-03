import React from "react";
import { Stack, Text, HStack, Divider } from "@chakra-ui/react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ChangingProgressProvider from "./ChangingProgressProvider";

import "react-circular-progressbar/dist/styles.css";

const AdminHome = () => {
  return (
    <Stack width={"100%"} p={10}>
      <Stack direction={{ base: "column", md: "row" }} gap={10}>
        <HStack
          width={{base:'100%',md:"25%"}}
          boxShadow={"md"}
          rounded={"md"}
          bgColor={"ghostwhite"}
          p={5}
        >
          <Stack>
            <ChangingProgressProvider values={[0, 80]}>
              {(percentage) => (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    pathTransition:
                      percentage === 0
                        ? "none"
                        : "stroke-dashoffset 0.5s ease 0s",
                  })}
                />
              )}
            </ChangingProgressProvider>
          </Stack>
          <Stack marginBottom={"auto !important"}>
            <Text>Buy</Text>
          </Stack>
        </HStack>
        <HStack
           width={{base:'100%',md:"25%"}}
          boxShadow={"md"}
          rounded={"md"}
          bgColor={"ghostwhite"}
          p={5}
        >
          <Stack>
            <ChangingProgressProvider values={[0, 60]}>
              {(percentage) => (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    pathTransition:
                      percentage === 0
                        ? "none"
                        : "stroke-dashoffset 0.5s ease 0s",
                  })}
                />
              )}
            </ChangingProgressProvider>
          </Stack>
          <Stack marginBottom={"auto !important"}>
            <Text>Rent</Text>
          </Stack>
        </HStack>
        <HStack
           width={{base:'100%',md:"25%"}}
          boxShadow={"md"}
          rounded={"md"}
          bgColor={"ghostwhite"}
          p={5}
        >
          <Stack>
            <ChangingProgressProvider values={[0, 50]}>
              {(percentage) => (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    pathTransition:
                      percentage === 0
                        ? "none"
                        : "stroke-dashoffset 0.5s ease 0s",
                  })}
                />
              )}
            </ChangingProgressProvider>
          </Stack>
          <Stack marginBottom={"auto !important"}>
            <Text>Profit</Text>
          </Stack>
        </HStack>
        <HStack
           width={{base:'100%',md:"25%"}}
          boxShadow={"md"}
          rounded={"md"}
          bgColor={"ghostwhite"}
          p={5}
        >
          <Stack>
            <ChangingProgressProvider values={[0, 10]}>
              {(percentage) => (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    pathTransition:
                      percentage === 0
                        ? "none"
                        : "stroke-dashoffset 0.5s ease 0s",
                  })}
                />
              )}
            </ChangingProgressProvider>
          </Stack>
          <Stack marginBottom={"auto !important"}>
            <Text>Loss</Text>
          </Stack>
        </HStack>
      </Stack>
      <Divider py={5} borderColor={"green.300"} />
    </Stack>
  );
};

export default AdminHome;
