import React,{ useState } from "react";
import {
  Stack,
  Heading,
  HStack,
  VStack,
  InputGroup,
  FormLabel,
  Input,
  Button,
  PinInput,
  PinInputField,
  FormControl,
  InputRightElement,
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  CloseButton,
  Spacer,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaRegEye, FaRegEyeSlash, FaUserAlt } from "react-icons/fa";
import axios from "axios";

const SignIn = () => {
  const router = useRouter();
  const [show, setShow] = React.useState(false);
  const [loading, setloading] = useState(false);
  const [isSuccess, setisSuccess] = useState(null);
  const [error, seterror] = useState(null);
  const handleClick = () => setShow(!show);
  const [resdata, setresdata] = useState()
  
  const [number, setnumber] = useState();
  const [password, setpassword] = useState();
  const [pin, setpin] = useState();
  const submitHandler =  async (e) => {
    if(number && password && pin != ""){
    e.preventDefault();
   const payload = {
      "password": password,
      "pin": pin,
      "phoneNumber": number,
  }
    try {
      setloading(true);
     const login =  await axios.post("/signin", payload);
     localStorage.setItem("currentUsertoken", login.data.token);
     setresdata(login?.data)
     setisSuccess('Successfully Submitted');
     router.push({ pathname: "/Dashboard",})
    } catch (error) {
      seterror(error.response.data.error);
    } finally {
      setloading(false);
    }
  }else{
    seterror("Please Enter Correct Email or password")
  }
  };
  return (
    <Stack width={"full"} p={{ base: "5", md: "10" }}>
      <VStack p={4} gap={4} boxShadow={"md"}>
        <Heading
          color={"#071c1f"}
          fontSize={{ base: "3xl", md: "40px" }}
          fontWeight={"bold"}
        >
          Sign In
        </Heading>
        <Heading
          color={"#071c1f"}
          fontSize={{ base: "3xl", md: "40px" }}
          fontWeight={"bold"}
        >
          To Your Account
        </Heading>

        <Stack width={{ base: "100%", md: "40%" }}>
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

        <Stack width={{ base: "100%", md: "40%" }}>
          <FormLabel fontSize={"xs"}>Password</FormLabel>
          <InputGroup>
            <Input
              borderRadius={"none"}
              p={6}
              fontSize={"sm"}
              type={show ? "text" : "password"}
              placeholder="Enter Password"
              _focus={{
                boxShadow: "green",
                border: "1px solid green",
              }}
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <InputRightElement pt={2}>
              {show ? (
                <FaRegEye color={"green"} onClick={() => handleClick()} />
              ) : (
                <FaRegEyeSlash color={"green"} onClick={() => handleClick()} />
              )}
            </InputRightElement>
          </InputGroup>
        </Stack>

        <Stack width={{ base: "100%", md: "40%" }}>
          <FormControl>
            <FormLabel fontSize={"xs"}>PIN</FormLabel>
            <HStack>
              <PinInput
                size="lg"
                onChange={setpin}
              >
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
            SIGN IN
          </Button>
        </Stack>
      </VStack>
    </Stack>
  );
};

export default SignIn;
