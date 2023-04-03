import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  Stack,
  Heading,
  HStack,
  Text,
  Spacer,
  Button,
  Input,
  chakra,
  Link,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiMapPinLine } from "react-icons/ri";
import Filters from "./Filters";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";

const Properties = () => {
  const router = useRouter();
  const [property, setproperty] = useState([]);
  const [limit, setlimit] = useState(2);
  console.log("🚀 ~ file: Properties.js ~ line 24 ~ Properties ~ property", property)

  useEffect(() => {
    callAPI();
  }, [limit]);

  const callAPI = async (params) => {
    try {
      const res = await axios.get(`/get_property?limit=${limit}&skip=${property.length}&${params}`);
      setproperty(res?.data);
    } catch (error) {
      alert(error.response.data.error);
    }
  };
  return (
    <Stack width={"full"} p={{ base: 10, md: 20 }}>
      <Stack direction={{ base: "column", lg: "row" }} gap={4}>
        <Filters callAPI={callAPI} />

        <Stack width={{ base: "100%", lg: "70%" }} gap={5}>
          <HStack pt={"60px"}>
            <Input
              h={"50px"}
              placeholder="Search your keyword..."
              borderRadius={"none"}
              bgColor={"white"}
              color={"black"}
              fontSize={"sm"}
              _focus={{
                boxShadow: "green",
                border: "1px solid green",
              }}
            />
            <Button
              h={"50px"}
              ml={"0 !important"}
              color={"white"}
              bgColor={"#38A169"}
              size="md"
              borderRadius={"none"}
              _hover={{
                color: "white",
                bgColor: "black",
              }}
            >
              <AiOutlineSearch size={30} />
            </Button>
          </HStack>

          <InfiniteScroll
            dataLength={property.length}
            next={()=>setlimit(limit+2)}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {property?.map((ele) => (
              <Stack
                boxShadow={"md"}
                bgColor={"white"}
                border={"1px solid #f1f8ff"}
                p={5}
                cursor={"pointer"}
                onClick={() =>
                  router.push({ pathname: "/PropertyDetails/", query: ele })
                }
              >
                <Stack width={"full"}>
                  <Stack direction={{ base: "column", md: "row" }} gap={5}>
                    <Stack width={{ base: "100%", md: "40%" }}>
                      <Image
                        height={"650px"}
                        width={"850px"}
                        src={`http://localhost:5000/${ele.images[0]}`}
                      />
                    </Stack>
                    <Stack width={{ base: "100%", md: "60%" }} gap={2}>
                      <HStack fontSize={"sm"}>
                        <Text color={"#38A169"} fontWeight={"600"}>
                          {ele.purpose}
                        </Text>
                        <Spacer />
                        <Text color={"#38A169"} fontWeight={"bold"}>
                          {ele.price}
                          <chakra.span fontSize={"xs"} fontWeight={"normal"}>
                            {ele.priceUnit}
                          </chakra.span>
                        </Text>
                      </HStack>
                      <Heading
                        fontSize={{ base: "md", md: "xl" }}
                        cursor={"pointer"}
                        _hover={{
                          color: "#38A169",
                        }}
                      >
                        {ele.discription}
                      </Heading>
                      <HStack>
                        <Link>
                          <RiMapPinLine color={"#38A169"} size={15} />
                        </Link>
                        <Link
                          fontSize={"xs"}
                          _hover={{
                            textDecoration: "none",
                            color: "#38A169",
                          }}
                          color={"#5c727d"}
                        >
                          {ele.location}
                        </Link>
                      </HStack>
                      <HStack fontSize={"xs"} color={"#5c727d"}>
                        <Text>
                          <chakra.span fontSize={"sm"} fontWeight={"bold"}>
                            {ele.rooms}
                          </chakra.span>{" "}
                          Bed
                        </Text>
                        <Text>
                          <chakra.span fontSize={"sm"} fontWeight={"bold"}>
                            {ele.bath}
                          </chakra.span>{" "}
                          Bath
                        </Text>
                        <Text>
                          <chakra.span fontSize={"sm"} fontWeight={"bold"}>
                            {ele.area}
                          </chakra.span>{" "}
                          {ele.areaUnit}
                        </Text>
                      </HStack>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </InfiniteScroll>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Properties;
