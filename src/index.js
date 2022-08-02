import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { SidebarProvider } from './context/SidebarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>
      <SidebarProvider>
    <App />
      </SidebarProvider>
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
