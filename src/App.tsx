import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./UserContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRoot } from "react-dom/client";
import './index.css'
import Login from "./pages/Login.tsx";
import DashboardRoot from "./pages/DashboardRoot.tsx";
import DashboardHome from "./pages/DashboardHome.tsx";
import Minimart from "./pages/Minimart.tsx";
import Products from "./pages/Products.tsx";
import Checkout from "./pages/Checkout.tsx";
import Orders from "./pages/Orders.tsx";
import Users from "./pages/Users.tsx";
import Support from "./pages/Support.tsx";
import Profile from "./pages/Profile.tsx";
import ChangePassword from "./pages/ChangePassword.tsx";
import ForgotPassword from "./pages/ForgotPassword.tsx";
import ManageOrders from "./pages/ManageOrders.tsx";
import Missions from "./pages/Missions.tsx";
import Cart from "./pages/Cart.tsx";
import IndexPage from "./pages/IndexPage.tsx";
import Logout from "./pages/Logout.tsx";

const queryClient = new QueryClient()

const Root = () => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <AuthContextProvider>
                    <main>
                        <Outlet />
                    </main>
                    <ReactQueryDevtools initialIsOpen={false} />
                </AuthContextProvider>
            </QueryClientProvider>
        </>
    )
}


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <IndexPage/>
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "logout",
                element: <Logout />
            },
            {
                path: "reset-password",
                element: <ResetPassword />
            },
            {
                path: "change-password",
                element: <ChangePassword />
            },
            {
                path: "forgot-password",
                element: <ForgotPassword />
            },
            {
                path: "app",
                element: <DashboardRoot />,
                children: [
                    {
                        path: "",
                        element: <DashboardHome />
                    },
                    {
                        path: "minimart",
                        element: <Minimart />
                    },
                    {
                        path: "products",
                        element: <Products />
                    },
                    {
                        path: "orders",
                        element: <Orders />
                    },
                    {
                        path: "users",
                        element: <Users />
                    },
                    {
                        path: "manage_orders",
                        element: <ManageOrders />
                    },
                    {
                        path: "cart",
                        element: <Cart />
                    },
                    {
                        path: "checkout",
                        element: <Checkout />
                    },
                    {
                        path: "missions",
                        element: <Missions />
                    },
                    {
                        path: "support",
                        element: <Support />
                    },
                    {
                        path: "profile",
                        element: <Profile />
                    },
                ]
            },
        ],
    },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
    <RouterProvider router={router} />
);
