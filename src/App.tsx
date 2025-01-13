import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {AuthContextProvider} from "./UserContext.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {createRoot} from "react-dom/client";
import './index.css'
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import WebNav from "./pages/WebNav.tsx";
import MobNav from "./pages/MobNav.tsx";
import { SidebarLayout } from './components/sidebar-layout'

const queryClient = new QueryClient()

const Root = () => {
    return (
        <>
        <QueryClientProvider client={queryClient}>
            <AuthContextProvider>
                <main>
                    <SidebarLayout
                        sidebar={<WebNav/>}
                        navbar={<MobNav/>}
                        >
                        <Outlet/>
                    </SidebarLayout>
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
            }
            // {
            //     path: "service/:uuid",
            //     element: <ServiceRoot/>,
            //     children: [
            //         {
            //             path: "",
            //             element: <ServiceDetail/>
            //         },
            //         {
            //             path: "mfa",
            //             element: <ServiceMFA/>
            //         }
            //     ]
            // },
        ],
    },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
    <RouterProvider router={router}/>
);
