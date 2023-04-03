import React from 'react';
import { Stack, HStack, Text, Spacer, Link } from '@chakra-ui/react';

const Copyright = () => {
  return (
    <Stack
      width={'full'}
      bgColor={'#282b38'}
      p={5}
      direction={{ base: 'column', md: 'row' }}
    >
      <Text color={'white'} fontSize={'md'}>
        All Rights Reserved @ Company 2022
      </Text>
      <Spacer />
      <HStack fontSize={'sm'} color={'white'} fontWeight={'600'} gap={5}>
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
          Claim
        </Link>
        <Link
          _hover={{
            textDecoration: 'none',
            color: '#38A169',
          }}
        >
          Privacy & Policy
        </Link>
      </HStack>
    </Stack>
  );
};

export default Copyright;
