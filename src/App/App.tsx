import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ApolloWrapper from '../wrappers/ApolloWrapper.tsx'
import Launches from '../pages/Launches/Launches.tsx'
import LaunchDetail from '../pages/LaunchDetail/LaunchDetail.tsx'

import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Launches />,
  },
  {
    path: '/launch/:id',
    element: <LaunchDetail />,
  },
])

const App = () => (
  <ApolloWrapper>
    <RouterProvider router={router} />
  </ApolloWrapper>
)

export default App
