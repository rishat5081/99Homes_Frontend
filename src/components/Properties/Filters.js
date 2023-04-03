import React, { useState, useEffect } from "react";
import {
  Stack,
  Heading,
  Checkbox,
  Text,
  Divider,
} from "@chakra-ui/react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";

const Filters = ({ callAPI }) => {
  const [commercial, setcommercial] = useState("");
  const [residential, setresidential] = useState("");
  const [upperPortion, setupperPortion] = useState("");
  const [lowerportion, setlowerportion] = useState("");
  const [allportion, setallportion] = useState("");
  const [rent, setrent] = useState("");
  const [sale, setsale] = useState("");

  const changeHandler = async () => {
    const param = `purpose=${rent}&purpose=${sale}&catogary=${commercial}&catogary=${residential}&portion=${upperPortion}&portion=${lowerportion}&portion=${allportion}`;
    callAPI(param);
  };

  useEffect(() => {
    changeHandler();
  }, [
    rent,
    sale,
    commercial,
    residential,
    upperPortion,
    lowerportion,
    allportion,
  ]);

  return (
    <Stack width={{ base: "100%", lg: "30%" }}>
      <Heading fontSize={"xl"} fontWeight={"bold"}>
        Advance Information
      </Heading>
      <Text fontSize={"sm"} fontWeight={"600"} color={"#5c727d"}>
        About 9,620 results (0.62 seconds)
      </Text>
      <Stack border={"2px solid #ededed"} p={10} gap={5}>
        <Stack gap={3}>
          <Heading fontSize={"lg"}>Category</Heading>
          <Stack gap={2}>
            <Stack>
              <Checkbox
                colorScheme="green"
                onChange={(e) =>
                  e.target.checked
                    ? setcommercial("commercial")
                    : setcommercial("")
                }
                defaultChecked={false}
              >
                <Text fontSize={"sm"} fontWeight={"600"} color={"#5c727d"}>
                  Commercial
                </Text>
              </Checkbox>
            </Stack>
            <Stack>
              <Checkbox
                colorScheme="green"
                onChange={(e) =>
                  e.target.checked
                    ? setresidential("residential")
                    : setresidential("")
                }
                defaultChecked={false}
              >
                <Text fontSize={"sm"} fontWeight={"600"} color={"#5c727d"}>
                  Residential
                </Text>
              </Checkbox>
            </Stack>
          </Stack>
          <Divider />
        </Stack>

        <Stack gap={3}>
          <Heading fontSize={"lg"}>Portion</Heading>
          <Stack gap={2}>
            <Stack>
              <Checkbox
                colorScheme="green"
                onChange={(e) =>
                  e.target.checked
                    ? setupperPortion("upperPortion")
                    : setupperPortion("")
                }
                defaultChecked={false}
              >
                <Text fontSize={"sm"} fontWeight={"600"} color={"#5c727d"}>
                  Upper-Portion
                </Text>
              </Checkbox>
            </Stack>
            <Stack>
              <Checkbox
                colorScheme="green"
                onChange={(e) =>
                  e.target.checked
                    ? setlowerportion("lowerportion")
                    : setlowerportion("")
                }
                defaultChecked={false}
              >
                <Text fontSize={"sm"} fontWeight={"600"} color={"#5c727d"}>
                  Lower-Portion
                </Text>
              </Checkbox>
            </Stack>
            <Stack>
              <Checkbox
                colorScheme="green"
                onChange={(e) =>
                  e.target.checked
                    ? setallportion("allportion")
                    : setallportion("")
                }
                defaultChecked={false}
              >
                <Text fontSize={"sm"} fontWeight={"600"} color={"#5c727d"}>
                  All-Portion
                </Text>
              </Checkbox>
            </Stack>
          </Stack>
          <Divider />
        </Stack>
        <Stack gap={3}>
          <Heading fontSize={"lg"}>Purpose</Heading>
          <Stack gap={2}>
            <Stack>
              <Checkbox
                colorScheme="green"
                onChange={(e) =>
                  e.target.checked ? setrent("rent") : setrent("")
                }
                defaultChecked={false}
              >
                <Text fontSize={"sm"} fontWeight={"600"} color={"#5c727d"}>
                  Renting
                </Text>
              </Checkbox>
            </Stack>
            <Stack>
              <Checkbox
                colorScheme="green"
                onChange={(e) =>
                  e.target.checked ? setsale("sale") : setsale("")
                }
                defaultChecked={false}
              >
                <Text fontSize={"sm"} fontWeight={"600"} color={"#5c727d"}>
                  Selling
                </Text>
              </Checkbox>
            </Stack>
          </Stack>
          <Divider />
        </Stack>
        <Stack gap={3}>
          <Heading fontSize={"lg"}>Price Renge</Heading>
          <Stack gap={2}>
            <Stack>
              <RangeSlider
                defaultValue={[120, 240]}
                min={0}
                max={500}
                step={30}
              >
                <RangeSliderTrack bg="black">
                  <RangeSliderFilledTrack bg="green" />
                </RangeSliderTrack>
                <RangeSliderThumb boxSize={6} index={0} />
                <RangeSliderThumb boxSize={6} index={1} />
              </RangeSlider>
            </Stack>
          </Stack>
          <Divider />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default React.memo(Filters);
