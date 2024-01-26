import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import { getMovies as loaderGetMovies, getMovie as loaderGetMovie } from './api/apiCall'
import CardFilm from './components/CardFilm'
import Movies from './components/Movies'
import OutletTest from './components/OutletTest'


const router = createBrowserRouter([
  {
    path: "/",
    element: <OutletTest></OutletTest>,
    children: [
      {
        path: "home",
        element: <Movies />,
        loader: loaderGetMovies,
      },

      {
        path: "/:id",
        element: <CardFilm />,
        loader: loaderGetMovie,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </ChakraProvider>
)
