import React from 'react';
import { Stack, Heading, Link, HStack } from '@chakra-ui/react';
import { Button, chakra, Text } from '@chakra-ui/react';
import BgImg from '../../assets/image/about.jpg';
import { FaHome } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { useRouter } from 'next/router'
import BgServices from '../../assets/image/menu-banner-1.jpg';


const Services = () => {
  const router = useRouter()
  return (
    <Stack width={'full'}>
      <Stack
        style={{
          backgroundImage: `url(${BgImg.src})`,
        }}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="300"
      >
        <Stack p={{ base: '4', md: '20' }}>
          <Stack gap={5}>
            <Heading color={'#071c1f'} fontSize={'35px'} fontWeight={'700'}>
              What We Do
            </Heading>
            <HStack fontSize={'sm'}>
              <Link>
                <FaHome color={'#38A169'} size={14} />
              </Link>
              <Link
                color={'#5c727d'}
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
                fontWeight={'700'}
                onClick={() => router.push('/')}
              >
                Home
              </Link>
              <IoIosArrowForward color={'#38A169'} size={14} />
              <Link
                fontWeight={'700'}
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
                onClick={() => router.push('/Services')}
              >
                Service
              </Link>
            </HStack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        width={'100%'}
        px={{ base: '4', md: '20' }}
        py={20}
      >
        <Stack width={{ base: '100%', lg: '40%' }} boxShadow={'dark'}>
          <Stack
            bgImage={BgServices}
            style={{
              backgroundImage: `url(${BgServices.src})`,
            }}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            h="500"
          ></Stack>
        </Stack>

        <Stack width={{ base: '100%', lg: '60%' }} p={{ base: '5', md: '10' }}>
          <Stack py={4} gap={4}>
            <Text fontSize={'md'} fontWeight={'600'} color={'#38A169'}>
              About Us
            </Text>
            <Heading
              color={'#071c1f'}
              fontSize={{ base: 'lg', md: '40px' }}
              fontWeight={'700'}
            >
              The Leading Real Estate Rental Marketplace
              <chakra.span color={'#38A169'}>.</chakra.span>
            </Heading>
            <Text
              fontSize={'sm'}
              color={'#5c727d'}
              width={{ base: '100%', lg: '75%' }}
            >
              Over 39,000 people work for us in more than 70 countries all over
              the This breadth of global coverage, combined with specialist
              services
            </Text>
            <Text fontSize={'sm'} color={'#5c727d'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Text>
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
              fontSize={'md'}
              _hover={{
                color: 'black',
                bgColor: 'transparent ',
                border: '1px solid black',
              }}
              p={7}
              onClick={() => router.push('/About')}
            >
              ABOUT US
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Services;
