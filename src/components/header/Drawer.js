import React from "react";
import {
  Button,
  Input,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Link,
} from "@chakra-ui/react";
import Logo from "../../assets/image/logo.png";
import { useDisclosure } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/router";
import Image from "next/image";

const Drawers = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        variant="outline"
        _focus={{
          boxShadow: "none",
        }}
        display={{ base: "inherit", md: "inherit", lg: "none" }}
      >
        <GiHamburgerMenu />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {" "}
            <Image src={Logo} />
          </DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />

            <Stack
              fontSize={"md"}
              color={"#071c1f"}
              fontWeight={"600"}
              gap={5}
              direction={"column"}
              pt={5}
            >
              <Link
                _hover={{
                  textDecoration: "none",
                  color: "#38A169",
                }}
                onClick={() => router.push("/")}
              >
                Home
              </Link>
              <Link
                _hover={{
                  textDecoration: "none",
                  color: "#38A169",
                }}
                onClick={() => router.push("/About")}
              >
                About
              </Link>
              <Link
                _hover={{
                  textDecoration: "none",
                  color: "#38A169",
                }}
                onClick={() => router.push("/Services")}
              >
                Services
              </Link>
              <Link
                _hover={{
                  textDecoration: "none",
                  color: "#38A169",
                }}
                onClick={() => router.push("/Properties")}
              >
                Properties
              </Link>
              <Link
                _hover={{
                  textDecoration: "none",
                  color: "#38A169",
                }}
                onClick={() => router.push("/ContactUs")}
              >
                Contact Us
              </Link>
              <Link
                _hover={{
                  textDecoration: "none",
                  color: "#38A169",
                }}
                onClick={() => router.push("/SignIn")}
              >
                Login
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Drawers;
