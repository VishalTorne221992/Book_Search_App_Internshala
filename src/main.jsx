import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Error from './components/Error.jsx'
import CatBooks from './components/CatBooks.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Booklist from './components/Booklist.jsx'
import BookDetails from './components/BookDetails.jsx'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path:"/",
        element: <Booklist />
      },
      {
        path:"/about",
        element: <About />
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/book/:id",
        element: <BookDetails />
      },
      {
        path:"/category/:name",
        element: <CatBooks />,
        errorElement: <Error />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
