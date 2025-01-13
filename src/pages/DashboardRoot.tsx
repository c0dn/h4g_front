import {SidebarLayout} from "../components/sidebar-layout.tsx";
import WebNav from "./WebNav.tsx";
import MobNav from "./MobNav.tsx";
import {Outlet} from "react-router-dom";

export default function DashboardRoot() {

    return (
        <>
            <SidebarLayout
                sidebar={<WebNav/>}
                navbar={<MobNav/>}
            >
                <Outlet/>
            </SidebarLayout>
        </>
    );

}