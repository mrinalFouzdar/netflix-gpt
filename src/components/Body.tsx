import React, { useEffect } from 'react'
import Login from './Login'
import Browser from './Browser'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browser',
            element: <Browser />
        }
    ])


    return (
        <div className=''>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body
