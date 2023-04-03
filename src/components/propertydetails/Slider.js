import React, { Component } from "react";
import { Stack, Heading, HStack, Button, Link } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Apartments from "../../assets/image/2.jpg";
import Condos from "../../assets/image/3.jpg";
import Houses from "../../assets/image/7.jpg";
import Retail from "../../assets/image/8.jpg";
import Villas from "../../assets/image/9.jpg";
import { RiMapPinLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import Image from "next/image";
import EmailModal from "./Modal";
import { useRouter } from "next/router";

const PropertySlider = () => {
  const router = useRouter();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Stack width={"full"} px={"8%"} pt={5}>
      <Stack direction={{ base: "column", md: "row" }} gap={2}>
        <Stack width={{ base: "100%", md: "70%" }}>
          <Heading
            color={"#071c1f"}
            fontSize={{ base: "xl", md: "3xl" }}
            fontWeight={"700"}
          >
            Diamond Manor Apartment
          </Heading>
          <HStack pb={2}>
            <Link>
              <RiMapPinLine color={"#38A169"} size={14} />
            </Link>
            <Link
              _hover={{
                textDecoration: "none",
                color: "#38A169",
              }}
              fontSize={"sm"}
              color={"#5c727d"}
            >
              {router.query.location}
            </Link>
          </HStack>
          <Slider {...settings}>
            <Stack>
              <Image
                src={`http://localhost:5000/${router.query.images}`}
                height={"650px"}
                width={"850px"}
              />
            </Stack>
            <Stack>
              <Image src={Condos} height={500} />
            </Stack>
            <Stack>
              <Image src={Houses} height={500} />
            </Stack>
            <Stack>
              <Image src={Retail} height={500} />
            </Stack>
            <Stack>
              <Image src={Villas} height={500} />
            </Stack>
          </Slider>
        </Stack>
        <Stack width={{ base: "100%", md: "30%" }} pt={20}>
          <Stack boxShadow={"md"} rounded={"md"} p={4} gap={2}>
            <Heading
              color={"#071c1f"}
              fontSize={"2xl"}
              fontWeight={"700"}
              textAlign={"center"}
            >
              {router.query.priceUnit} {router.query.price}
            </Heading>

            <Stack>
              <Button
                width={"100%"}
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
                textTransform={"uppercase"}
                leftIcon={<FiPhoneCall size={20} />}
              >
                Call
              </Button>
            </Stack>

            <Stack>
              <EmailModal />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default PropertySlider;
