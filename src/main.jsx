import React from 'react'
import ReactDOM from 'react-dom/client'

import {
	RouterProvider,
} from "react-router-dom";

import './index.css'
import router from './Routes/Router/router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
