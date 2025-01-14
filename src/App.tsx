import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {AuthContextProvider} from "./UserContext.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {createRoot} from "react-dom/client";
import './index.css'
import Login from "./pages/auth/Login.tsx";
import DashboardRoot from "./pages/DashboardRoot.tsx";
import DashboardHome from "./pages/DashboardHome.tsx";
import Products from "./pages/Products.tsx";
import Product from "./pages/Product.tsx";
import Cart from "./pages/Cart.tsx";
import Checkout from "./pages/Checkout.tsx";
import Orders from "./pages/Orders.tsx";
import Users from "./pages/Users.tsx";
import Auction from "./pages/Auction.tsx";
import Support from "./pages/Support.tsx";
import Profile from "./pages/Profile.tsx";

const queryClient = new QueryClient()

const Root = () => {
    return (
        <>
        <QueryClientProvider client={queryClient}>
            <AuthContextProvider>
                <main>
                    <Outlet/>
                </main>
                <ReactQueryDevtools initialIsOpen={false}/>
            </AuthContextProvider>
        </QueryClientProvider>
        </>
    )
}


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "app",
                element: <DashboardRoot/>,
                children: [
                    {
                      path: "",
                      element: <DashboardHome/>
                    },
                    {
                        path: "products",
                        element: <Products/>
                    },
                    {
                        path: "product",
                        element: <Product/>
                    },
                    {
                        path: "orders",
                        element: <Orders/>
                    },
                    {
                        path: "Users",
                        element: <Users/>
                    },
                    {
                        path: "cart",
                        element: <Cart/>
                    },
                    {
                        path: "checkout",
                        element: <Checkout/>
                    },
                    {
                        path: "auction",
                        element: <Auction/>
                    },
                    {
                        path: "support",
                        element: <Support/>
                    },
                    {
                        path: "profile",
                        element: <Profile/>
                    },
                ]
            },
        ],
    },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
    <RouterProvider router={router}/>
);
