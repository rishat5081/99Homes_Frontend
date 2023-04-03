import React from 'react';
import {
  Stack,
  Heading,
  Box,
  Link,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Icon1 from '../../assets/image/24.png';
import Icon2 from '../../assets/image/22.png';
import Icon3 from '../../assets/image/23.png';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image'

const Services = () => {
  return (
    <Stack width={'full'} bgColor={'#f2f6f7'} py={20}>
      <Stack>
        <Text
          fontSize={'md'}
          fontWeight={'600'}
          color={'#38A169'}
          textAlign={'center'}
        >
          Our Services
        </Text>
        <Heading
          color={'#071c1f'}
          fontSize={'40px'}
          fontWeight={'700'}
          textAlign={'center'}
        >
          Our Main Focus
        </Heading>
      </Stack>

      <Stack
        width={'100%'}
        direction={{ base: 'column', lg: 'row' }}
        px={{ base: '4', md: '20' }}
        pt={10}
        gap={5}
      >
        <Stack width={{ base: '100%', lg: '33%' }}>
          <Stack
            bgColor={'#fff'}
            p={10}
            _hover={{
              boxShadow: 'md',
              borderBottom: '3px solid #38A169',
            }}
          >
            <VStack gap={3}>
              <Box>
                <Image src={Icon1} />
              </Box>
              <Heading
                color={'black'}
                fontSize={'2xl'}
                fontWeight={'700'}
                cursor={'pointer'}
                _hover={{
                  color: '#38A169',
                }}
              >
                Buy a home
              </Heading>
              <Text fontSize={'xs'} color={'#5c727d'} textAlign={'center'}>
                over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home.
              </Text>
              <HStack
                fontSize={'sm'}
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
              >
                <Link
                  color={'#5c727d'}
                  fontWeight={'700'}
                  _hover={{
                    textDecoration: 'none',
                    color: '#38A169',
                  }}
                >
                  Find A Home
                </Link>
                <BsArrowRight size={20} />
              </HStack>
            </VStack>
          </Stack>
        </Stack>

        <Stack width={{ base: '100%', lg: '33%' }}>
          <Stack
            bgColor={'#fff'}
            p={10}
            _hover={{
              boxShadow: 'md',
              borderBottom: '3px solid #38A169',
            }}
          >
            <VStack gap={3}>
              <Box>
                <Image src={Icon2} />
              </Box>
              <Heading
                color={'black'}
                fontSize={'2xl'}
                fontWeight={'700'}
                cursor={'pointer'}
                _hover={{
                  color: '#38A169',
                }}
              >
                Rent a home
              </Heading>
              <Text fontSize={'xs'} color={'#5c727d'} textAlign={'center'}>
                over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home.
              </Text>
              <HStack
                fontSize={'sm'}
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
              >
                <Link
                  color={'#5c727d'}
                  fontWeight={'700'}
                  _hover={{
                    textDecoration: 'none',
                    color: '#38A169',
                  }}
                >
                  Find A Home
                </Link>
                <BsArrowRight size={20} />
              </HStack>
            </VStack>
          </Stack>
        </Stack>

        <Stack width={{ base: '100%', lg: '33%' }}>
          <Stack
            bgColor={'#fff'}
            p={10}
            _hover={{
              boxShadow: 'md',
              borderBottom: '3px solid #38A169',
            }}
          >
            <VStack gap={3}>
              <Box>
                <Image src={Icon3} />
              </Box>
              <Heading
                color={'black'}
                fontSize={'2xl'}
                fontWeight={'700'}
                cursor={'pointer'}
                _hover={{
                  color: '#38A169',
                }}
              >
                Sell a home
              </Heading>
              <Text fontSize={'xs'} color={'#5c727d'} textAlign={'center'}>
                over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home.
              </Text>
              <HStack
                fontSize={'sm'}
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
              >
                <Link
                  color={'#5c727d'}
                  fontWeight={'700'}
                  _hover={{
                    textDecoration: 'none',
                    color: '#38A169',
                  }}
                >
                  Find A Home
                </Link>
                <BsArrowRight size={20} />
              </HStack>
            </VStack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Services;
