import { RouterProvider , createBrowserRouter} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"


// import Q1 from './components/Q1'
// import Q2 from './components/Q2'
// import Q3 from './components/Q3'
// import Q4 from './components/Q4'

// ============== Q5=================
// import Dashboard from "./components/Question5/Dashboard"


// ====================Q6==========================
// import AboutUs from './components/Question6/AboutUs'
// import ContactUs from './components/Question6/ContactUs'
// import Layout from './components/Question6/Layout'
// import Error from './components/Question6/Error'
// import Home from './components/Question6/Home'


// ==========================Q 7 and 8==================
// import Q7 from './components/Q7'


// =======================Q9========================
// import Layout from './components/Question9/Layout'
// import Error from './components/Question9/Error'
// import Home from './components/Question9/Home'
// import Blogs from './components/Question9/Blogs'


//===========================Q-10=========================
import Layout from './components/Question10/Layout'
import Error from './components/Question10/Error'
import Home from './components/Question10/Home'
import ContactUs from './components/Question10/ContactUs'
import Projects from './components/Question10/Projects'


function App() {
  //for question 6
  // const path = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Layout />,
  //     error: <Error />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Home />
  //       },
  //       {
  //         path: 'ContactUs',
  //         element: <ContactUs />
  //       },
  //       {
  //         path: 'AboutUs',
  //         element: <AboutUs />
  //       }
  //     ]
  //   }
  // ])

  // for q 9
  // const path = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Layout />,
  //     error: <Error />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Home />
  //       },
  //       {
  //         path: 'Blogs',
  //         element: <Blogs />
  //       }
  //     ]
  //   }
  // ])


  //for question 10
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
          path: 'Projects',
          element: <Projects />
        }
      ]
    }
  ])


  return (
    <>
      {/* <Q1/>
      <Q2/>
      <Q3/>
      <Q4/>
      <Dashboard/>
      <Q7/>
      */}

      <RouterProvider router={path}/>
    </>
  )
}

export default App
