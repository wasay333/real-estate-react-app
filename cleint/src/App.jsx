import Navbar from './component/navbar/Navbar'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from 'react-router-dom'
import Homepage from './routes/homepage/Homepage'
import Listpage from './routes/listpage/Listpage'
import {Layout, RequireAuth } from './routes/layout/Layout.jsx'
import Singlepage from './routes/singlepage/Singlepage'
import Profile from './routes/profile/Profile'
import Register from './routes/registerpage/Registerpage'
import Login from './routes/login/Login'
import ProfileUpdatePage from './routes/profileUpdatePage/ProfileUpdatePage.jsx'
function App() {
  const router = createBrowserRouter([
  {
path:'/',
element:<Layout/>,
children:[
  {
 path:'/',   
element:<Homepage/>  
}, {
  path:'/list',   
 element:<Listpage/>  
 },
 {
  path:'/:id',   
 element:<Singlepage/>  
 },
 {
  path:'/register',   
 element:<Register/>  
 },
 {
  path:'/login',   
 element:<Login/>  
 }
]
  },
  {
    path:'/',
    element:<RequireAuth/>,
    children:[
      {
        path:'/profile',   
       element:<Profile/>  
       },
       {
        path:'/profile/update',
        element:<ProfileUpdatePage/>
       } 
      ]
  }
]);

  return (
   <RouterProvider router={router}/>
  )
}

export default App