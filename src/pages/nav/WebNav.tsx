import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from '../../components/sidebar'
import { Avatar } from '../../components/avatar'
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '../../components/dropdown'
import {
  ArchiveBoxIcon,
  ArrowRightStartOnRectangleIcon,
  ChevronUpIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
  QueueListIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/16/solid'
import {
  HomeIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/20/solid'
import {useAuth} from "../../hooks/useAuth.ts";
import logo from "../../img/logo.png";
import profilePhoto from "../../img/profile-photo.jpg";

export default function Navbar() {

  const {user} = useAuth();

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarItem>
          <Avatar src={logo} />
          <SidebarLabel>MWH-Minimart</SidebarLabel>
        </SidebarItem>
      </SidebarHeader>
      <SidebarBody>
        {/* Main Navigations */}
        <SidebarSection>
          {/* Dashboard - Visible to All */}
          <SidebarItem href="/app">
            <HomeIcon />
            <SidebarLabel>Dashboard</SidebarLabel>
          </SidebarItem>

          {/* User Only Navigation Items */}
          {user?.role !== 'Admin' && (
            <>
              <SidebarItem href="/app/minimart">
                <ShoppingBagIcon />
                <SidebarLabel>Minimart</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/app/cart">
                <ShoppingCartIcon />
                <SidebarLabel>Cart</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/app/orders">
                <ClipboardDocumentCheckIcon />
                <SidebarLabel>Orders</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/app/missions">
                <ClipboardDocumentIcon/>
                <SidebarLabel>Missions</SidebarLabel>
              </SidebarItem>
            </>
          )}

          {/* Admin Only Navigation Items */}
          {user?.role === 'Admin' && (
            <>
              <SidebarItem href="/app/manage_orders">
                <QueueListIcon />
                <SidebarLabel>Manage Orders</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/app/users">
                <UserCircleIcon />
                <SidebarLabel>Users</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/app/products">
                <ArchiveBoxIcon />
                <SidebarLabel>Products</SidebarLabel>
              </SidebarItem>
            </>
          )}
        </SidebarSection>

        {/* Support */}
        <SidebarSpacer />
        <SidebarSection>
          <SidebarItem href="/app/support">
            <QuestionMarkCircleIcon />
            <SidebarLabel>Support</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>
      {/* Profile Footer */}
      <SidebarFooter className="max-lg:hidden">
        <Dropdown>
          <DropdownButton as={SidebarItem}>
            <span className="flex min-w-0 items-center gap-3">
              <Avatar src={profilePhoto} className="size-10" square alt="" />
              <span className="min-w-0">
                <span className="block truncate text-sm/5 font-medium text-zinc-950">{user?.name}</span>
                <span className="block truncate text-xs/5 font-normal text-zinc-500">
                  {user?.email}
                </span>
              </span>
            </span>
            <ChevronUpIcon />
          </DropdownButton>
          <DropdownMenu className="min-w-64" anchor="top start">
            <DropdownItem href="/app/profile">
              <UserIcon />
              <DropdownLabel>My profile</DropdownLabel>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem href="/logout">
              <ArrowRightStartOnRectangleIcon />
              <DropdownLabel>Sign out</DropdownLabel>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </SidebarFooter>
    </Sidebar>
  );
}
