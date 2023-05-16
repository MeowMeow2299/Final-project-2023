import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList/ProductList";
import SignIn from "./pages/SignUp/SignIn";
import SignUpPage from "./pages/SignUp/SignUpPage";
import Payment from "./pages/Payment";
import CardShop from "./components/CardShop";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
} from "react-router-dom";






const Layout = () => {
  return (
    <div className="app">
      <Outlet/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element:<Home/>
      },

      {
        path: "/products:id",
        element:<Products/>
      },

      {
        path: "/signin",
        element:<SignIn/>
      },
      {
        path: "/signup",
        element:<SignUpPage/>
      },

      {
        path: "/cart",
        element:<CardShop/>
      },

      {
        path: "/payment",
        element:<Payment/>
      },

      {
        path: "/productlist",
        element:<ProductList/>
      },

      {
        path: "/productdetailed",
        element:<Product/>
      },
    ]
  },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
};

export default App;