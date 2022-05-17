import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import '@fontsource/exo'
import '@fontsource/titillium-web'
import { ChakraProvider } from '@chakra-ui/react'

import './index.css'
import App from './App'
import customTheme from './theme/theme'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>
)
