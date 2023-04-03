import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Textarea,
  Stack,
  VStack,
  InputGroup,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { BsEnvelope } from "react-icons/bs";

const EmailModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        width={"100%"}
        border={"1px solid #38A169"}
        color={"#38A169"}
        bgColor={"transparent"}
        size="lg"
        borderRadius={"none"}
        fontWeight={"700"}
        fontSize={"sm"}
        _hover={{
          color: "black",
          bgColor: "transparent ",
          border: "1px solid black",
        }}
        textTransform={"uppercase"}
        leftIcon={<BsEnvelope size={20} />}
        onClick={onOpen}
      >
        Send Email
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Write Your Email</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack p={4} gap={2} boxShadow={"md"}>
              <Stack width={{ base: "100%", md: "100%" }}>
                <FormLabel fontSize={"xs"}>Email*</FormLabel>
                <InputGroup>
                  <Input
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    placeholder="Email"
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    type={"email"}
                  />
                </InputGroup>
              </Stack>

              <Stack width={{ base: "100%", md: "100%" }}>
                <FormLabel fontSize={"xs"}>Name*</FormLabel>
                <InputGroup>
                  <Input
                    type={"text"}
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    placeholder="Name"
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                  />
                </InputGroup>
              </Stack>

              <Stack width={{ base: "100%", md: "100%" }}>
                <FormLabel fontSize={"xs"}>Phone*</FormLabel>
                <InputGroup>
                  <Input
                    type={"number"}
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    placeholder="Phone Number"
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                  />
                </InputGroup>
              </Stack>

              <Stack width={{ base: "100%", md: "100%" }}>
                <FormLabel fontSize={"xs"}>Message*</FormLabel>
                <Textarea
                  borderRadius={"none"}
                  p={6}
                  fontSize={"sm"}
                  placeholder="Message"
                  _focus={{
                    boxShadow: "green",
                    border: "1px solid green",
                  }}
                />
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
                  fontSize={"sm"}
                  _hover={{
                    color: "black",
                    bgColor: "transparent ",
                    border: "1px solid black",
                  }}
                  textTransform={"uppercase"}
                >
                  Send
                </Button>
              </Stack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EmailModal;
