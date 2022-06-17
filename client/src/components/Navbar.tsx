import { useColorMode, Box, List } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import ColorToggle from './utils/ColorToggle';

const Navbar = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box as='nav' p={2} maxH={'95px'} h={'100%'} w={'100%'} boxShadow={'2xl'}>
        <Box
          maxWidth={{ base: '100%', md: '75%' }}
          w={'100%'}
          margin={'0 auto'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Box
            maxW={'100px'}
            maxH={'100px'}
            h={'100%'}
            p={4}
            w={'100%'}
            style={{
              filter: colorMode ? 'blur(10%)' : 'blur(50%)',
            }}
          >
            <Logo />
          </Box>
          <List
            flex={'1'}
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'flex-end'}
            gap={4}
            m={'0 1rem'}
          >
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
          </List>
          <ColorToggle />
        </Box>
      </Box>
    </>
  );
};
export default Navbar;
