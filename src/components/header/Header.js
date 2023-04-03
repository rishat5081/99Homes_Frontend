import {
  Stack,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Spacer,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { BsEnvelope } from 'react-icons/bs';
import { RiMapPinLine } from 'react-icons/ri';
import { BiBasketball } from 'react-icons/bi';
import { FaArrowDown, FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import Navbar from './Navbar';

const Header = () => {
  return (
    <Stack width={'full'}>
      <Stack
        bgColor={'#0b2c3d'}
        fontSize={'small'}
        color={'#fff'}
        fontWeight={'600'}
        direction={{ base: 'column', md: 'row' }}
        py={2}
        px={'7%'}
        gap={{ base: '0', md: '4' }}
        alignItems={'center'}
      >
        <HStack>
          <Link>
            <BsEnvelope color={'#38A169'} size={14} />
          </Link>
          <Link
            _hover={{
              textDecoration: 'none',
              color: '#38A169',
            }}
          >
            info@webmail.com
          </Link>
        </HStack>

        <HStack>
          <Link>
            <RiMapPinLine color={'#38A169'} size={14} />
          </Link>
          <Link
            _hover={{
              textDecoration: 'none',
              color: '#38A169',
            }}
          >
            15/A, Nest Tower, NYC
          </Link>
        </HStack>

        <Spacer />

        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FaArrowDown color={'#38A169'} />}
            bgColor={'transparent'}
            fontSize={'small'}
            h={3}
            p={0}
            _hover={{
              bgColor: 'transparent',
            }}
            _active={{
              bgColor: '#0b2c3d',
            }}
            _focus={{
              boxShadow: 'none',
            }}
          >
            English
          </MenuButton>
          <MenuList
            color={'#5c727d'}
            borderRadius={0}
            minW={200}
            fontSize={'sm'}
          >
            <MenuItem
              _hover={{
                bgColor: 'transparent',
                color: '#38A169',
              }}
            >
              Arabic
            </MenuItem>
            <MenuItem
              _hover={{
                bgColor: 'transparent',
                color: '#38A169',
              }}
            >
              Bengali
            </MenuItem>
            <MenuItem
              _hover={{
                bgColor: 'transparent',
                color: '#38A169',
              }}
            >
              Chinese
            </MenuItem>
            <MenuItem
              _hover={{
                bgColor: 'transparent',
                color: '#38A169',
              }}
            >
              English
            </MenuItem>
            <MenuItem
              _hover={{
                bgColor: 'transparent',
                color: '#38A169',
              }}
            >
              French
            </MenuItem>
            <MenuItem
              _hover={{
                bgColor: 'transparent',
                color: '#38A169',
              }}
            >
              Hindi
            </MenuItem>
          </MenuList>
        </Menu>

        <HStack>
          <Link>
            <FaFacebookF color={'white'} size={14} />
          </Link>
          <Link>
            <AiOutlineTwitter color={'white'} size={20} />
          </Link>
          <Link>
            <AiOutlineInstagram color={'white'} size={20} />
          </Link>
          <Link>
            <BiBasketball color={'white'} size={20} />
          </Link>
        </HStack>
      </Stack>
      <Navbar />
    </Stack>
  );
};

export default Header;
