import React from "react";
import {
  Stack,
  Heading,
  Link,
  HStack,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";
import BgImg from "../../assets/image/about.jpg";
import Msg from "../../assets/image/msg.png";
import Call from "../../assets/image/call.png";
import Map from "../../assets/image/map.png";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/router";
import Image from "next/image";

const ContactUs = () => {
  const router = useRouter();
  return (
    <Stack width={"full"}>
      <Stack
        style={{
          backgroundImage: `url(${BgImg.src})`,
        }}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="300"
      >
        <Stack p={{ base: "4", md: "20" }}>
          <Stack gap={5}>
            <Heading color={"#071c1f"} fontSize={"35px"} fontWeight={"700"}>
              Contact Us
            </Heading>
            <HStack fontSize={"sm"}>
              <Link>
                <FaHome color={"#38A169"} size={14} />
              </Link>
              <Link
                color={"#5c727d"}
                _hover={{
                  textDecoration: "none",
                  color: "#38A169",
                }}
                fontWeight={"700"}
                onClick={() => router.push("/")}
              >
                Home
              </Link>
              <IoIosArrowForward color={"#38A169"} size={14} />
              <Link
                fontWeight={"700"}
                _hover={{
                  textDecoration: "none",
                  color: "#38A169",
                }}
                onClick={() => router.push("/ContactUs")}
              >
                Contact
              </Link>
            </HStack>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        width={"100%"}
        direction={{ base: "column", lg: "row" }}
        px={{ base: "4", md: "20" }}
        pt={5}
        gap={5}
      >
        <Stack width={{ base: "100%", lg: "33%" }}>
          <Stack
            bgColor={"#fff"}
            border={"2px solid #ededed"}
            p={10}
            _hover={{
              boxShadow: "md",
              borderBottom: "3px solid #38A169",
            }}
          >
            <VStack gap={2}>
              <Box>
                <Image src={Msg} />
              </Box>
              <Heading
                color={"black"}
                fontSize={"2xl"}
                fontWeight={"700"}
                cursor={"pointer"}
                _hover={{
                  color: "#38A169",
                }}
              >
                Email Address
              </Heading>
              <Stack>
                <Text fontSize={"sm"} color={"#5c727d"} textAlign={"center"}>
                  info@webmail.com
                </Text>
                <Text fontSize={"sm"} color={"#5c727d"} textAlign={"center"}>
                  jobs@webexample.com
                </Text>
              </Stack>
            </VStack>
          </Stack>
        </Stack>

        <Stack width={{ base: "100%", lg: "33%" }}>
          <Stack
            bgColor={"#fff"}
            border={"2px solid #ededed"}
            p={10}
            _hover={{
              boxShadow: "md",
              borderBottom: "3px solid #38A169",
            }}
          >
            <VStack gap={2}>
              <Box>
                <Image src={Call} />
              </Box>
              <Heading
                color={"black"}
                fontSize={"2xl"}
                fontWeight={"700"}
                cursor={"pointer"}
                _hover={{
                  color: "#38A169",
                }}
              >
                Phone Number
              </Heading>
              <Stack>
                <Text fontSize={"sm"} color={"#5c727d"} textAlign={"center"}>
                  +0123-456789
                </Text>
                <Text fontSize={"sm"} color={"#5c727d"} textAlign={"center"}>
                  +987-6543210
                </Text>
              </Stack>
            </VStack>
          </Stack>
        </Stack>

        <Stack width={{ base: "100%", lg: "33%" }}>
          <Stack
            bgColor={"#fff"}
            border={"2px solid #ededed"}
            p={10}
            _hover={{
              boxShadow: "md",
              borderBottom: "3px solid #38A169",
            }}
          >
            <VStack gap={3}>
              <Box>
                <Image src={Map} />
              </Box>
              <Heading
                color={"black"}
                fontSize={"2xl"}
                fontWeight={"700"}
                cursor={"pointer"}
                _hover={{
                  color: "#38A169",
                }}
              >
                Office Address
              </Heading>
              <Stack>
                <Text fontSize={"sm"} color={"#5c727d"} textAlign={"center"}>
                  18/A, New Born Town Hall
                </Text>
                <Text fontSize={"sm"} color={"#5c727d"} textAlign={"center"}>
                  New York, US
                </Text>
              </Stack>
            </VStack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ContactUs;
