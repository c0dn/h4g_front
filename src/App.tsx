import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {AuthContextProvider} from "./UserContext.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {createRoot} from "react-dom/client";
import './index.css'
import Home from "./pages/Home.tsx";
import Login from "./pages/auth/Login.tsx";
import DashboardRoot from "./pages/DashboardRoot.tsx";
import Product from "./pages/Product.tsx";
import DashboardHome from "./pages/dashboard/DashboardHome.tsx";
import Products from "./pages/Products.tsx";

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
                path: "",
                element: <Home/>
            },
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
                        path: "product",
                        element: <Product/>
                    },
                    {
                        path: "products",
                        element: <Products/>
                    },
                ]
            },
        ],
    },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
    <RouterProvider router={router}/>
);
