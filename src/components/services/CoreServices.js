import React from 'react';
import { Stack, Heading, Text, VStack } from '@chakra-ui/react';
import {
  RiHome8Line,
  RiCustomerService2Fill,
  RiHome7Line,
  RiHomeSmile2Line,
} from 'react-icons/ri';
import { AiOutlineFileProtect } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';

const CoreServices = () => {
  return (
    <Stack width={'full'} bgColor={'#f2f6f7'} py={20} gap={5}>
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
          Our Core Services
        </Heading>
      </Stack>

      <Stack
        width={'100%'}
        direction={{ base: 'column', lg: 'row' }}
        px={{ base: '4', md: '20' }}
        pt={5}
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
              <FaHome color={'#38A169'} size={50} />
              <Heading
                color={'black'}
                fontSize={'2xl'}
                fontWeight={'700'}
                cursor={'pointer'}
                _hover={{
                  color: '#38A169',
                }}
              >
                Property Management
              </Heading>
              <Text fontSize={'xs'} color={'#5c727d'} textAlign={'center'}>
                over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home.
              </Text>
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
              <RiHome8Line color={'#38A169'} size={50} />
              <Heading
                color={'black'}
                fontSize={'2xl'}
                fontWeight={'700'}
                cursor={'pointer'}
                _hover={{
                  color: '#38A169',
                }}
              >
                Mortgage Service
              </Heading>
              <Text fontSize={'xs'} color={'#5c727d'} textAlign={'center'}>
                over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home.
              </Text>
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
              <RiCustomerService2Fill color="#38A169" size={50} />
              <Heading
                color={'black'}
                fontSize={'2xl'}
                fontWeight={'700'}
                cursor={'pointer'}
                _hover={{
                  color: '#38A169',
                }}
              >
                Consulting Service
              </Heading>
              <Text fontSize={'xs'} color={'#5c727d'} textAlign={'center'}>
                over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home.
              </Text>
            </VStack>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        width={'100%'}
        direction={{ base: 'column', lg: 'row' }}
        px={{ base: '4', md: '20' }}
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
              <RiHome7Line color={'#38A169'} size={50} />
              <Heading
                color={'black'}
                fontSize={'2xl'}
                fontWeight={'700'}
                cursor={'pointer'}
                _hover={{
                  color: '#38A169',
                }}
              >
                Home Buying
              </Heading>
              <Text fontSize={'xs'} color={'#5c727d'} textAlign={'center'}>
                over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home.
              </Text>
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
              <RiHomeSmile2Line color={'#38A169'} size={50} />
              <Heading
                color={'black'}
                fontSize={'2xl'}
                fontWeight={'700'}
                cursor={'pointer'}
                _hover={{
                  color: '#38A169',
                }}
              >
                Home Selling
              </Heading>
              <Text fontSize={'xs'} color={'#5c727d'} textAlign={'center'}>
                over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home.
              </Text>
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
              <AiOutlineFileProtect color="#38A169" size={50} />
              <Heading
                color={'black'}
                fontSize={'2xl'}
                fontWeight={'700'}
                cursor={'pointer'}
                _hover={{
                  color: '#38A169',
                }}
              >
                Escrow Services
              </Heading>
              <Text fontSize={'xs'} color={'#5c727d'} textAlign={'center'}>
                over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home.
              </Text>
            </VStack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CoreServices;
