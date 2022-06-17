import { Box, Button, Image, Text, VStack, Link } from '@chakra-ui/react';
import { Navbar } from '../components';
import { Link as NavLink } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <Navbar />
      <Box
        as='main'
        maxW={{ base: '100%', xl: 'container.xl' }}
        w={'100%'}
        h={'calc(100vh - 95px)'}
        m={'0 auto'}
        display={'flex'}
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <Image
          w={{ base: '100%', lg: '45%' }}
          src={`/bg.jpg`}
          alt={'race start'}
          objectFit={'cover'}
          objectPosition={'65% 50%'}
        />
        <VStack p={2} textAlign={'center'}>
          <Text as='h1' fontSize={{ base: '5xl', lg: '8xl' }} my={2}>
            FIM Speedway Grand Prix
          </Text>
          <Text as='h2' fontSize={{ base: 'xl', lg: '2xl' }}>
            All details about your favourite speedway riders!
          </Text>
          <Box
            w={'100%'}
            gap={3}
            h={{ base: '200px', lg: '150px' }}
            display={'flex'}
            flexDirection={{ base: 'column' }}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Link
              w={'50%'}
              as={NavLink}
              to='/login'
              bg={'red.500'}
              color={'whiteAlpha.900'}
              p={2}
              borderRadius={'lg'}
            >
              Login
            </Link>
            <Link
              w={'50%'}
              as={NavLink}
              to='/register'
              bg={'blue.500'}
              color={'whiteAlpha.900'}
              p={2}
              borderRadius={'lg'}
            >
              Register
            </Link>
          </Box>
          <Text as='p'>Custom CMS for REST API</Text>
          <Text justifySelf={'end'} as='p'>
            created by @ostafinskim
          </Text>
        </VStack>
      </Box>
    </>
  );
};
export default Landing;
