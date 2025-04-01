
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import "bootstrap/dist/css/bootstrap.min.css"
import Error from './components/Error'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import About from './components/About'

function App() {
  const path = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      error: <Error />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'ContactUs',
          element: <ContactUs />
        },
        {
          path: 'AboutUs',
          element: <About />
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={path} />
    </>
  )
}

export default App
