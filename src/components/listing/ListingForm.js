import React, { useState,useEffect } from "react";
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
import { AiOutlineArrowDown } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import { RiMapPinLine } from "react-icons/ri";
import { cityArray } from "../../utils/cities/Cities";
import { useRouter } from "next/router";
import axios from "axios";

const ListingForm = () => {
  const router = useRouter();
  const [purposeData, setpurposeData] = useState();
  const [cityData, setcityData] = useState();
  const [locationData, setlocationData] = useState();
  const [areaData, setareaData] = useState();
  const [unittypeData, setunittypeData] = useState();
  const [roomData, setroomData] = useState("0");
  const [catogaryData, setcatogaryData] = useState();
  const [priceData, setpriceData] = useState();
  const [priceUnitData, setpriceUnitData] = useState();
  const [descriptionData, setdescriptionData] = useState();
  const [fileData, setfileData] = useState();
  const [typeData, settypeData] = useState();
  const [floorData, setfloorData] = useState("0");
  const [bathData, setbathData] = useState("0");
  const [checkboxData, setcheckboxData] = useState(false);
  const [portionData, setportionData] = useState("");
  const [kichanData, setkichanData] = useState("0");
  const [garageData, setgarageData] = useState("0");
  const [loading, setloading] = useState(false);
  const [isSuccess, setisSuccess] = useState(null);
  const [error, seterror] = useState(null);



  const submitHandler = async (e) => {
    e.preventDefault();
    const payload = {
      "id" : router.query._id,
      "purpose": purposeData,
      "city": cityData,
      "location" : locationData,
      "area": areaData,
      "areaUnit": unittypeData,
      "rooms": roomData,
      "bath": bathData,
      "garage": garageData,
      "portion": portionData,
      "category": catogaryData,
      "numb_of_floors": floorData,
      "price": priceData,
      "priceUnit": priceUnitData,
      "isFurnished": checkboxData,
      "kitchen": kichanData,
      "type": typeData,
      "discription": descriptionData,
    }
  
    try {
      setloading(true);
      await axios.post("/edit_property", payload );

      setisSuccess("Successfully Edited");
    } catch (error) {
      seterror(error.message);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
   setpurposeData(router.query.purpose)
   setcityData(router.query.city)
   setlocationData(router.query.location)
   setareaData(router.query.area)
   setunittypeData(router.query.areaUnit)
   setroomData(router.query.rooms)
   setcatogaryData(router.query.category)
   setpriceData(router.query.price)
   setpriceUnitData(router.query.priceUnit)
   setdescriptionData(router.query.discription)
   settypeData(router.query.type)
   setfloorData(router.query.numb_of_floors)
   setbathData(router.query.bath)
   setcheckboxData(router.query.sFurnished)
   setportionData(router.query.portion)
   setkichanData(router.query.kichan)
   setgarageData(router.query.garage)
  }, [])
  

  return (
    <Stack width={"full"} p={{ base: "4", md: "20" }}>
      <Stack boxShadow={"md"} p={{ base: "4", md: "10" }} gap={5}>
        <Alert status="success" display={isSuccess ? "inherit" : "none"}>
          <AlertIcon />
          <Box>
            <AlertDescription>{isSuccess}</AlertDescription>
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
        <Alert status="error" display={error ? "inherit" : "none"}>
          <AlertIcon />
          <Box>
            <AlertDescription>{error}</AlertDescription>
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

        <Heading
          fontSize={"2xl"}
          color={"#071c1f"}
          borderLeft={"2px solid #38A169"}
        >
          <chakra.span ml={2}>Get A Details</chakra.span>
        </Heading>
        <Stack gap={5}>
          <Stack direction={{ base: "column", md: "row" }} gap={5}>
            <Stack width={{ base: "100%", md: "50%" }}>
              <FormLabel fontSize={"xs"}>PURPOSE</FormLabel>
              <Select
                h={"50px"}
                borderRadius={"none"}
                fontSize={"sm"}
                _focus={{
                  boxShadow: "green",
                  border: "1px solid green",
                }}
                placeholder="Purpose"
                icon={<AiOutlineArrowDown color="green" />}
                value={purposeData}
                onChange={(e) => setpurposeData(e.target.value)}
              >
              
                <option value="sale">Sale </option>
                <option value="rent">Rent </option>
              </Select>
            </Stack>
            <Stack width={{ base: "100%", md: "50%" }}>
              <FormLabel fontSize={"xs"}>CITY</FormLabel>
              <Select
                h={"50px"}
                borderRadius={"none"}
                fontSize={"sm"}
                _focus={{
                  boxShadow: "green",
                  border: "1px solid green",
                }}
                placeholder="City"
                icon={<AiOutlineArrowDown color="green" />}
                value={cityData}
                onChange={(e) => setcityData(e.target.value)}
              >
                {cityArray.map((ele, ind) => (
                  <option value={ele.name}>{ele.name}</option>
                ))}
              </Select>
            </Stack>
          </Stack>
          <Stack direction={{ base: "column", md: "row" }} gap={5}>
            <Stack width={{ base: "100%", md: "50%" }}>
              <FormControl>
                <FormLabel fontSize={"xs"}>PRICE</FormLabel>
                <Stack direction={"row"} spacing={0}>
                  <Select
                    placeholder="Currecy"
                    width={{ base: "100%", md: "30%" }}
                    h={"50px"}
                    borderRadius={"none"}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={priceUnitData}
                    onChange={(e) => setpriceUnitData(e.target.value)}
                  >
                    <option value="PKR">PKR </option>
                    <option value="USD">USD </option>
                    <option value="EURO">EURO </option>
                    <option value="GBP">GBP </option>
                  </Select>
                  <Input
                    placeholder="Price"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={priceData}
                    onChange={(e) => setpriceData(e.target.value)}
                  />
                </Stack>
              </FormControl>
            </Stack>
            <Stack width={{ base: "100%", md: "50%" }}>
              <FormControl>
                <FormLabel fontSize={"xs"}>AREA</FormLabel>
                <Stack direction={"row"} spacing={0}>
                  <Select
                    h={"50px"}
                    borderRadius={"none"}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    width={{ base: "100%", md: "50%" }}
                    placeholder="Area Unit"
                    icon={<AiOutlineArrowDown color="green" />}
                    value={unittypeData}
                    onChange={(e) => setunittypeData(e.target.value)}
                  >
                    <option value="marla">MARLA </option>
                    <option value="kanal">KANAL </option>
                    <option value="square-feet">Square Feet </option>
                    <option value="sqaure-yard">Square Yards </option>
                  </Select>
                  <Input
                    placeholder="Size (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={areaData}
                    onChange={(e) => setareaData(e.target.value)}
                  />
                </Stack>
              </FormControl>
            </Stack>
          </Stack>
          <Stack direction={{ base: "column", md: "row" }} gap={5}>
            <Stack width={{ base: "100%", md: "100%" }}>
              <FormLabel fontSize={"xs"}>LOCATION</FormLabel>
              <InputGroup>
                <Input
                  borderRadius={"none"}
                  p={6}
                  fontSize={"sm"}
                  placeholder="Location"
                  _focus={{
                    boxShadow: "green",
                    border: "1px solid green",
                  }}
                  value={locationData}
                  onChange={(e) => setlocationData(e.target.value)}
                />
                <InputRightElement
                  mt={1}
                  children={<RiMapPinLine color="green" />}
                />
              </InputGroup>
            </Stack>
          </Stack>
          <Stack direction={{ base: "column", md: "row" }} gap={5}>
            <Stack width={{ base: "100%", md: "50%" }}>
              <FormLabel fontSize={"xs"}>CATOGARY</FormLabel>
              <Select
                h={"50px"}
                borderRadius={"none"}
                fontSize={"sm"}
                _focus={{
                  boxShadow: "green",
                  border: "1px solid green",
                }}
                placeholder="Catogary"
                icon={<AiOutlineArrowDown color="green" />}
                value={catogaryData}
                onChange={(e) => setcatogaryData(e.target.value)}
              >
                <option value={"commercial"}>Commercial</option>
                <option value={"residential"}>Residetial</option>
              </Select>
            </Stack>

            {catogaryData == "commercial" ? (
              <Stack width={{ base: "100%", md: "50%" }}>
                <FormLabel fontSize={"xs"}>PROPERTY TYPE</FormLabel>
                <Select
                  h={"50px"}
                  borderRadius={"none"}
                  fontSize={"sm"}
                  _focus={{
                    boxShadow: "green",
                    border: "1px solid green",
                  }}
                  placeholder="Commercial Property type"
                  icon={<AiOutlineArrowDown color="green" />}
                  value={typeData}
                  onChange={(e) => settypeData(e.target.value)}
                >
                  <option value="office">OFFICE </option>
                  <option value="plaza">PLAZA </option>
                  <option value="shop">SHOP </option>
                  <option value="plots">PLOTS </option>
                </Select>
              </Stack>
            ) : (
              <Stack width={{ base: "100%", md: "50%" }}>
                <FormLabel fontSize={"xs"}>PROPERTY TYPE</FormLabel>
                <Select
                  h={"50px"}
                  borderRadius={"none"}
                  fontSize={"sm"}
                  _focus={{
                    boxShadow: "green",
                    border: "1px solid green",
                  }}
                  placeholder="Residetial Property type"
                  icon={<AiOutlineArrowDown color="green" />}
                  value={typeData}
                  onChange={(e) => settypeData(e.target.value)}
                >
                  <option value="house">HOUSE </option>
                  <option value="apartment">APARTMENT </option>
                  <option value="studio">STUDIO </option>
                  <option value="bunglow">BUNGALOW </option>
                  <option value="plots">PLOTS </option>
                  <option value="co-living">CO-LIVING </option>
                </Select>
              </Stack>
            )}
          </Stack>

          {typeData == "office" ? (
            <Stack>
              <Stack direction={{ base: "column", md: "row" }} gap={5}>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>ROOMS</FormLabel>
                  <Input
                    placeholder="Rooms (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={roomData}
                    onChange={(e) => setroomData(e.target.value)}
                  />
                </Stack>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>BATH</FormLabel>
                  <Input
                    placeholder="Bath (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={bathData}
                    onChange={(e) => setbathData(e.target.value)}
                  />
                </Stack>
              </Stack>
              <Stack direction={{ base: "column", md: "row" }} gap={5}>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>FLOORS</FormLabel>
                  <Input
                    placeholder="Floors (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={floorData}
                    onChange={(e) => setfloorData(e.target.value)}
                  />
                </Stack>
                <Stack
                  width={{ base: "100%", md: "50%" }}
                  justifyContent={"center"}
                >
                  <FormLabel fontSize={"xs"}>OFFICE/PLAZA/SHOP</FormLabel>

                  <CheckboxGroup colorScheme="green" value={checkboxData}>
                    <Stack spacing={[1, 5]} direction={["column", "row"]}>
                      <Checkbox
                        onChange={(e) => setcheckboxData(e.target.checked)}
                        isChecked={checkboxData[0]}
                      >
                        FURNISH
                      </Checkbox>
                      <Checkbox
                        onChange={(e) => setcheckboxData(e.target.checked)}
                        isChecked={checkboxData[1]}
                      >
                        NON-FURNISH
                      </Checkbox>
                    </Stack>
                  </CheckboxGroup>
                </Stack>
              </Stack>
            </Stack>
          ) : typeData == "plaza" ? (
            <Stack>
              <Stack direction={{ base: "column", md: "row" }} gap={5}>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>ROOMS</FormLabel>
                  <Input
                    placeholder="Rooms (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={roomData}
                    onChange={(e) => setroomData(e.target.value)}
                  />
                </Stack>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>BATH</FormLabel>
                  <Input
                    placeholder="Bath (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={bathData}
                    onChange={(e) => setbathData(e.target.value)}
                  />
                </Stack>
              </Stack>
              <Stack direction={{ base: "column", md: "row" }} gap={5}>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>FLOORS</FormLabel>
                  <Input
                    placeholder="Floors (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={floorData}
                    onChange={(e) => setfloorData(e.target.value)}
                  />
                </Stack>
                <Stack
                  width={{ base: "100%", md: "50%" }}
                  justifyContent={"center"}
                >
                  <FormLabel fontSize={"xs"}>OFFICE/PLAZA/SHOP</FormLabel>

                  <CheckboxGroup colorScheme="green" value={checkboxData}>
                    <Stack spacing={[1, 5]} direction={["column", "row"]}>
                      <Checkbox
                        onChange={(e) => setcheckboxData(e.target.checked)}
                        isChecked={checkboxData[0]}
                      >
                        FURNISH
                      </Checkbox>
                      <Checkbox
                        onChange={(e) => setcheckboxData(e.target.checked)}
                        isChecked={checkboxData[1]}
                      >
                        NON-FURNISH
                      </Checkbox>
                    </Stack>
                  </CheckboxGroup>
                </Stack>
              </Stack>
            </Stack>
          ) : typeData == "shop" ? (
            <Stack>
              <Stack direction={{ base: "column", md: "row" }} gap={5}>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>ROOMS</FormLabel>
                  <Input
                    placeholder="Rooms (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={roomData}
                    onChange={(e) => setroomData(e.target.value)}
                  />
                </Stack>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>BATH</FormLabel>
                  <Input
                    placeholder="Bath (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={bathData}
                    onChange={(e) => setbathData(e.target.value)}
                  />
                </Stack>
              </Stack>
              <Stack direction={{ base: "column", md: "row" }} gap={5}>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>FLOORS</FormLabel>
                  <Input
                    placeholder="Floors (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={floorData}
                    onChange={(e) => setfloorData(e.target.value)}
                  />
                </Stack>
                <Stack
                  width={{ base: "100%", md: "50%" }}
                  justifyContent={"center"}
                >
                  <FormLabel fontSize={"xs"}>OFFICE/PLAZA/SHOP</FormLabel>

                  <CheckboxGroup colorScheme="green" value={checkboxData}>
                    <Stack spacing={[1, 5]} direction={["column", "row"]}>
                      <Checkbox
                        onChange={(e) => setcheckboxData(e.target.checked)}
                        isChecked={checkboxData[0]}
                      >
                        FURNISH
                      </Checkbox>
                      <Checkbox
                        onChange={(e) => setcheckboxData(e.target.checked)}
                        isChecked={checkboxData[1]}
                      >
                        NON-FURNISH
                      </Checkbox>
                    </Stack>
                  </CheckboxGroup>
                </Stack>
              </Stack>
            </Stack>
          ) : (
            ""
          )}

          {typeData == "house" ? (
            <Stack>
              <Stack direction={{ base: "column", md: "row" }} gap={5}>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>ROOMS</FormLabel>
                  <Input
                    placeholder="Rooms (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={roomData}
                    onChange={(e) => setroomData(e.target.value)}
                  />
                </Stack>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>BATH</FormLabel>
                  <Input
                    placeholder="Bath (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={bathData}
                    onChange={(e) => setbathData(e.target.value)}
                  />
                </Stack>
              </Stack>
              <Stack direction={{ base: "column", md: "row" }} gap={5}>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>KITCHAN</FormLabel>
                  <Input
                    placeholder="Kichan (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={kichanData}
                    onChange={(e) => setkichanData(e.target.value)}
                  />
                </Stack>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>GARAGE</FormLabel>
                  <Input
                    placeholder="Garage (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={garageData}
                    onChange={(e) => setgarageData(e.target.value)}
                  />
                </Stack>
              </Stack>
              <Stack direction={{ base: "column", md: "row" }} gap={5}>
                <Stack width={{ base: "100%", md: "100%" }}>
                  <FormLabel fontSize={"xs"}>PORTION</FormLabel>
                  <Select
                    h={"50px"}
                    borderRadius={"none"}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    placeholder="Portion"
                    icon={<AiOutlineArrowDown color="green" />}
                    value={portionData}
                    onChange={(e) => setportionData(e.target.value)}
                  >
                    <option value="upper-portion">Upper Portion </option>
                    <option value="lower-portion">Lower Portion </option>
                    <option value="all-portion">All Portion </option>
                  </Select>
                </Stack>
              </Stack>
            </Stack>
          ) : typeData == "apartment" ? (
            <Stack>
              <Stack direction={{ base: "column", md: "row" }} gap={5}>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>ROOMS</FormLabel>
                  <Input
                    placeholder="Rooms (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={roomData}
                    onChange={(e) => setroomData(e.target.value)}
                  />
                </Stack>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>BATH</FormLabel>
                  <Input
                    placeholder="Bath (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={bathData}
                    onChange={(e) => setbathData(e.target.value)}
                  />
                </Stack>
              </Stack>
              <Stack direction={{ base: "column", md: "row" }} gap={5}>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>KITCHAN</FormLabel>
                  <Input
                    placeholder="Kichan (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={kichanData}
                    onChange={(e) => setkichanData(e.target.value)}
                  />
                </Stack>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>GARAGE</FormLabel>
                  <Input
                    placeholder="Garage (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={garageData}
                    onChange={(e) => setgarageData(e.target.value)}
                  />
                </Stack>
              </Stack>
              <Stack direction={{ base: "column", md: "row" }} gap={5}>
                <Stack width={{ base: "100%", md: "100%" }}>
                  <FormLabel fontSize={"xs"}>PORTION</FormLabel>
                  <Select
                    h={"50px"}
                    borderRadius={"none"}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    placeholder="Portion"
                    icon={<AiOutlineArrowDown color="green" />}
                    value={portionData}
                    onChange={(e) => setportionData(e.target.value)}
                  >
                    <option value="upper-portion">Upper Portion </option>
                    <option value="lower-portion">Lower Portion </option>
                    <option value="all-portion">All Portion </option>
                  </Select>
                </Stack>
              </Stack>
            </Stack>
          ) : typeData == "studio" ? (
            <Stack>
              <Stack direction={{ base: "column", md: "row" }} gap={5}>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>ROOMS</FormLabel>
                  <Input
                    placeholder="Rooms (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={roomData}
                    onChange={(e) => setroomData(e.target.value)}
                  />
                </Stack>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>BATH</FormLabel>
                  <Input
                    placeholder="Bath (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={bathData}
                    onChange={(e) => setbathData(e.target.value)}
                  />
                </Stack>
              </Stack>
              <Stack direction={{ base: "column", md: "row" }} gap={5}>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>KITCHAN</FormLabel>
                  <Input
                    placeholder="Kichan (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={kichanData}
                    onChange={(e) => setkichanData(e.target.value)}
                  />
                </Stack>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>GARAGE</FormLabel>
                  <Input
                    placeholder="Garage (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={garageData}
                    onChange={(e) => setgarageData(e.target.value)}
                  />
                </Stack>
              </Stack>
              <Stack direction={{ base: "column", md: "row" }} gap={5}>
                <Stack width={{ base: "100%", md: "100%" }}>
                  <FormLabel fontSize={"xs"}>PORTION</FormLabel>
                  <Select
                    h={"50px"}
                    borderRadius={"none"}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    placeholder="Portion"
                    icon={<AiOutlineArrowDown color="green" />}
                    value={portionData}
                    onChange={(e) => setportionData(e.target.value)}
                  >
                    <option value="upper-portion">Upper Portion </option>
                    <option value="lower-portion">Lower Portion </option>
                    <option value="all-portion">All Portion </option>
                  </Select>
                </Stack>
              </Stack>
            </Stack>
          ) : typeData == "bunglow" ? (
            <Stack>
              <Stack direction={{ base: "column", md: "row" }} gap={5}>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>ROOMS</FormLabel>
                  <Input
                    placeholder="Rooms (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={roomData}
                    onChange={(e) => setroomData(e.target.value)}
                  />
                </Stack>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>BATH</FormLabel>
                  <Input
                    placeholder="Bath (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={bathData}
                    onChange={(e) => setbathData(e.target.value)}
                  />
                </Stack>
              </Stack>
              <Stack direction={{ base: "column", md: "row" }} gap={5}>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>KITCHAN</FormLabel>
                  <Input
                    placeholder="Kichan (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={kichanData}
                    onChange={(e) => setkichanData(e.target.value)}
                  />
                </Stack>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>GARAGE</FormLabel>
                  <Input
                    placeholder="Garage (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={garageData}
                    onChange={(e) => setgarageData(e.target.value)}
                  />
                </Stack>
              </Stack>
              <Stack direction={{ base: "column", md: "row" }} gap={5}>
                <Stack width={{ base: "100%", md: "100%" }}>
                  <FormLabel fontSize={"xs"}>PORTION</FormLabel>
                  <Select
                    h={"50px"}
                    borderRadius={"none"}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    placeholder="Portion"
                    icon={<AiOutlineArrowDown color="green" />}
                    value={portionData}
                    onChange={(e) => setportionData(e.target.value)}
                  >
                    <option value="upper-portion">Upper Portion </option>
                    <option value="lower-portion">Lower Portion </option>
                    <option value="all-portion">All Portion </option>
                  </Select>
                </Stack>
              </Stack>
            </Stack>
          ) : typeData == "co-living" ? (
            <Stack>
              <Stack direction={{ base: "column", md: "row" }} gap={5}>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>ROOMS</FormLabel>
                  <Input
                    placeholder="Rooms (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={roomData}
                    onChange={(e) => setroomData(e.target.value)}
                  />
                </Stack>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>BATH</FormLabel>
                  <Input
                    placeholder="Bath (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={bathData}
                    onChange={(e) => setbathData(e.target.value)}
                  />
                </Stack>
              </Stack>
              <Stack direction={{ base: "column", md: "row" }} gap={5}>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>KITCHAN</FormLabel>
                  <Input
                    placeholder="Kichan (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={kichanData}
                    onChange={(e) => setkichanData(e.target.value)}
                  />
                </Stack>
                <Stack width={{ base: "100%", md: "50%" }}>
                  <FormLabel fontSize={"xs"}>GARAGE</FormLabel>
                  <Input
                    placeholder="Garage (*only numbers)"
                    type="number"
                    borderRadius={"none"}
                    p={6}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    value={garageData}
                    onChange={(e) => setgarageData(e.target.value)}
                  />
                </Stack>
              </Stack>
              <Stack direction={{ base: "column", md: "row" }} gap={5}>
                <Stack width={{ base: "100%", md: "100%" }}>
                  <FormLabel fontSize={"xs"}>PORTION</FormLabel>
                  <Select
                    h={"50px"}
                    borderRadius={"none"}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    placeholder="Portion"
                    icon={<AiOutlineArrowDown color="green" />}
                    value={portionData}
                    onChange={(e) => setportionData(e.target.value)}
                  >
                    <option value="upper-portion">Upper Portion </option>
                    <option value="lower-portion">Lower Portion </option>
                    <option value="all-portion">All Portion </option>
                  </Select>
                </Stack>
              </Stack>
            </Stack>
          ) : (
            ""
          )}

          <Stack direction={{ base: "column", md: "row" }} gap={5}>
            <Stack width={{ base: "100%", md: "100%" }}>
              <FormLabel fontSize={"xs"}>DESCRIPTION</FormLabel>
              <InputGroup>
                <Textarea
                  borderRadius={"none"}
                  p={6}
                  fontSize={"sm"}
                  placeholder="Description"
                  _focus={{
                    boxShadow: "green",
                    border: "1px solid green",
                  }}
                  value={descriptionData}
                  onChange={(e) => setdescriptionData(e.target.value)}
                />
                <InputRightElement
                  mt={1}
                  children={<FaPencilAlt color="green" />}
                />
              </InputGroup>
            </Stack>
          </Stack>
          <Stack direction={{ base: "column", md: "row" }} gap={5}>
            <Stack width={{ base: "100%", md: "100%" }} gap={5}>
              <Stack>
                <FormLabel fontSize={"xs"}>IMAGE</FormLabel>
                <InputGroup>
                  <Input
                    multiple={true}
                    type={"file"}
                    borderRadius={"none"}
                    h={"50px"}
                    p={2}
                    fontSize={"sm"}
                    _focus={{
                      boxShadow: "green",
                      border: "1px solid green",
                    }}
                    onChange={(e) => setfileData(e.target.files[0])}
                  />
                </InputGroup>
              </Stack>

              <Stack alignItems={"center"}>
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
                  Edit Property
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ListingForm;
