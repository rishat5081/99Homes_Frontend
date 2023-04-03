import React from 'react';
import { Stack, Heading, Link, HStack } from '@chakra-ui/react';
import BgImg from '../../assets/image/about.jpg';
import { FaHome } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { useRouter } from 'next/router'

const Linkpage = () => {
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
            Sign-In
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
                onClick={() => router.push('/SignIn')}
              >
               SignIn
              </Link>
            </HStack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Linkpage;
