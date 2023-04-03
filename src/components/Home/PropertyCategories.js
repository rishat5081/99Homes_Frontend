import React from 'react';
import { Stack, Text, VStack, Heading, transform } from '@chakra-ui/react';
import Apartments from '../../assets/image/2.jpg';
import Condos from '../../assets/image/3.jpg';
import Houses from '../../assets/image/7.jpg';
import Retail from '../../assets/image/8.jpg';
import Villas from '../../assets/image/9.jpg';

const PropertyCategories = () => {
  return (
    <Stack width={'full'} py={20}>
      <Stack>
        <Text
          fontSize={'md'}
          fontWeight={'600'}
          color={'#38A169'}
          textAlign={'center'}
        >
          Property
        </Text>
        <Heading
          color={'#071c1f'}
          fontSize={'40px'}
          fontWeight={'700'}
          textAlign={'center'}
        >
          Property By Categories
        </Heading>
      </Stack>

      <Stack gap={5}>
        <Stack
          width={'100%'}
          direction={{ base: 'column', md: 'row' }}
          gap={5}
          px={{ base: '4', md: '20' }}
          pt={10}
        >
          <Stack width={{ base: '100%', lg: '70%' }}>
            <Stack
              style={{
                backgroundImage: `url(${Apartments.src})`,
              }}
              h={'350px'}
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPosition="center"
            >
              <VStack gap={2} py={{ base: '40%', lg: '15%' }}>
                <Heading
                  color={'white'}
                  fontSize={'3xl'}
                  fontWeight={'700'}
                  cursor={'pointer'}
                  _hover={{
                    color: '#38A169',
                  }}
                >
                  Apartments
                </Heading>
                <Text color={'white'} fontSize={'md'}>
                  Great Deals Available
                </Text>
                <Text
                  color={'white'}
                  fontSize={'md'}
                  bgColor={'#38A169'}
                  borderRadius={'50px'}
                  w={'fit-content'}
                  px={4}
                  py={1}
                >
                  13 Listings
                </Text>
              </VStack>
            </Stack>
          </Stack>
          <Stack width={{ base: '100%', lg: '30%' }}>
            <Stack
              style={{
                backgroundImage: `url(${Condos.src})`,
              }}
              h={'350px'}
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPosition="center"
            >
              <VStack gap={2} py={{ base: '30%', lg: '35%' }}>
                <Heading
                  color={'white'}
                  fontSize={'3xl'}
                  fontWeight={'700'}
                  cursor={'pointer'}
                  _hover={{
                    color: '#38A169',
                  }}
                >
                  Condos
                </Heading>
                <Text color={'white'} fontSize={'md'}>
                  Great Deals Available
                </Text>
                <Text
                  color={'white'}
                  fontSize={'md'}
                  bgColor={'#38A169'}
                  borderRadius={'50px'}
                  w={'fit-content'}
                  px={4}
                  py={1}
                >
                  13 Listings
                </Text>
              </VStack>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          width={'100%'}
          direction={{ base: 'column', md: 'row' }}
          px={{ base: '4', md: '20' }}
          gap={5}
        >
          <Stack width={{ base: '100%', lg: '34%' }}>
            <Stack
            style={{
              backgroundImage: `url(${Houses.src})`,
            }}
              h={'350px'}
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPosition="center"
            >
              <VStack gap={2} py={{ base: '30%', lg: '35%' }}>
                <Heading
                  color={'white'}
                  fontSize={'3xl'}
                  fontWeight={'700'}
                  cursor={'pointer'}
                  _hover={{
                    color: '#38A169',
                  }}
                >
                  Houses
                </Heading>
                <Text color={'white'} fontSize={'md'}>
                  Great Deals Available
                </Text>
                <Text
                  color={'white'}
                  fontSize={'md'}
                  bgColor={'#38A169'}
                  borderRadius={'50px'}
                  w={'fit-content'}
                  px={4}
                  py={1}
                >
                  13 Listings
                </Text>
              </VStack>
            </Stack>
          </Stack>

          <Stack width={{ base: '100%', lg: '34%' }}>
            <Stack
              style={{
                backgroundImage: `url(${Retail.src})`,
              }}
              h={'350px'}
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPosition="center"
            >
              <VStack gap={2} py={{ base: '30%', lg: '35%' }}>
                <Heading
                  color={'white'}
                  fontSize={'3xl'}
                  fontWeight={'700'}
                  cursor={'pointer'}
                  _hover={{
                    color: '#38A169',
                  }}
                >
                  Retail
                </Heading>
                <Text color={'white'} fontSize={'md'}>
                  Great Deals Available
                </Text>
                <Text
                  color={'white'}
                  fontSize={'md'}
                  bgColor={'#38A169'}
                  borderRadius={'50px'}
                  w={'fit-content'}
                  px={4}
                  py={1}
                >
                  13 Listings
                </Text>
              </VStack>
            </Stack>
          </Stack>

          <Stack width={{ base: '100%', lg: '30%' }}>
            <Stack
              style={{
                backgroundImage: `url(${Villas.src})`,
              }}
              h={'350px'}
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPosition="center"
            >
              <VStack gap={2} py={{ base: '30%', lg: '35%' }}>
                <Heading
                  color={'white'}
                  fontSize={'3xl'}
                  fontWeight={'700'}
                  cursor={'pointer'}
                  _hover={{
                    color: '#38A169',
                  }}
                >
                  Villas
                </Heading>
                <Text color={'white'} fontSize={'md'}>
                  Great Deals Available
                </Text>
                <Text
                  color={'white'}
                  fontSize={'md'}
                  bgColor={'#38A169'}
                  borderRadius={'50px'}
                  w={'fit-content'}
                  px={4}
                  py={1}
                >
                  13 Listings
                </Text>
              </VStack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PropertyCategories;
