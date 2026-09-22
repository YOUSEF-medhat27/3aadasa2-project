import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Privacy from "./components/Privacy/Privacy";
import Notfound from "./components/notfound/Notfound";
import Service from "./components/service/service";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import Details from "./components/Details/Details";
export default function App() {

  let router =createHashRouter([
  {index:true  , element: <Home />} ,
  {path:"service"  , element: <Service />} ,
  {path:"Home"  , element: <Home />} ,
  {path:"privacy"  , element: <Privacy />} ,
  {path:"blog"  , element: <Blog />} ,
  {path:"about"  , element: <About />} ,
  {path:"/blog/:slug"  , element: <Details />} ,

  {path:"*"  , element: <Notfound />} ,



])


  return <>

 <RouterProvider  router={router}/>



  </>
}


