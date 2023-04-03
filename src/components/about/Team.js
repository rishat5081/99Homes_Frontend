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
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import Client1 from '../../assets/image/client1.jpg';
import Client2 from '../../assets/image/client2.jpg';
import Client3 from '../../assets/image/client3.jpg';
import Image from 'next/image'

const Team = () => {
  return (
    <Stack width={'full'} py={20}>
      <Stack>
        <Text
          fontSize={'md'}
          fontWeight={'600'}
          color={'#38A169'}
          textAlign={'center'}
        >
          Team
        </Text>
        <Heading
          color={'#071c1f'}
          fontSize={'40px'}
          fontWeight={'700'}
          textAlign={'center'}
        >
          Property Agents
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
            border={'1px solid #f6f6f6'}
            bgColor={'#fff'}
            _hover={{
              boxShadow: 'md',
            }}
          >
            <VStack gap={2}>
              <Box>
                <Image src={Client1} />
              </Box>
              <Heading
                color={'#071c1f'}
                fontSize={'xl'}
                fontWeight={'700'}
                textAlign={'center'}
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
                cursor={'pointer'}
              >
                Kelian Anderson
              </Heading>
              <Text
                fontSize={'md'}
                fontWeight={'600'}
                color={'#38A169'}
                textAlign={'center'}
              >
                Selling Agents
              </Text>
              <HStack pb={5}>
                <Link>
                  <FaFacebookF color={'#5c727d'} size={14} />
                </Link>
                <Link>
                  <AiOutlineTwitter color={'#5c727d'} size={20} />
                </Link>
                <Link>
                  <AiFillLinkedin color={'#5c727d'} size={20} />
                </Link>
              </HStack>
            </VStack>
          </Stack>
        </Stack>
        <Stack width={{ base: '100%', lg: '33%' }}>
          <Stack
            border={'1px solid #f6f6f6'}
            bgColor={'#fff'}
            _hover={{
              boxShadow: 'md',
            }}
          >
            <VStack gap={2}>
              <Box>
                <Image src={Client2} />
              </Box>
              <Heading
                color={'#071c1f'}
                fontSize={'xl'}
                fontWeight={'700'}
                textAlign={'center'}
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
                 cursor={'pointer'}
              >
                Rosalina D. William
              </Heading>
              <Text
                fontSize={'md'}
                fontWeight={'600'}
                color={'#38A169'}
                textAlign={'center'}
              >
                Real Estate Broker
              </Text>
              <HStack pb={5}>
                <Link>
                  <FaFacebookF color={'#5c727d'} size={14} />
                </Link>
                <Link>
                  <AiOutlineTwitter color={'#5c727d'} size={20} />
                </Link>
                <Link>
                  <AiFillLinkedin color={'#5c727d'} size={20} />
                </Link>
              </HStack>
            </VStack>
          </Stack>
        </Stack>
        <Stack width={{ base: '100%', lg: '33%' }}>
          <Stack
            border={'1px solid #f6f6f6'}
            bgColor={'#fff'}
            _hover={{
              boxShadow: 'md',
            }}
          >
            <VStack gap={2}>
              <Box>
                <Image src={Client3} />
              </Box>
              <Heading
                color={'#071c1f'}
                fontSize={'xl'}
                fontWeight={'700'}
                textAlign={'center'}
                _hover={{
                  textDecoration: 'none',
                  color: '#38A169',
                }}
                 cursor={'pointer'}
              >
                Miranda H. Halim
              </Heading>
              <Text
                fontSize={'md'}
                fontWeight={'600'}
                color={'#38A169'}
                textAlign={'center'}
              >
                Property Seller
              </Text>
              <HStack pb={5}>
                <Link>
                  <FaFacebookF color={'#5c727d'} size={14} />
                </Link>
                <Link>
                  <AiOutlineTwitter color={'#5c727d'} size={20} />
                </Link>
                <Link>
                  <AiFillLinkedin color={'#5c727d'} size={20} />
                </Link>
              </HStack>
            </VStack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Team;
