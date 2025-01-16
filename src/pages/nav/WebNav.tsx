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
  BuildingStorefrontIcon,
  ChevronUpIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
  Cog8ToothIcon,
  InboxIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  QueueListIcon,
  RectangleStackIcon,
  ShieldCheckIcon,
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

export default function Navbar() {

  const {user} = useAuth();

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarItem>
          <Avatar src="/src/img/logo.png" />
          <SidebarLabel>MWH-Minimart</SidebarLabel>
        </SidebarItem>
      </SidebarHeader>
      <SidebarBody>
        {/* Main Navigations */}
        <SidebarSection>
          <SidebarItem href="/app">
            <HomeIcon />
            <SidebarLabel>Dashboard</SidebarLabel>
          </SidebarItem>
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
          <SidebarItem href="/app/manage_orders">
            <QueueListIcon />
            <SidebarLabel>Orders</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/app/users">
            <UserCircleIcon />
            <SidebarLabel>Users</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/app/products">
            <ArchiveBoxIcon />
            <SidebarLabel>Products</SidebarLabel>
          </SidebarItem>
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
              <Avatar src="/src/img/profile-photo.jpg" className="size-10" square alt="" />
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
            <DropdownItem href="/app">
              <ArrowRightStartOnRectangleIcon />
              <DropdownLabel>Sign out</DropdownLabel>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </SidebarFooter>
    </Sidebar>
  );
}