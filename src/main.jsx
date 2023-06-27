import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Router.jsx';
import Authprovider from './Provider/Authprovider';

import {
 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <HelmetProvider>

        <QueryClientProvider client={queryClient}>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </HelmetProvider>
    </Authprovider>

  </React.StrictMode>,
)
