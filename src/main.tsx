import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ErrorPage from './error-page.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
