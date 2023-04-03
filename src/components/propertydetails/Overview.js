import React from "react";
import {
  Stack,
  Heading,
  HStack,
  Button,
  chakra,
  Spacer,
  Text,
  Center,
  Divider,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const Overview = () => {
  const router = useRouter();
  return (
    <Stack width={"full"} p={"8%"}>
      <Stack>
        <Heading
          color={"#071c1f"}
          fontSize={"3xl"}
          fontWeight={"700"}
          pb={2}
          textAlign={"center"}
        >
          Overview
        </Heading>
        <Heading
          fontSize={"2xl"}
          color={"#071c1f"}
          borderLeft={"2px solid #38A169"}
        >
          <chakra.span ml={2}>Property Detail</chakra.span>
        </Heading>
      </Stack>

      <Stack width={{ base: "100%", md: "100%", lg: "70%" }}>
        <Stack
          direction={{ base: "column", md: "row" }}
          bgColor={"#f2f6f7"}
          p={5}
        >
          <Stack width={{ base: "100%", md: "50%", lg: "40%" }} gap={2} p={4}>
            <HStack>
              <Text color={"#5c727d"} fontSize={"sm"} fontWeight={"700"}>
                Type :
              </Text>
              <Spacer />
              <Text fontSize={"sm"}>{router.query.type}</Text>
            </HStack>

            <HStack>
              <Text color={"#5c727d"} fontSize={"sm"} fontWeight={"700"}>
                Price :
              </Text>
              <Spacer />
              <Text fontSize={"sm"}>
                {router.query.priceUnit} {router.query.price}
              </Text>
            </HStack>

            <HStack>
              <Text color={"#5c727d"} fontSize={"sm"} fontWeight={"700"}>
                Location :
              </Text>
              <Spacer />
              <Text fontSize={"sm"}>{router.query.location}</Text>
            </HStack>

            <HStack>
              <Text color={"#5c727d"} fontSize={"sm"} fontWeight={"700"}>
                Bath(s) :
              </Text>
              <Spacer />
              <Text fontSize={"sm"}>{router.query.bath}</Text>
            </HStack>
          </Stack>
          <Center>
            <Divider orientation="vertical" color={"#9da1a7"} />
          </Center>
          <Stack width={{ base: "100%", md: "50%", lg: "30%" }} gap={2} p={4}>
            <HStack>
              <Text color={"#5c727d"} fontSize={"sm"} fontWeight={"700"}>
                Area :
              </Text>
              <Spacer />
              <Text fontSize={"sm"}>
                {router.query.area} {router.query.areaUnit}
              </Text>
            </HStack>

            <HStack>
              <Text color={"#5c727d"} fontSize={"sm"} fontWeight={"700"}>
                Purpose :
              </Text>
              <Spacer />
              <Text fontSize={"sm"}>For {router.query.purpose}</Text>
            </HStack>

            <HStack>
              <Text color={"#5c727d"} fontSize={"sm"} fontWeight={"700"}>
                Bedroom(s) :
              </Text>
              <Spacer />
              <Text fontSize={"sm"}>{router.query.rooms}</Text>
            </HStack>
          </Stack>
        </Stack>
      </Stack>

      <Stack>
        <Heading
          fontSize={"2xl"}
          color={"#071c1f"}
          borderLeft={"2px solid #38A169"}
        >
          <chakra.span ml={2}>Description</chakra.span>
        </Heading>
        <Stack bgColor={"#f2f6f7"} width={'70%'}>
          <Text fontSize={"sm"}>{router.query.discription}</Text>
          </Stack>
      </Stack>
    </Stack>
  );
};

export default Overview;
