import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  Stack,
  Heading,
  HStack,
  Text,
  Spacer,
  chakra,
  Link,
  FormControl,
  FormLabel,
  Switch,
  Button,
} from "@chakra-ui/react";
import { RiMapPinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";


const Properties = () => {
  const router = useRouter();
  const [on, seton] = useState();

  const [property, setproperty] = useState([]);
  console.log(
    "🚀 ~ file: Properties.js ~ line 28 ~ Properties ~ property",
    property
  );

  const handleClick = async (id) => {
    seton(!on);
    const payload = {
      id: id,
      isSold: on,
    };
    try {
      await axios.post("/change_property_status", payload);
      console.log("Successfully Submitted");
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    callAPI();
  }, []);
  const callAPI = async (params) => {
    try {
      const res = await axios.get("/get_property?" + params);
      setproperty(res?.data);
    } catch (error) {
      alert(error.response.data.error);
    }
  };
  return (
    <Stack width={"full"} p={{ base: 1, md: 10 }}>
      <Stack direction={{ base: "column", lg: "row" }} gap={4}>
        <Stack width={{ base: "100%", lg: "100%" }} gap={5}>
          <InfiniteScroll
            dataLength={property.length}
            next={callAPI}
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
              >
                <Stack width={"full"}>
                  <Stack direction={{ base: "column", md: "row" }} gap={5}>
                    <Stack
                      width={{ base: "100%", md: "40%" }}
                      cursor={"pointer"}
                    >
                      <Image
                        height={"650px"}
                        width={"850px"}
                        src={`http://localhost:5000/${ele.images[0]}`}
                        onClick={() =>
                          router.push({
                            pathname: "/PropertyDetails/",
                            query: ele,
                          })
                        }
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
                      <Spacer />
                      <HStack>
                        <FormControl display="flex" alignItems="center">
                          {on ? (
                            <FormLabel color={"green"} fontWeight={"bold"}>
                              Sold
                            </FormLabel>
                          ) : (
                            <FormLabel color={"red"} fontWeight={"bold"}>
                              Not Sold
                            </FormLabel>
                          )}
                          <Switch
                            colorScheme="green"
                            value={on}
                            onChange={() => handleClick(ele._id)}
                          />
                        </FormControl>
                        <Spacer />
                        <Stack>
                          <Button
                            width={"fit-content"}
                            onClick={() =>
                              router.push({
                                pathname: "/AddListing/",
                                query: ele,
                              })
                            }
                          >
                            <FaRegEdit />
                          </Button>
                          
                        </Stack>
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
