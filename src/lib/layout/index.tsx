import { Box, Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';

// import { Footer } from './components/footer';
import { Header } from './components/header';
import { Meta } from './components/meta';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto"  transition="0.5s ease-out">
      <Meta />
      <Flex wrap="wrap" margin="8" minHeight="90vh">
        <Header />
        <Box width="full" as="main" marginTop={100}>
          {children}
        </Box>
      </Flex>
    </Box>
  );
};
