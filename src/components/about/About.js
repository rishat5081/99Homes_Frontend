import React from "react";
import {
  Stack,
  Heading,
  Link,
  Button,
  HStack,
  Box,
  chakra,
  Text,
} from "@chakra-ui/react";
import BgImg from "../../assets/image/about.jpg";
import Img from "../../assets/image/img.png";
import BgAbout from "../../assets/image/13.png";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { RiHomeHeartLine } from "react-icons/ri";
import { BsCardImage } from "react-icons/bs";
import { FaGem } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { useRouter } from "next/router";
import Image from "next/image";

const About = () => {
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
              About Us
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
                onClick={() => router.push("/About")}
              >
                About Us
              </Link>
            </HStack>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        direction={{ base: "column", lg: "row" }}
        width={"100%"}
        px={{ base: "4", md: "20" }}
      >
        <Stack width={{ base: "100%", lg: "40%" }} boxShadow={"dark"}>
          <Stack
            style={{
              backgroundImage: `url(${BgAbout.src})`,
            }}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            h="600"
          >
            <Box pt={"70%"}>
              <Image src={Img} h={"200px"} />
            </Box>
          </Stack>
        </Stack>

        <Stack width={{ base: "100%", lg: "60%" }} p={{ base: "5", md: "10" }}>
          <Stack py={4}>
            <Text fontSize={"md"} fontWeight={"600"} color={"#38A169"}>
              About Us
            </Text>
            <Heading
              color={"#071c1f"}
              fontSize={{ base: "lg", md: "40px" }}
              fontWeight={"700"}
            >
              The Leading Real Estate Rental Marketplace
              <chakra.span color={"#38A169"}>.</chakra.span>
            </Heading>
            <Text
              fontSize={"sm"}
              color={"#5c727d"}
              width={{ base: "100%", lg: "75%" }}
            >
              Over 39,000 people work for us in more than 70 countries all over
              the This breadth of global coverage, combined with specialist
              services
            </Text>
          </Stack>
          <Stack gap={2}>
            <Stack direction={{ base: "column", md: "row" }}>
              <HStack width={{ base: "100%", lg: "50%" }}>
                <Text bgColor={"green.100"} p={2} borderRadius={"50%"}>
                  <RiHomeHeartLine color={"#38A169"} size={20} />
                </Text>
                <Text fontSize={"sm"} color={"#5c727d"} w={"75%"}>
                  Smart Home Design
                </Text>
              </HStack>
              <HStack width={{ base: "100%", lg: "50%" }}>
                <Text bgColor={"green.100"} p={2} borderRadius={"50%"}>
                  <BsCardImage color={"#38A169"} size={20} />
                </Text>
                <Text fontSize={"sm"} color={"#5c727d"} w={"75%"}>
                  Beautiful Scene Around
                </Text>
              </HStack>
            </Stack>
            <Stack direction={{ base: "column", md: "row" }}>
              <HStack width={{ base: "100%", lg: "50%" }}>
                <Text bgColor={"green.100"} p={2} borderRadius={"50%"}>
                  <FaGem color={"#38A169"} size={20} />
                </Text>
                <Text fontSize={"sm"} color={"#5c727d"} w={"75%"}>
                  Exceptional Lifestyle
                </Text>
              </HStack>
              <HStack width={{ base: "100%", lg: "50%" }}>
                <Text bgColor={"green.100"} p={2} borderRadius={"50%"}>
                  <MdSecurity color={"#38A169"} size={20} />
                </Text>
                <Text fontSize={"sm"} color={"#5c727d"} w={"75%"}>
                  Complete 24/7 Security
                </Text>
              </HStack>
            </Stack>
          </Stack>
          <Stack py={4}>
            <Stack bgColor={"green.100"}>
              <Text
                fontSize={"sm"}
                color={"#5c727d"}
                width={{ base: "100%", lg: "65%" }}
                p={5}
                borderLeft={"4px solid #38A169"}
              >
                "Enimad minim veniam quis nostrud exercitation llamco laboris.
                Lorem ipsum dolor sit amet"
              </Text>
            </Stack>
          </Stack>
          <Stack>
            <Button
              width={"fit-content"}
              border={"1px solid white"}
              color={"white"}
              bgColor={"#38A169"}
              size="lg"
              borderRadius={"none"}
              fontWeight={"600"}
              fontSize={"md"}
              _hover={{
                color: "black",
                bgColor: "transparent ",
                border: "1px solid black",
              }}
              onClick={() => router.push("/Services")}
            >
              OUR SERVICES
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default About;
