import React, { useState } from "react";
import {
  Stack,
  Heading,
  chakra,
  InputGroup,
  Input,
  InputRightElement,
  Select,
  Button,
  Textarea,
  FormLabel,
  Checkbox,
  CheckboxGroup,
  FormControl,
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  CloseButton,
  Spacer,
} from "@chakra-ui/react";
import { HStack, VStack, PinInput, PinInputField } from "@chakra-ui/react";
import { FaRegEye, FaRegEyeSlash, FaUserAlt} from "react-icons/fa";
import axios from "axios";

const ChangePassword = () => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show)
    const [loading, setloading] = useState(false);
    const [isSuccess, setisSuccess] = useState(null);
    const [error, seterror] = useState(null);
    const [number, setnumber] = useState();
    const [oldPassword, setoldPassword] = useState();
    const [newPassword, setnewPassword] = useState();
    const [oldPin, setoldPin] = useState();
    const [newPin, setnewPin] = useState();

    const submitHandler =  async (e) => {
      e.preventDefault();
     const payload = {
        "oldPassword" : oldPassword,
        "newPassword": newPassword,
        "oldPin": oldPin,
        "newPin": newPin,
        "phoneNumber": number,
    }
      try {
        setloading(true);
        await axios.post("/reset", payload);
        setisSuccess('Successfully Submitted');
      } catch (error) {
        seterror(error.response.data.error);
      } finally {
        setloading(false);
      }
    };
   
  return (
    <Stack width={"full"}>
      <Stack boxShadow={"md"} p={{ base: "4", md: "10" }} gap={5}>
        <Heading
          fontSize={"2xl"}
          color={"#071c1f"}
          borderLeft={"2px solid #38A169"}
        >
          <chakra.span ml={2}>Change Password</chakra.span>
        </Heading>
        <VStack p={4} gap={4} boxShadow={"md"}>
        <Alert  status="success"
        display={isSuccess ? 'inherit' : 'none'}
        >
          <AlertIcon />
          <Box>
            <AlertDescription>
              {isSuccess}
            </AlertDescription>
          </Box>
          <Spacer />
          <CloseButton
            alignSelf="flex-start"
            position="relative"
            right={-1}
            top={-1}
            onClick={() => setisSuccess()}
          />
        </Alert>
        <Alert  status="error"
        display={error ? 'inherit' : 'none'}
        >
          <AlertIcon />
          <Box>
            <AlertDescription>
              {error}
            </AlertDescription>
          </Box>
          <Spacer />
          <CloseButton
            alignSelf="flex-start"
            position="relative"
            right={-1}
            top={-1}
            onClick={() => seterror()}
          />
        </Alert>
        <Stack width={{ base: "100%", md: "50%" }}>
          <FormLabel fontSize={"xs"}>Phone</FormLabel>
          <InputGroup>
            <Input
              borderRadius={"none"}
              p={6}
              fontSize={"sm"}
              placeholder="Phone Number"
              _focus={{
                boxShadow: "green",
                border: "1px solid green",
              }}
              type={"number"}
              value={number}
              onChange={(e) => setnumber(e.target.value)}
            />
            <InputRightElement mt={1} children={<FaUserAlt color="green" />} />
          </InputGroup>
        </Stack>

          <Stack width={{ base: "100%", md: "50%" }}>
            <FormLabel fontSize={"xs"}>OLD Password</FormLabel>
            <InputGroup>
              <Input
                borderRadius={"none"}
                p={6}
                fontSize={"sm"}
                type={show ? "text" : "password"}
                placeholder="Old Password"
                _focus={{
                  boxShadow: "green",
                  border: "1px solid green",
                }}
                value={oldPassword}
                onChange={(e) => setoldPassword(e.target.value)}
              />
              <InputRightElement pt={2}>
                {show ? (
                  <FaRegEye color={"green"} onClick={() => handleClick()} />
                ) : (
                  <FaRegEyeSlash
                    color={"green"}
                    onClick={() => handleClick()}
                  />
                )}
              </InputRightElement>
            </InputGroup>
          </Stack>

          <Stack width={{ base: "100%", md: "50%" }}>
            <FormLabel fontSize={"xs"}>New Password</FormLabel>
            <InputGroup>
              <Input
                borderRadius={"none"}
                p={6}
                fontSize={"sm"}
                type={show ? "text" : "password"}
                placeholder="New Password"
                _focus={{
                  boxShadow: "green",
                  border: "1px solid green",
                }}
                value={newPassword}
                onChange={(e) => setnewPassword(e.target.value)}
              />
              <InputRightElement pt={2}>
                {show ? (
                  <FaRegEye color={"green"} onClick={() => handleClick()} />
                ) : (
                  <FaRegEyeSlash
                    color={"green"}
                    onClick={() => handleClick()}
                  />
                )}
              </InputRightElement>
            </InputGroup>
          </Stack>

          

          <Stack width={{ base: "100%", md: "50%" }}>
            <FormControl>
              <FormLabel fontSize={"xs"}>OLD PIN</FormLabel>
              <HStack>
                <PinInput size="lg" onChange={setoldPin}>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </FormControl>
          </Stack>

          <Stack width={{ base: "100%", md: "50%" }}>
            <FormControl>
              <FormLabel fontSize={"xs"}>NEW PIN</FormLabel>
              <HStack>
                <PinInput size="lg" onChange={setnewPin}>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </FormControl>
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
              onClick={submitHandler}
              isLoading={loading}
            >
              Save Changes
            </Button>
          </Stack>
        </VStack>
      </Stack>
    </Stack>
  );
};

export default ChangePassword;
