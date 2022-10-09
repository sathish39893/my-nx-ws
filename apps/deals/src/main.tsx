import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import theme from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const {config} = theme;
const {initialColorMode} = config;
root.render(
  <StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={initialColorMode} />
      <App />
    </ChakraProvider>
  </StrictMode>
);
