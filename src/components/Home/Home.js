import React from 'react';
import {
  Stack,
  Button,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import BgImg from '../../assets/image/14.jpg';
import { FaHome,FaPlay } from 'react-icons/fa';


const Home = () => {
  return (
    <Stack width={'full'}>
      <Stack
      style={{
        backgroundImage: `url(${BgImg.src})`,
      }}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="550"
      >
        <VStack color={'white'} lineHeight={1} py={{base:'50%',md:'10%'}}>
          <Stack>
        <Button
            color={'white'}
            bgColor={'#38A169'}
            size="lg"
            p={8}
            borderRadius={'none'}
            fontWeight={'600'}
            fontSize={'md'}
            _hover={{
              color: '#38A169',
              bgColor: 'red',
            }}
            mb={5}
          >
             <FaPlay color="white" _hover={{
              color: '#38A169',
            }} />
          </Button>
          </Stack>
          
          <HStack>
            <Text>
              <FaHome color="white" />
            </Text>
            <Text fontSize={'md'} fontWeight={'bold'}>
              Real Estate Agency
            </Text>
          </HStack>

          <Text
            fontSize={{ base: '30px', md: '70px' }}
            textTransform={'uppercase'}
            fontWeight={'bold'}
          >
            Find Your Dream
          </Text>
          <Text
            fontSize={{ base: '30px', md: '70px' }}
            textTransform={'uppercase'}
            fontWeight={'bold'}
          >
            House By Us
          </Text>
        </VStack>
      </Stack>
    </Stack>
  );
};

export default Home;
