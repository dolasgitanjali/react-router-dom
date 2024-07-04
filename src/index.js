import ReactDom from "react-dom/client"
import "./style.css"
import Home from "./views/Home/Home"
import About from "./views/About/About"
import Contact from "./views/Contact/Contact"
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const root = ReactDom.createRoot(document.getElementById('root'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  }
]);

root.render(<RouterProvider router={router}/>)
