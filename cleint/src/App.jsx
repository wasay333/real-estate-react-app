import Navbar from './component/navbar/Navbar'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from 'react-router-dom'
import Homepage from './routes/homepage/Homepage'
import Listpage from './routes/listpage/Listpage'
import Layout from './routes/layout/Layout'
import Singlepage from './routes/singlepage/Singlepage'
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
 }
]
  } 
]);

  return (
   <RouterProvider router={router}/>
  )
}

export default App