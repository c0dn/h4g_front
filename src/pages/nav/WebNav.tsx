import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
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
  ArrowRightStartOnRectangleIcon,
  BuildingStorefrontIcon,
  ChevronUpIcon,
  ClipboardDocumentCheckIcon,
  Cog8ToothIcon,
  InboxIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
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

export default function Navbar() {

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
          <SidebarItem href="/app/orders">
            <ClipboardDocumentCheckIcon />
            <SidebarLabel>Orders</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/app/cart">
            <ShoppingCartIcon />
            <SidebarLabel>Cart</SidebarLabel>
          </SidebarItem>
          {/* <SidebarItem href="/app/auction">
            <BuildingStorefrontIcon />
            <SidebarLabel>Auction</SidebarLabel>
          </SidebarItem> */}
          <SidebarItem href="/app/users">
            <UserCircleIcon />
            <SidebarLabel>Users</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/app/products">
            <RectangleStackIcon />
            <SidebarLabel>Products</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
        {/* Recent News */}
        {/* <SidebarSection className="max-lg:hidden">
          <SidebarHeading>Recent News</SidebarHeading>
          <SidebarItem href="/app">Story 1</SidebarItem>
          <SidebarItem href="/app">Story 2</SidebarItem>
        </SidebarSection> */}
        <SidebarSpacer />
        {/* Support */}
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
                <span className="block truncate text-sm/5 font-medium text-zinc-950">John Tan</span>
                <span className="block truncate text-xs/5 font-normal text-zinc-500">
                  john@example.com
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