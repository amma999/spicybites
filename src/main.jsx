import React, { lazy,Suspense, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Headerc, Footerc, Bodyc } from './Header.jsx'
import About from '../pages/About.jsx'
import Error from './error.jsx'
import Contact from '../pages/contact.jsx'
import { createBrowserRouter ,RouterProvider, Outlet} from 'react-router-dom'
import Restromenu from './restromenu.jsx'
import Usercontext from '../Usercontext.jsx' 
import { Provider } from 'react-redux'
import store from './utils/store.jsx'
import Cart from '../pages/Cart.jsx'
const Instamart = lazy(()=>import("../pages/Instamart.jsx"))


export const Applayout = () => {
  const [user , setuser] = useState({
    name:"yuvi",
    age:18
  }) 
  return (
      <>
      <Provider store={store}>
      <Usercontext.Provider value={{User:user,}} >
          <Headerc />
          <Outlet />
          <Footerc />
        </Usercontext.Provider>
        </Provider>
      </>
  )
}


const appRouter = createBrowserRouter([
{
  path : "/",
  element: <Applayout/>,
  errorElement: <Error/>,
  children : [
    {path: "/",
      element: <Bodyc/>
      },
  
    {path: "/about",
element: <About/>
},
{path: "/contact",
  element: <Contact/>
  },
  {path: "/restaurant/:id",
    element: <Restromenu/>
    },
    // {path: "/instamart",
    //   element: (<Suspense><Instamart/> </Suspense>)
    //   }
    {path: "/cart",
      element: <Cart/>
      }


  ]
}


])
ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={appRouter}/>
  
    
)
