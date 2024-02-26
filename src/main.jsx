import React from 'react'
import ReactDOM from 'react-dom/client'

import {
	RouterProvider,
} from "react-router-dom";

import './index.css'
import router from './Routes/Router/router.jsx';
import {
	QueryClient,
	QueryClientProvider
} from '@tanstack/react-query';
import AuthProvider from './Providers/AuthProvider.jsx';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</AuthProvider>
	</React.StrictMode>,
)
