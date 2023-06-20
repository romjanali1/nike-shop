
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import NaveBar from './component/NaveBar/NaveBar'
import NotFound from './component/NotFound/NotFound'
import Home from './component/Home/Home'
import About from './component/About/About'
import Products from './component/Products/Products'
import Product from './component/Product/Product'
import Login from './component/Login/Login'
import Signin from './component/Signin/Signin'




function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <NaveBar></NaveBar>,
      children:[
        {
          path: '*', element: <NotFound></NotFound>
        },

        {
          path: '/', element: <Home></Home>
        },
        {
          path: 'about', element: <About></About>
        },

        {
          path: 'products', element: <Products></Products>
        },

        {
          path: 'product', element: <Product></Product>
        },

        {
          path: 'login', element: <Login></Login>
        },
        {
          path: 'signin', element: <Signin></Signin>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
      
    </div>
    
  )
}

export default App
