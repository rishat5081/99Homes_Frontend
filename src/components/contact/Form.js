import React from 'react';
import {
  Stack,
  Heading,
  chakra,
  InputGroup,
  Input,
  InputRightElement,
  Select,
  Textarea,
  Checkbox,
  Text,
  Button
} from '@chakra-ui/react';
import { FaUserAlt, FaPencilAlt } from 'react-icons/fa';
import { MdEmail, MdCall } from 'react-icons/md';
import { AiOutlineArrowDown } from 'react-icons/ai';

const Form = () => {
  return (
    <Stack width={'full'} p={{ base: '4', md: '20' }}>
      <Stack boxShadow={'md'} p={{ base: '4', md: '10' }} gap={5}>
        <Heading
          fontSize={'2xl'}
          color={'#071c1f'}
          borderLeft={'2px solid #38A169'}
        >
          <chakra.span ml={2}>Get A Quote</chakra.span>
        </Heading>
        <Stack gap={5}>
          <Stack direction={{ base: 'column', md: 'row' }} gap={5}>
            <Stack width={{ base: '100%', md: '50%' }}>
              <InputGroup>
                <Input
                  borderRadius={'none'}
                  p={6}
                  fontSize={'sm'}
                  placeholder="Enter your name"
                  _focus={{
                    boxShadow: 'green',
                    border: '1px solid green',
                  }}
                />
                <InputRightElement
                  mt={1}
                  children={<FaUserAlt color="green" />}
                />
              </InputGroup>
            </Stack>
            <Stack width={{ base: '100%', md: '50%' }}>
              <InputGroup>
                <Input
                  borderRadius={'none'}
                  p={6}
                  fontSize={'sm'}
                  placeholder="Enter email address"
                  _focus={{
                    boxShadow: 'green',
                    border: '1px solid green',
                  }}
                />
                <InputRightElement
                  mt={1}
                  children={<MdEmail color="green" />}
                />
              </InputGroup>
            </Stack>
          </Stack>
          <Stack direction={{ base: 'column', md: 'row' }} gap={5}>
            <Stack width={{ base: '100%', md: '50%' }}>
              <Select
                h={'50px'}
                borderRadius={'none'}
                fontSize={'sm'}
                _focus={{
                  boxShadow: 'green',
                  border: '1px solid green',
                }}
                placeholder="Select Service Type"
                icon={<AiOutlineArrowDown color="green" />}
              >
                <option value="option1">Property Management </option>
                <option value="option2">Mortgage Service </option>
                <option value="option3">Consulting Service</option>
                <option value="option4">Home Buying</option>
                <option value="option5">Home Selling</option>
                <option value="option6">Escrow Services</option>
              </Select>
            </Stack>
            <Stack width={{ base: '100%', md: '50%' }}>
              <InputGroup>
                <Input
                  borderRadius={'none'}
                  p={6}
                  fontSize={'sm'}
                  placeholder="Enter phone number"
                  _focus={{
                    boxShadow: 'green',
                    border: '1px solid green',
                  }}
                />
                <InputRightElement mt={1} children={<MdCall color="green" />} />
              </InputGroup>
            </Stack>
          </Stack>
          <Stack direction={{ base: 'column', md: 'row' }} gap={5}>
            <Stack width={{ base: '100%', md: '100%' }} gap={5}>
              <InputGroup>
                <Textarea
                  borderRadius={'none'}
                  p={6}
                  fontSize={'sm'}
                  placeholder="Enter message"
                  _focus={{
                    boxShadow: 'green',
                    border: '1px solid green',
                  }}
                />
                <InputRightElement
                  mt={1}
                  children={<FaPencilAlt color="green" />}
                />
              </InputGroup>

              <Stack>
                <Checkbox colorScheme="green">
                  <Text fontSize={'sm'}>
                    {' '}
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </Text>
                </Checkbox>
              </Stack>

              <Stack>
                <Button
                  width={'fit-content'}
                  border={'1px solid white'}
                  color={'white'}
                  bgColor={'#38A169'}
                  size="lg"
                  borderRadius={'none'}
                  fontWeight={'600'}
                  fontSize={'sm'}
                  _hover={{
                    color: 'black',
                    bgColor: 'transparent ',
                    border: '1px solid black',
                  }}
                  textTransform={'uppercase'}
                >
                  get a free service
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Form;
