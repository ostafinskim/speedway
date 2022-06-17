import { Link, useColorMode } from '@chakra-ui/react';

const Logo = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Link href='/'>
        <img
          src='/sgp.svg'
          alt='SGP'
          style={{
            filter: colorMode === 'light' ? 'invert(0%)' : 'invert(100%)',
          }}
        />
      </Link>
    </>
  );
};
export default Logo;
