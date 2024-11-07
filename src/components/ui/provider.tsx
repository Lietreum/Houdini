'use client';

import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '@/lib/styles/theme';

// fuck darkmode lmao
// import { ColorModeProvider } from './color-mode';

export function Provider(props: React.PropsWithChildren) {
  return (
    <ChakraProvider value={theme}>
      {props.children}
    </ChakraProvider>
  );
}
