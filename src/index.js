import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App';

const theme = extendTheme({
  colors: {
    todo: {
      50: "#F7FAFC",
      100: "#d8efad",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#7fc200", // Color del Botón Scheme Color
      600: "#659a00", // Hocer del Botón Scheme Color
      700: "#4f7900", // Active Color
      800: "#1A202C",
      900: "#6adcda",
      1000: 'rgb(255 255 255 / 80%);',
    },
  },
  styles: {
    global: {
      body: {
        height: '100vh',
        backgroundColor: '#99fff8',
        backgroundImage: 'radial-gradient(at 41% 7%, hsla(228,76%,75%,1) 0px, transparent 50%), radial-gradient(at 46% 53%, hsla(33,82%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 22%, hsla(182,61%,60%,1) 0px, transparent 50%), radial-gradient(at 20% 40%, hsla(128,98%,68%,1) 0px, transparent 50%), radial-gradient(at 42% 24%, hsla(207,73%,73%,1) 0px, transparent 50%), radial-gradient(at 98% 54%, hsla(261,60%,61%,1) 0px, transparent 50%), radial-gradient(at 81% 28%, hsla(55,79%,74%,1) 0px, transparent 50%)',
      },
    },
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
