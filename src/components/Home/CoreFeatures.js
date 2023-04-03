import React from 'react';
import { Stack, Text, Heading } from '@chakra-ui/react';
import { BsBuilding,  BsWrench } from 'react-icons/bs';
import { IoIosConstruct, } from 'react-icons/io';
import { RiMapPinLine } from 'react-icons/ri';




const CoreFeatures = () => {
  return (
    <Stack width={'full'} py={10}>
      <Stack>
        <Text
          fontSize={'md'}
          fontWeight={'600'}
          color={'#38A169'}
          textAlign={'center'}
        >
          features
        </Text>
        <Heading
          color={'#071c1f'}
          fontSize={'40px'}
          fontWeight={'700'}
          textAlign={'center'}
        >
          Core Features
        </Heading>
      </Stack>

      <Stack
        width={'100%'}
        direction={{ base: 'column', md: 'row' }}
        px={{ base: '4', md: '20' }}
      >
        <Stack
          width={{ base: '100%', md: '25%' }}
          border={'1px solid #f6f6f6'}
          p={8}
          gap={2}
          _hover={{
              boxShadow:'md',
              borderBottom:'3px solid #38A169'
          }}
        >
          <BsBuilding color="#38A169" size={50} />
          <Heading
            color={'#071c1f'}
            fontSize={'xl'}
            fontWeight={'bold'}
            cursor={'pointer'}
            _hover={{
              color: '#38A169',
            }}
          >
            Smart living
          </Heading>
          <Text color={'#5c727d'} fontSize={'xs'}>
            Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do
            eiusmod te mp or incididunt ut labore.
          </Text>
        </Stack>

        <Stack
          width={{ base: '100%', md: '25%' }}
          border={'1px solid #f6f6f6'}
          p={8}
          gap={2}
          _hover={{
              boxShadow:'md',
              borderBottom:'3px solid #38A169'
          }}
        >
          <IoIosConstruct color="#38A169" size={50} />
          <Heading
            color={'#071c1f'}
            fontSize={'xl'}
            fontWeight={'bold'}
            cursor={'pointer'}
            _hover={{
              color: '#38A169',
            }}
          >
              ECO Construction
          </Heading>
          <Text color={'#5c727d'} fontSize={'xs'}>
            Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do
            eiusmod te mp or incididunt ut labore.
          </Text>
        </Stack>

        <Stack
          width={{ base: '100%', md: '25%' }}
          border={'1px solid #f6f6f6'}
          p={8}
          gap={2}
          _hover={{
              boxShadow:'md',
              borderBottom:'3px solid #38A169'
          }}
        >
          <RiMapPinLine color="#38A169" size={50} />
          <Heading
            color={'#071c1f'}
            fontSize={'xl'}
            fontWeight={'bold'}
            cursor={'pointer'}
            _hover={{
              color: '#38A169',
            }}
          >
            Atractive Location
          </Heading>
          <Text color={'#5c727d'} fontSize={'xs'}>
            Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do
            eiusmod te mp or incididunt ut labore.
          </Text>
        </Stack>

        <Stack
          width={{ base: '100%', md: '25%' }}
          border={'1px solid #f6f6f6'}
          p={8}
          gap={2}
          _hover={{
              boxShadow:'md',
              borderBottom:'3px solid #38A169'
          }}
        >
          <BsWrench color="#38A169" size={50} />
          <Heading
            color={'#071c1f'}
            fontSize={'xl'}
            fontWeight={'bold'}
            cursor={'pointer'}
            _hover={{
              color: '#38A169',
            }}
          >
            Modern Technology
          </Heading>
          <Text color={'#5c727d'} fontSize={'xs'}>
            Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do
            eiusmod te mp or incididunt ut labore.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CoreFeatures;
