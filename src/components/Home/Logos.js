import React from 'react';
import { Stack, Button, VStack } from '@chakra-ui/react';
import BgImg from '../../assets/image/15.jpg';
import { FaPlay } from 'react-icons/fa';
import { Center, SimpleGrid } from '@chakra-ui/react';
import Logo1 from '../../assets/image/b1.png';
import Logo2 from '../../assets/image/b2.png';
import Logo3 from '../../assets/image/b3.png';
import Logo4 from '../../assets/image/b4.png';
import Logo5 from '../../assets/image/b5.png';
import Image from 'next/image'

const Logos = () => {
  return (
    <Stack width={'full'}>
      <Stack px={{ base: '4', md: '20' }} pt={20}>
        <Stack
          style={{
            backgroundImage: `url(${BgImg.src})`,
          }}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          h="500"
          marginBottom={'-120px'}
        >
          <VStack py={'20%'}>
            <Button
              color={'white'}
              bgColor={'#38A169'}
              size="lg"
              p={8}
              borderRadius={'none'}
              fontWeight={'600'}
              fontSize={'md'}
              _hover={{
                color: '#071c1f',
                bgColor: '#38A169',
              }}
            >
              <FaPlay color="white" />
            </Button>
          </VStack>
        </Stack>
      </Stack>

      <Stack
        bgColor={'rgba(7, 28, 31, 0.9);'}
        h={{ base: '700', md:'380',lg: '300' }}
        px={8}
        justifyContent={{base:'flex-end',lg:'flex-end'}}
        zIndex={'-1'}
      >
        <SimpleGrid columns={[1, 2, 3, 5]} pt={20} pb={20} gap={10}>
          <Center>
            <Image src={Logo1} />
          </Center>
          <Center>
            <Image src={Logo2} />
          </Center>
          <Center>
            <Image src={Logo3} />
          </Center>
          <Center>
            <Image src={Logo4} />
          </Center>
          <Center>
            <Image src={Logo5} />
          </Center>
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};

export default Logos;
