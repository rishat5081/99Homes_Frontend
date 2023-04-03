import React from 'react';
import {
  Stack,
  HStack,
  Text,
  Heading,
  Button,
  Spacer,
  SimpleGrid,
  Box,
  Link,
  Input,
} from '@chakra-ui/react';
import { BiBasketball } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { BsEnvelope } from 'react-icons/bs';
import { BiPhoneCall } from 'react-icons/bi';
import { RiMapPinLine } from 'react-icons/ri';
import { IoIosSend } from 'react-icons/io';
import Logo from '../../assets/image/logo-2.png';
import Payments from '../../assets/image/payment-4.png';
import { useRouter } from 'next/router'
import Image from 'next/image'

const Footer = () => {
const router = useRouter()
  return (
    <Stack width={'full'} pt={10}>
      <Stack px={{ base: '4', md: '20' }} mb={'-70px'}>
        <Stack bgColor={'#38A169'} direction={{ base: 'column', lg: 'row' }}>
          <Stack p={10} gap={3}>
            <Heading
              color={'white'}
              fontSize={{ base: 'xl', md: '4xl' }}
              fontWeight={'700'}
            >
              Looking for a dream home?
            </Heading>
            <Text
              fontSize={{ base: 'xs', md: 'md' }}
              fontWeight={'600'}
              color={'white'}
            >
              We can help you realize your dream of a new home
            </Text>
          </Stack>
          <Spacer />
          <Stack px={{ base: '4', md: '20' }} py={10}>
            <Button
              m={'auto'}
              border={'1px solid white'}
              color={'black'}
              bgColor={'white'}
              size="lg"
              borderRadius={'none'}
              fontWeight={'600'}
              fontSize={'md'}
              _hover={{
                color: 'white',
                bgColor: 'black',
              }}
              rightIcon={<BsArrowRight size={20} />}
              onClick={() => router.push('/ContactUs')}
            >
              Explore Properties
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Stack bgColor={'#171b2a'} zIndex={'-1'}>
        <SimpleGrid columns={[1, 2, 3, 5]} px={10} pt={40} pb={20} gap={3}>
          <Stack>
            <Box>
              <Image src={Logo} />
            </Box>
            <Text color={'white'} fontSize={'sm'} lineHeight={2}>
              Lorem Ipsum is simply dummy text of the and typesetting industry.
              Lorem Ipsum is dummy text of the printing.
            </Text>

            <Stack gap={3}>
              <HStack>
                <Link>
                  <RiMapPinLine color={'white'} size={14} />
                </Link>
                <Link
                  color={'white'}
                  fontSize={'sm'}
                  _hover={{
                    textDecoration: 'none',
                    color: '#38A169',
                  }}
                >
                  Brooklyn, New York, United States
                </Link>
              </HStack>
              <HStack>
                <Link>
                  <BiPhoneCall color={'white'} size={14} />
                </Link>
                <Link
                  color={'white'}
                  fontSize={'sm'}
                  _hover={{
                    textDecoration: 'none',
                    color: '#38A169',
                  }}
                >
                  +0123-456789
                </Link>
              </HStack>
              <HStack>
                <Link>
                  <BsEnvelope color={'white'} size={14} />
                </Link>
                <Link
                  color={'white'}
                  fontSize={'sm'}
                  _hover={{
                    textDecoration: 'none',
                    color: '#38A169',
                  }}
                >
                  example@example.com
                </Link>
              </HStack>
              <HStack>
                <Link>
                  <FaFacebookF color={'white'} size={14} />
                </Link>
                <Link>
                  <AiOutlineTwitter color={'white'} size={20} />
                </Link>
                <Link>
                  <AiOutlineInstagram color={'white'} size={20} />
                </Link>
                <Link>
                  <BiBasketball color={'white'} size={20} />
                </Link>
              </HStack>
            </Stack>
          </Stack>
          <Stack>
            <Heading
              color={'white'}
              fontSize={{ base: 'xl', md: 'xl' }}
              fontWeight={'700'}
            >
              Company
            </Heading>
            <Stack
              fontSize={'sm'}
              color={'white'}
              fontWeight={'600'}
              gap={3}
              pt={5}
            >
              <Link
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
              >
                About
              </Link>
              <Link
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
              >
                Blog
              </Link>
              <Link
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
              >
                All Products
              </Link>
              <Link
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
              >
                Contact
              </Link>
              <Link
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
              >
                FAQ
              </Link>
              <Link
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
              >
                Contact Us
              </Link>
            </Stack>
          </Stack>

          <Stack>
            <Heading
              color={'white'}
              fontSize={{ base: 'xl', md: 'xl' }}
              fontWeight={'700'}
            >
              Services
            </Heading>
            <Stack
              fontSize={'sm'}
              color={'white'}
              fontWeight={'600'}
              gap={3}
              pt={5}
            >
              <Link
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
              >
                Cart
              </Link>
              <Link
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
              >
                Wish List
              </Link>
              <Link
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
              >
                Login
              </Link>
              <Link
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
              >
                Checkout
              </Link>
              <Link
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
              >
                Terms & Conditions
              </Link>
              <Link
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
              >
                Promotional Offers
              </Link>
            </Stack>
          </Stack>

          <Stack>
            <Heading
              color={'white'}
              fontSize={{ base: 'xl', md: 'xl' }}
              fontWeight={'700'}
            >
              Customer Care
            </Heading>
            <Stack
              fontSize={'sm'}
              color={'white'}
              fontWeight={'600'}
              gap={3}
              pt={5}
            >
              <Link
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
              >
                Login
              </Link>
              <Link
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
              >
                My account
              </Link>
              <Link
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
              >
                Wish List
              </Link>
              <Link
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
              >
                Add listing
              </Link>
              <Link
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
              >
                FAQ
              </Link>
              <Link
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
              >
                Contact us
              </Link>
            </Stack>
          </Stack>

          <Stack>
            <Heading
              color={'white'}
              fontSize={{ base: 'xl', md: 'xl' }}
              fontWeight={'700'}
            >
              Newsletter
            </Heading>
            <Text color={'white'} fontSize={'sm'} lineHeight={2} pt={5}>
              Subscribe to our weekly Newsletter and receive updates via email.
            </Text>

            <HStack>
              <Input
                h={'50px'}
                placeholder="Email*"
                borderRadius={'none'}
                bgColor={'white'}
                color={'black'}
              />
              <Button
               h={'50px'}
              ml={'0 !important'}
                color={'white'}
                bgColor={'#38A169'}
                size="md"
                borderRadius={'none'}
                _hover={{
                  color: 'white',
                  bgColor: 'black',
                }}
              >
                  <IoIosSend size={30} />
              </Button>
            </HStack>
            <Stack gap={2}>
            <Heading
              color={'white'}
              fontSize={{ base: 'xl', md: 'xl' }}
              fontWeight={'700'}
            >
              We Accept
            </Heading>
            <Image src={Payments}/>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};

export default Footer;
