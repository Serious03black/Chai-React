import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './layout.jsx'
import Home from '../src/components/Home/Home.jsx'
import About from '../src/components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import GIthub from './Github/GIthub.jsx'
// const router = createBrowserRouter(
// [
//   {
//     path: '/',//top level element
//     element: <Layout />,
//     children: [
//       {
//         path: '',//child element
//         element: <Home/>
//       },
//       {
//         path: 'About',//child element
//         element:<About/>
//       },
//       {
//         path: 'Contact',//child element
//         element: <Contact/>  // default page
//       }
//     ]
//   }
// ]
// )
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="User/:UserId" element={<User />} />
      <Route path="Github" element={<GIthub />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
 </StrictMode>,
)
