import { Stack, HStack, Spacer,Link,  Button, Box } from '@chakra-ui/react';
import React from 'react';
import Logo from '../../assets/image/logo.png';
import Drawer from './Drawer';
import { useRouter } from 'next/router'
import Image from 'next/image'

const Navbar = () => {
  const router = useRouter()
  return (
    <Stack width={'full'}>
      <Stack direction={'row'} px={'7%'} py={'22px'}>
        <Box cursor={'pointer'}>
        <Image src={Logo}   onClick={() => router.push('/')} />
        </Box>
        <Spacer />
        <Drawer />
        <HStack
          fontSize={'md'}
          color={'#071c1f'}
          fontWeight={'600'}
          gap={5}
          display={{ base: 'none', md: 'none', lg: 'inherit' }}
        >
          <Link
            _hover={{
              textDecoration: 'none',
              color: '#38A169',
            }}
            onClick={() => router.push('/')}
          >
            Home
          </Link>
          <Link
            _hover={{
              textDecoration: 'none',
              color: '#38A169',
            }}
            onClick={() => router.push('/About')}
          >
            About
          </Link>
          <Link
            _hover={{
              textDecoration: 'none',
              color: '#38A169',
            }}
            onClick={() => router.push('/Services')}
          >
            Services
          </Link>
          <Link
            _hover={{
              textDecoration: 'none',
              color: '#38A169',
            }}
            onClick={() => router.push('/Properties')}
          >
            Properties
          </Link>
          <Link
            _hover={{
              textDecoration: 'none',
              color: '#38A169',
            }}
            onClick={() => router.push('/ContactUs')}
          >
            Contact Us
          </Link>
          <Link
            _hover={{
              textDecoration: 'none',
              color: '#38A169',
            }}
            onClick={() => router.push('/SignIn')}
          >
            Login
          </Link>
          {/* <Link
            _hover={{
              textDecoration: 'none',
              color: '#38A169',
            }}
            onClick={() => router.push('/Dashboard')}
          >
            Dashboard
          </Link> */}
        </HStack>
      </Stack>
    </Stack>
  );
};

export default Navbar;
