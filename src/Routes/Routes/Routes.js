import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CategoryDetails from "../../Pages/CategoryDetails/CategoryDetails";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import MyOrder from "../../Pages/Dashboard/MyOrder/MyOrder";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://assignment-12-server-rosy.vercel.app/categories')
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/category/:id',
                element: <CategoryDetails />,
                loader: ({ params }) => fetch(`https://assignment-12-server-rosy.vercel.app/category/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: 'dashboard/allbuyers',
                element: <AllBuyers />
            },
            {
                path: 'dashboard/allseller',
                element: <AllSeller />
            },
            {
                path: 'dashboard/addproducts',
                element: <AddProduct />
            },
            {
                path: 'dashboard/myorder',
                element: <MyOrder />
            },
            {
                path: 'dashboard/myproducts'
            }
        ]
    }
])