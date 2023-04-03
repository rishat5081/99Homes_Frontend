import React from 'react';
import {
  Stack,
  Button,
  Text,
  Box,
} from '@chakra-ui/react';
import BgImg from '../../assets/image/6.jpg';
import Bluiding from '../../assets/image/21.png';
import Men from '../../assets/image/11.png';
import { useRouter } from 'next/router'
import Image from 'next/image'

const ContactUs = () => {
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
        h="350"
        py={'5'}
      >
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Stack width={{ base: '100%', md: '30%' }}>
            <Box display={{base:'none', md:'inherit'}}>
              <Image src={Bluiding} height={600} />
            </Box>
          </Stack>
          <Stack
            width={{ base: '100%', md: '40%' }}
            justifyContent={'center'}
            textAlign={'center'}
            py={{base:'30%',sm:'20%',md:'0%'}}
          >
            <Text color={'#38A169'} fontSize={'sm'}>
              // any question you have //
            </Text>
            <Text color={'white'} fontSize={{base:'xl',lg:'6xl'}} fontWeight={'bold'}>
            897-876-987-90
            </Text>
            <Stack direction={'row'} gap={2} justifyContent={'center'}>
            <Button
            color={'white'}
            bgColor={'#38A169'}
            size="lg"
            borderRadius={'none'}
            fontWeight={'600'}
            fontSize={'md'}
            _hover={{
              color: '#071c1f',
              bgColor: '#f2f6f7',
            }}
          >
            MAKE A CALL
          </Button>
          <Button
          border={'1px solid white'}
            color={'white'}
            bgColor={'transparent'}
            size="lg"
            borderRadius={'none'}
            fontWeight={'600'}
            fontSize={'md'}
            _hover={{
              color: 'white',
              bgColor: '#38A169',
            }}
            onClick={() => router.push('/ContactUs')}
          >
            CONTACT US
          </Button>
            </Stack>
          </Stack>
          <Stack width={{ base: '100%', md: '30%' }}>
            <Box  display={{base:'none', md:'inherit'}}>
              <Image src={Men} height={465} />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ContactUs;
