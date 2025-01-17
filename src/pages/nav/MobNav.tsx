import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from '../../components/navbar'
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
    Cog8ToothIcon,
    LightBulbIcon,
    ShieldCheckIcon,
    UserIcon,
  } from '@heroicons/react/16/solid'
import profilePhoto from "../../img/profile-photo.jpg"
  import {
    InboxIcon,
    MagnifyingGlassIcon,
  } from '@heroicons/react/20/solid'


export default function MobNav() {
    return (
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            {/* <NavbarItem href="/search" aria-label="Search">
              <MagnifyingGlassIcon />
            </NavbarItem> */}
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar src={profilePhoto} square />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="bottom end">
                <DropdownItem href="/profile">
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
          </NavbarSection>
        </Navbar>
    );

}
